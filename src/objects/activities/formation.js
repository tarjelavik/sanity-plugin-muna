import { timespan, tookPlaceAt, referredToBy } from "../../props";

var capitalize = require("capitalize");

// Implisit 'wasFormedBy' to parent group

export default {
  title: "Formation",
  name: "formation",
  type: "object",
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Hendelsestype" },
          },
        },
      ],
    },
    {
      name: "wasFormedFrom",
      title: "Opprettet fra",
      titleEN: "Formed from",
      type: "array",
      of: [{ type: "reference", to: [{ type: "group" }] }],
    },
    timespan,
    tookPlaceAt,
    {
      name: "wasMotivatedBy",
      title: "Motivert av",
      titleEN: "Motivated by",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
    },
    referredToBy,
  ],
  preview: {
    select: {
      type: "_type",
    },
    prepare(selection) {
      const { type } = selection;
      return {
        title: `${capitalize(type)}`,
      };
    },
  },
};
