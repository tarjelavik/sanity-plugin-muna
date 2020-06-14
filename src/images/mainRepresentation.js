export default {
  name: 'mainRepresentation',
  title: 'Image',
  type: 'image',
  initialValue: {
    conformsTo: 'http://iiif.io/api/image'
  },
  options: {
    hotspot: true,
    metadata: ['exif', 'location', 'lqip', 'palette']
  },
  fields: [
    {
      name: 'caption',
      title: 'Bildetekst',
      titleEN: 'Caption',
      type: 'localeString',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'conformsTo',
      title: 'Conforms to',
      type: 'string'
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
