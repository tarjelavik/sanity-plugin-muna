export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
    metadata: ['exif', 'location', 'lqip', 'palette'],
  },
  fields: [
    {
      name: 'caption',
      title: 'Bildetekst',
      titleEN: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      title: 'Alternative tekst',
      titleEN: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      type: 'string',
      validation: Rule => Rule.warning('You should to fill out the alternative text.')
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
