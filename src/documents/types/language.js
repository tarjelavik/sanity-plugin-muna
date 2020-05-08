import {FaLanguage} from 'react-icons/fa'

export default {
  title: 'Language',
  name: 'language',
  type: 'document',
  icon: FaLanguage,
  fieldsets: [
    {
      name: 'state',
      title: 'State',
      options: {collapsible: true, collapsed: false}
    }
  ],
  fields: [
    {
      name: 'label',
      title: 'Foretrukket navn',
      titleEN: 'Preferred label',
      type: 'localeString'
    },
    {
      name: 'altLabel',
      title: 'Alternativt navn',
      titleEN: 'Alternative label',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'label.nor'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: title
      }
    }
  }
}
