import { timespan, tookPlaceAt, referredToBy } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

var capitalize = require("capitalize");

// Implisit 'wasFormedBy' to parent group

export default {
  title: "Formation",
  name: "formation",
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
