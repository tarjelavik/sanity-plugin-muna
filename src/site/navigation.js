import {MdNavigation} from 'react-icons/md'

export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  icon: MdNavigation,
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Title'
  },
  {
    name: 'id',
    type: 'string',
    title: 'Id'
  },
  {
    name: 'navItems',
    type: 'array',
    title: 'Navigation items',
    of: [{
      type: 'route'
    }, {
      type: 'navItem'
    }, {
      type: 'navSection'
    }]
  }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
