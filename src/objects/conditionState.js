import { valueSlider } from "../props"

export default {
  name: 'conditionState',
  title: 'Tilstandsstatus',
  titleEN: 'Condition state',
  type: 'object',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'reference',
      to: [{type: 'conditionType'}],
      validation: Rule => Rule.required()
    },
    valueSlider,
    {
      name: 'attributes',
      title: 'Egenskaper',
      titleEN: 'Attributes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Missing', value: 'missing'},
          {title: 'Partial remains', value: 'partialRemains'}
        ]
      }
    }
  ],
  preview: {
    select: {
      type: 'hasType.label.nor',
      value: 'value'
    },
    prepare (selection) {
      const {type, value} = selection
      return {
        title: type + ': ' + value + ' / 100'
      }
    }
  }
}
