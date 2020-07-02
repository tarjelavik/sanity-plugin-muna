import {FaCog} from 'react-icons/fa'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: FaCog,
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These will be the default meta tags on all pages that have not set their own',
      type: 'openGraph'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      type: 'color',
      name: 'primaryColor',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc'
    },
    {
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color for websites, press materials, etc'
    }
  ]
}