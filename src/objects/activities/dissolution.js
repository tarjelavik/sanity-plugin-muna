import { timespan, tookPlaceAt, referredToBy } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

var capitalize = require("capitalize");

// Implisit 'wasFormedBy' to parent group

export default {
  title: "Dissolution",
  name: "dissolution",
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
