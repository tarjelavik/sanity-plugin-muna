import { coalesceLabel } from "../helpers/helpers";

export default {
  title: "Dimension",
  name: "dimension",
  type: "object",
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
      type: "hasType.label",
      value: "value",
      unit: "hasUnit.label",
    },
    prepare(selection) {
      const { type, value, unit } = selection;
      return {
        title: `${coalesceLabel(type)}: ${value || ""} ${coalesceLabel(unit) || ""}`,
      };
    },
  },
};
