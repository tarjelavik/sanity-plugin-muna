import {FaImage} from 'react-icons/fa'

export default {
  title: 'Visual object',
  name: 'visualItem',
  type: 'document',
  icon: FaImage,
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'activityStream',
      title: 'Aktivitetsstrøm',
      titleEN: 'Activity stream',
      description: 'Events and activities connected to this object',
      type: 'array',
      of: [
        {type: 'creation'}
      ]
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
