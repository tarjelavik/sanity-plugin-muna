import { label } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Range",
  name: "range",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    label,
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "canvas" }, { type: "range" }],
    },
  ],
};
