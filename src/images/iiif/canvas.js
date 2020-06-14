import { label } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Canvas",
  name: "canvas",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    label,
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'annotationPage'}]
    },
    {
      title: 'annotations',
      name: 'annotations',
      type: 'array',
      of: [{type: 'annotationPage'}]
    }
  ],
};
