import { label, license } from '../props'

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
    license,
    {
      name: 'souce',
      title: 'Kilde',
      titleEN: 'Source',
      type: 'url'
    }
  ]
}
