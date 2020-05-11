import { appelationTypes } from "../vocabularies/defaultVocabularies";
import { timespan } from "../props";

export default {
  title: "Name",
  name: "name",
  type: "object",
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
        layout: "radio",
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
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlock",
    },
  ],
  preview: {
    select: {
      name: "name",
      type: "nameType",
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
