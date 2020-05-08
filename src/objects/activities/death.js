var capitalize = require('capitalize')

export default {
  title: 'Death',
  name: 'death',
  fieldsets: [
    {
      name: 'time',
      title: 'Time',
      options: {collapsible: false, collapsed: false}
    }
  ],
  type: 'object',
  fields: [
    {
      name: 'carriedOutBy',
      title: 'Utført av',
      titleEN: 'Carried out by',
      type: 'array',
      of: [{type: 'actorInRole'}]
    },
    {
      name: 'timespan',
      title: 'Tidsspenn',
      titleEN: 'Timespan',
      fieldset: 'time',
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
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      type: 'localeBlock'
    }
  ],
  preview: {
    select: {
      bb: 'timespan.0.beginOfTheBegin',
      eb: 'timespan.0.endOfTheBegin',
      date: 'timespan.0.date',
      be: 'timespan.0.beginOfTheEnd',
      ee: 'timespan.0.endOfTheEnd',
      blocks: 'description',
      type: '_type'
    },
    prepare (selection) {
      const {type, bb, eb, date, be, ee} = selection
      return {
        title: `${date || ''}${bb || ''}${bb && eb ? '~' : ''}${eb || ''}` + `${(bb || eb) && (be || ee) ? ' / ' : ''}` + `${be || ''}${be && ee ? '~' : ''}${ee || ''}`,
        subtitle: `${capitalize(type)}`
      }
    }
  }
}
