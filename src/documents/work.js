import { FaCrown } from 'react-icons/fa'
import { editorialState, accessState, labelSingleton, identifiedBy } from "../props"
import { defaultFieldsets } from '../fieldsets'

export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  icon: FaCrown,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      description: "",
      descriptionEN: "",
      fieldset: "minimum",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "workType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
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
      title: 'label'
    },
    prepare (selection) {
      const {title} = selection

      return {
        title: title
      }
    }
  }
}
