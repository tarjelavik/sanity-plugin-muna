import { timespan, referredToBy, carriedOutBy, tookPlaceAt } from "../../props";

export default {
  title: "Treatment assessment",
  name: "treatmentAssessment",
  type: "object",
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
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
