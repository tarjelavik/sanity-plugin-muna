import { timespan, carriedOutBy, referredToBy, tookPlaceAt } from "../../props";

export default {
  title: "Sampling",
  name: "sampling",
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
