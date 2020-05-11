import { timespan, carriedOutBy, tookPlaceAt } from "../../props";

export default {
  title: "Destruction",
  name: "endingActivity",
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
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Hendelsestype" },
          },
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
