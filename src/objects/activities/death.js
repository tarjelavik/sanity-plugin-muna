import { carriedOutBy, timespan, tookPlaceAt, referredToBy } from '../../props'
import { defaultFieldsets } from '../../fieldsets'

var capitalize = require('capitalize')

export default {
  title: 'Death',
  name: 'death',
  fieldsets: defaultFieldsets,
  type: 'object',
  fields: [
    carriedOutBy,
    timespan,
    tookPlaceAt,
    referredToBy,
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
