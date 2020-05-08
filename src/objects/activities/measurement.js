export default {
  title: 'Measurement',
  name: 'measurement',
  type: 'object',
  fields: [
    {
      name: 'timespan',
      title: 'Tidsspenn',
      titleEN: 'Timespan',
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
    },
    {
      name: 'carriedOutBy',
      title: 'Utført av',
      titleEN: 'Carried out by',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'actor', title: 'Actor'}]}
      ]
    },
    {
      name: 'observedDimension',
      title: 'Dimmensjon',
      titleEN: 'Dimension',
      description: 'Events and activities connected to this object',
      type: 'array',
      of: [
        {type: 'dimension'}
      ]
    },
    {
      name: 'tookPlaceAt',
      title: 'Fant sted ved',
      titleEN: 'Took place at',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'place'}
          ]
        }
      ]
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      type: 'localeBlock'
    }
  ],
  preview: {
    select: {
      date: 'date'
    },
    prepare (selection) {
      const {date} = selection
      return {
        title: `Measurement${date ? ', dated ' + date : ''}`
      }
    }
  }
}
