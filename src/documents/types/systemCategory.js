import {FaTag} from 'react-icons/fa'
import { editorialState, accessState, label, altLabel } from "../../props";

export default {
  title: 'System category',
  name: 'systemCategory',
  type: 'document',
  initialValue: {
    editorialState: 'workingDraft',
    accessState: 'secret'
  },
  icon: FaTag,
  fieldsets: [
    {
      name: 'state',
      title: 'State',
      options: {collapsible: true, collapsed: false}
    }
  ],
  fields: [
    editorialState,
    accessState,
    label,
    altLabel,
    {
      name: 'broader',
      title: 'Overordnet term',
      titleEN: 'Broader',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'typeClass'}]}
      ]
    },
    {
      name: 'narrower',
      title: 'Underordnet term',
      titleEN: 'Narrower',
      description: 'Trenger vi narrower? Blir mye å registrere...',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'typeClass'}]}
      ]
    },
    {
      name: 'domain',
      title: 'Domene',
      titleEN: 'Domain',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'typeClass'}]}
      ]
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
      title: 'label.nor',
      broader: 'broader.0.label.nor'
    },
    prepare (selection) {
      const {title, broader} = selection
      return {
        title: title,
        subtitle: broader ? `⬆️` + broader : '🔝 Overordnet type/konsept'
      }
    }
  }
}
