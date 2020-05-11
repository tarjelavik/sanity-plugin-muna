import { timespan } from "../../props";

export default {
  title: "Beginning activity",
  name: "beginningActivity",
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
    {
      name: "tookPlaceAt",
      title: "Fant sted ved",
      titleEN: "Took place at",
      type: "array",
      of: [{ type: "reference", to: [{ type: "place" }] }],
    },
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
  ],
  preview: {
    select: {
      type: "type",
    },
    prepare(selection) {
      const { type } = selection;
      return {
        title: `${type}`,
      };
    },
  },
};
