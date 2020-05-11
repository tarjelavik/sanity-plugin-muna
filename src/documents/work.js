import {FaCrown} from 'react-icons/fa'
import { label } from "../props"

export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  icon: FaCrown,
  fields: [
    label,
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
