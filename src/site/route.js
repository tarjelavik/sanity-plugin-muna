import {MdRouter} from 'react-icons/md'

export default {
  name: 'route',
  type: 'object',
  title: 'Route',
  icon: MdRouter,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      description: 'This title populates meta-tags on the webpage'
    },
    {
      name: 'slug',
      type: 'localeSlug',
      title: 'Slug'
    },
    /* {
      name: 'page',
      type: 'reference',
      to: [{type: 'page'}]
    }, */
    {
      title: 'Open graph',
      name: 'openGraph',
      type: 'openGraph'
    }
  ],
  preview: {
    select: {
      title: 'title.nor',
      subtitle: 'slug.nor'
    }
  }
}
