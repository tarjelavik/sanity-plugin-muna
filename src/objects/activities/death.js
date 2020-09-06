import { carriedOutBy, timespan, tookPlaceAt, referredToBy } from '../../props'
import { defaultFieldsets } from '../../fieldsets'
import { timespanAsString } from '../../helpers/helpers';

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
      bb: "timespan.0.beginOfTheBegin",
      eb: "timespan.0.endOfTheBegin",
      date: "timespan.0.date",
      be: "timespan.0.beginOfTheEnd",
      ee: "timespan.0.endOfTheEnd",
      blocks: "description",
      type: "_type",
    },
    prepare(selection) {
      const { type, bb, eb, date, be, ee } = selection;
      const timespan = timespanAsString(bb, eb, date, be, ee, 'nb')
      return {
        title: timespan,
        subtitle: `${capitalize(type)}`,
      };
    },
  },
}
