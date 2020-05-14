import { label } from "../props";

export default {
  name: 'annotation',
  type: 'object',
  title: 'Annotation',
  options: {
    hotspot: true
  },
  fields: [
    label,
    {
      name: "target",
      title: "Mål",
      titleEN: "Target",
      type: "reference",
      to: [{ type: "collection" }, { type: "actor" }, { type: "group" }],
    },
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
            filterParams: { sysCat: "Teksttype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'caption'
    }
  }
}
