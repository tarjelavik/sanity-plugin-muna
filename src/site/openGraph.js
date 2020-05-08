export default {
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  fieldsets: [
    {
      title: 'Image',
      name: 'image',
      options: {
        collapsible: true,
        collabpsed: true
      }
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeBlockSimple'
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'image',
      fieldset: 'image'
    }
  ],
  preview: {
    select: {
      title: 'title.nor',
      route: 'route.slug.current',
      link: 'link'
    },
    prepare ({title, route, link}) {
      return {
        title,
        subtitle: route
          ? `Route: /${route}/`
          : link
            ? `External link: ${link}`
            : 'Not set'
      }
    }
  }
}
