import { units } from "../vocabularies/defaultVocabularies";
import { label } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Dimension",
  name: "dimension",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "reference",
      to: [{ type: "dimensionType" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "value",
      title: "Verdi",
      titleEN: "Value",
      type: "number",
    },
    {
      name: "hasUnit",
      title: "Måleenhet",
      titleEN: "Measurement unit",
      description: "WIP, should use API",
      type: "reference",
      to: [{ type: "measurementUnit" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      type: "hasType.label.nor",
      value: "value",
      unit: "hasUnit",
    },
    prepare(selection) {
      const { type, value, unit } = selection;
      return {
        title: `${type}: ${value || ""} ${unit || ""}`,
      };
    },
  },
};
