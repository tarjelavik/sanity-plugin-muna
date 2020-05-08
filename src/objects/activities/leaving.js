var capitalize = require('capitalize')

export default {
  title: 'Leaving',
  name: 'leaving',
  type: 'object',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Hendelsestype'}
          }
        }
      ]
    },
    {
      name: 'timespan',
      title: 'Tidsspenn',
      titleEN: 'Timespan',
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
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
      name: 'leftBy',
      title: 'Forlot',
      titleEN: 'Left',
      description: 'Actor(s) that left this group',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'actor'},
            {type: 'group'}
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
      type: '_type',
      date: 'date'
    },
    prepare (selection) {
      const {type, date} = selection
      return {
        title: `${capitalize(type)}${date ? ' at ' + date : ''}`
      }
    }
  }
}
