import {rights} from '../vocabularies/defaultVocabularies'

export default {
  title: 'Manuscript',
  name: 'manuscript',
  type: 'file',
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      type: 'localeBlockSimple'
    },
    {
      name: 'rights',
      title: 'Rettigheter',
      titleEN: 'Rights',
      description: 'Choose the correct lisense or mark',
      fieldset: 'minimum',
      type: 'string',
      options: {
        list: rights
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'souce',
      title: 'Kilde',
      titleEN: 'Source',
      type: 'url'
    }
  ]
}
