import { timespan, referredToBy, carriedOutBy, tookPlaceAt } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Treatment assessment",
  name: "treatmentAssessment",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    carriedOutBy,
    timespan,
    {
      name: "success",
      title: "Suksess?",
      titleEN: "Success?",
      type: "boolean",
    },
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
        title: `Assessed${date ? ", dated " + date : ""}`,
      };
    },
  },
};
