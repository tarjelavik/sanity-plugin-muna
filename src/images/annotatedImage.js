export default {
  name: 'annotatedImage',
  type: 'image',
  title: 'Annotated image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "annotations",
      title: "Annotation",
      type: "string",
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
    {
      name: 'alt',
      title: 'Alternative tekst',
      titleEN: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      type: 'string',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.warning('You have to fill out the alternative text.')
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
