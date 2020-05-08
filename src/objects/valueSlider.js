export default {
  title: 'Slider',
  name: 'valueSlider',
  type: 'object',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'reference',
      to: [{type: 'typeClass'}],
      options: {
        filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
        filterParams: {sysCat: 'Tilstandstype'}
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'condition',
      title: 'Tilstand',
      titleEN: 'Condition',
      description: '1 is horrible, 100 is MINT!',
      type: 'number',
      options: {
        layout: 'slider',
        range: {min: 1, max: 100, step: 1}
      }
    },
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
      value: 'condition'
    },
    prepare (selection) {
      const {type, value} = selection
      return {
        title: type + ': ' + value + ' / 100'
      }
    }
  }
}
