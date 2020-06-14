import { timespan, carriedOutBy, tookPlaceAt } from "../../props";

export default {
  title: "Destruction",
  name: "destruction",
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
          to: [{ type: "eventType" }],
        },
      ],
    },
    carriedOutBy,
    timespan,
    tookPlaceAt,
  ],
  preview: {
    select: {
      date: "productionDate",
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: `Ending${date ? ", dated " + date : ""}`,
      };
    },
  },
};
