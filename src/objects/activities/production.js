import {
  timespan,
  carriedOutBy,
  tookPlaceAt,
  referredToBy,
  usedGeneralTechnique,
  usedSpecificTechnique,
} from "../../props";

var capitalize = require("capitalize");

export default {
  title: "Production",
  name: "production",
  type: "object",
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "technique",
      title: "Teknikk",
      options: { collapsible: true, collapsed: false },
    },
  ],
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
    {
      name: "geoJSON",
      title: "Lokasjon",
      titleEN: "Geographic features",
      type: "array",
      of: [{ type: "feature" }],
    },
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
