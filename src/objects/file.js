import { label, rights } from '../props'

export default {
  title: 'Manuscript',
  name: 'manuscript',
  type: 'file',
  fields: [
    label,
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      type: 'localeBlockSimple'
    },
    rights,
    {
      name: 'souce',
      title: 'Kilde',
      titleEN: 'Source',
      type: 'url'
    }
  ]
}
