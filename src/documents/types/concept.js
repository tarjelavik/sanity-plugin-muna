import {FaTag} from 'react-icons/fa'
import { editorialState, accessState, label, altLabel } from "../../props"
import { defaultFieldsets } from '../../fieldsets'
import { coalesceLabel } from '../../helpers/helpers'

export default {
  title: 'Concept',
  name: 'concept',
  type: 'document',
  initialValue: {
    editorialState: "published",
    accessState: "open",
  },
  icon: FaTag,
  fieldsets: defaultFieldsets,
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
        {type: 'reference', to: [{type: 'concept'}]}
      ]
    },
    /* {
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
    }, */
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
      title: 'label',
      broader: 'broader'
    },
    prepare (selection) {
      const {title, broader} = selection
      return {
        title: coalesceLabel(title),
        subtitle: coalesceLabel(broader) ? `⬆️` + coalesceLabel(broader) : '🔝 Overordnet type/konsept'
      }
    }
  }
}
