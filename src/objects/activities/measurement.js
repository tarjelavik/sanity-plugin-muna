import { timespan, referredToBy, tookPlaceAt, carriedOutBy } from "../../props";

export default {
  title: "Measurement",
  name: "measurement",
  type: "object",
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: "observedDimension",
      title: "Dimensjon",
      titleEN: "Dimension",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "dimension" }],
    },
    timespan,
    carriedOutBy,
    referredToBy,
    tookPlaceAt,
  ],
  preview: {
    select: {
      date: "date",
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: `Measurement${date ? ", dated " + date : ""}`,
      };
    },
  },
};
