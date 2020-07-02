import { FaCrown } from 'react-icons/fa'
import { label, labelSingleton, identifiedBy } from "../props"
import { defaultFieldsets } from '../fieldsets'

/**
 * WIP
 */

export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  icon: FaCrown,
  fieldsets: defaultFieldsets,
  fields: [
    labelSingleton,
    identifiedBy,
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
