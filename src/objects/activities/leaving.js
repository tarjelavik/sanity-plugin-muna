import { timespan, tookPlaceAt, referredToBy } from "../../props";

var capitalize = require("capitalize");

export default {
  title: "Leaving",
  name: "leaving",
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
    timespan,
    tookPlaceAt,
    {
      name: "leftBy",
      title: "Forlot",
      titleEN: "Left",
      description: "Actor(s) that left this group",
      type: "array",
      of: [{ type: "reference", to: [{ type: "actor" }, { type: "group" }] }],
    },
    referredToBy,
  ],
  preview: {
    select: {
      type: "_type",
      date: "date",
    },
    prepare(selection) {
      const { type, date } = selection;
      return {
        title: `${capitalize(type)}${date ? " at " + date : ""}`,
      };
    },
  },
};
