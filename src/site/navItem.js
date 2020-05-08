export default {
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  fields: [
    {
      name: 'text',
      type: 'localeString',
      title: 'Text'
    },
    {
      name: 'internal',
      type: 'reference',
      title: 'Internal',
      to: [{type: 'route'}]
    },
    {
      name: 'external',
      type: 'url',
      title: 'External'
    }
  ],
  preview: {
    select: {
      text: 'text.nor',
      internal: 'internal.slug.nor',
      external: 'external'
    },
    prepare ({text, internal, external}) {
      const link =
        internal || external
          ? internal || `${external} 🌍`
          : '⚠️ No link'
      return {
        title: text,
        subtitle: link
      }
    }
  }
}
