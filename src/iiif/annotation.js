import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Annotation",
  name: "annotation",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      title: 'items',
      name: 'items',
      type: 'array',
      of: [{type: 'annotation'}]
    }
  ],
};
