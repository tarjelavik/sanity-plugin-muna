import { timespan, carriedOutBy, referredToBy, tookPlaceAt } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Sampling",
  name: "sampling",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    carriedOutBy,
    timespan,
    tookPlaceAt,
    referredToBy,
  ],
  preview: {
    select: {
      date: "productionDate",
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: `Transformation${date ? ", dated " + date : ""}`,
      };
    },
  },
};
