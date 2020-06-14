import {
  timespan,
  carriedOutBy,
  tookPlaceAt,
  referredToBy,
  usedGeneralTechnique,
  usedSpecificTechnique,
} from "../../props";
import { defaultFieldsets } from "../../fieldsets";

var capitalize = require("capitalize");

export default {
  title: "Production",
  name: "production",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: "consistsOf",
      title: "Underaktiviteter",
      titleEN: "Sub activities",
      type: "array",
      of: [{ type: "production" }],
    },
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "eventType" }],
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
    referredToBy,
    {
      name: "hasModified",
      title: "Har modifisert",
      titleEN: "Has modified",
      description: "A production can modify an existing object",
      type: "array",
      of: [{ type: "reference", to: [{ type: "madeObject" }] }],
    },
    usedGeneralTechnique,
    usedSpecificTechnique,
    {
      name: "employed",
      title: "Benyttet",
      titleEN: "Employed",
      description: "WIP, could be a API call to some source of authorities",
      type: "array",
      of: [{ type: "reference", to: [{ type: "material" }] }],
    },
  ],
  preview: {
    select: {
      date: "productionDate",
      type: "_type",
    },
    prepare(selection) {
      const { type, date } = selection;
      return {
        title: `${capitalize(type)}${date ? ", dated " + date : ""}`,
      };
    },
  },
};
