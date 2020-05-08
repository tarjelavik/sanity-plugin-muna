export default {
  name: 'imageCompare',
  title: 'Compare images',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'before',
      title: 'Before',
      type: 'array',
      of: [
        {type: 'figure'},
        {type: 'reference',
          to: [
            {type: 'madeObject'}
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'after',
      title: 'After',
      type: 'array',
      of: [
        {type: 'figure'},
        {type: 'reference',
          to: [
            {type: 'madeObject'}
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Bildetekst',
      titleEN: 'Caption',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'label.nor'
    }
  }
}
