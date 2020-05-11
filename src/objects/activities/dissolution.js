import { timespan, tookPlaceAt } from "../../props";

var capitalize = require("capitalize");

// Implisit 'wasFormedBy' to parent group

export default {
  title: "Dissolution",
  name: "dissolution",
  type: "object",
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
    timespan,
    tookPlaceAt,
    {
      name: "wasMotivatedBy",
      title: "Motivert av",
      titleEN: "Motivated by",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
    },
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlock",
    },
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
