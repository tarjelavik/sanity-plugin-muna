import { timespan, carriedOutBy, tookPlaceAt } from "../../props";
export default {
  title: "Creation",
  name: "creation",
  type: "object",
  fields: [carriedOutBy, timespan, tookPlaceAt],
  preview: {
    select: {
      date: "productionDate",
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: "Production, dated " + date,
      };
    },
  },
};
