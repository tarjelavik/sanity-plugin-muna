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
    timespan,
    carriedOutBy,
    {
      name: "observedDimension",
      title: "Dimmensjon",
      titleEN: "Dimension",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "dimension" }],
    },
    tookPlaceAt,
    referredToBy,
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
