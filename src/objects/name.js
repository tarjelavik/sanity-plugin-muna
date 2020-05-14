import { appelationTypes } from "../vocabularies/defaultVocabularies";
import { timespan, referredToBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Name",
  name: "name",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: "name",
      title: "Navn",
      titleEN: "Name",
      type: "string",
    },
    {
      name: "hasType",
      title: "Type",
      titleEN: "Type",
      type: "string",
      options: {
        list: appelationTypes,
        layout: "dropdown",
      },
    },
    {
      name: "language",
      title: "Språk",
      titleEN: "Language",
      type: "array",
      of: [{ type: "reference", to: [{ type: "language" }] }],
    },
    timespan,
    referredToBy,
  ],
  preview: {
    select: {
      name: "name",
      type: "hasType",
    },
    prepare(selection) {
      const { type, name } = selection;
      return {
        title: `${name}`,
        subtitle: `${appelationTypes.find((id) => id.value === type).title}`,
      };
    },
  },
};
