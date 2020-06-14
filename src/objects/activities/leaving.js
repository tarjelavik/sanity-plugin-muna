import { timespan, tookPlaceAt, referredToBy } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

var capitalize = require("capitalize");

export default {
  title: "Leaving",
  name: "leaving",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "eventType" }],
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
