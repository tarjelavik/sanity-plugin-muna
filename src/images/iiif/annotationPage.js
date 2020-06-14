import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Annotation page",
  name: "annotationPage",
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
