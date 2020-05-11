import { timespan, tookPlaceAt } from "../../props";

export default {
  title: "Treatment",
  name: "treatment",
  type: "object",
  fields: [
    {
      name: "carriedOutBy",
      title: "Utført av",
      titleEN: "Carried out by",
      type: "array",
      of: [{ type: "actorInRole" }],
    },
    timespan,
    tookPlaceAt,
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlock",
    },
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
