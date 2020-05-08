export default {
  name: 'navSection',
  type: 'object',
  title: 'NavSection',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'NavItems',
      of: [{type: 'navItem'}]
    }
  ],
  preview: {
    select: {
      title: 'title.nor',
      navItems: 'navItems'
    },
    prepare ({title, navItems = []}) {
      return {
        title,
        subtitle: navItems.map(({text}) => text || 'Missing text').join(', ')
      }
    }
  }
}
