import { timespan, tookPlaceAt, referredToBy, carriedOutBy } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Treatment",
  name: "treatment",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    carriedOutBy,
    timespan,
    tookPlaceAt,
    referredToBy,
    {
      name: "assessedBy",
      title: "Vurdert av",
      titleEN: "Assessment",
      type: "array",
      of: [{ type: "treatmentAssessment" }],
    },
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
