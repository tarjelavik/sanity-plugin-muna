import {units} from '../vocabularies/defaultVocabularies'

export default {
  title: 'Dimension',
  name: 'dimension',
  type: 'object',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      description: 'WIP, should use API',
      type: 'string',
      options: {
        list: [
          {title: 'Width', value: 'width'},
          {title: 'Height', value: 'height'},
          {title: 'Depth', value: 'depth'},
          {title: 'Diameter', value: 'diameter'},
          {title: 'Weight', value: 'weight'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'value',
      title: 'Verdi',
      titleEN: 'Value',
      type: 'number'
    },
    {
      name: 'hasUnit',
      title: 'Måleenhet',
      titleEN: 'Measurement unit',
      description: 'WIP, should use API',
      type: 'string',
      options: {
        list: units
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      type: 'hasType',
      value: 'value',
      unit: 'hasUnit'
    },
    prepare (selection) {
      const {type, value, unit} = selection
      return {
        title: `${type || ''}: ${value || ''} ${unit || ''}`
      }
    }
  }
}
