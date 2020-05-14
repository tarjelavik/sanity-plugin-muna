export default {
  title: 'Timespan',
  name: 'timespan',
  type: 'object',
  fieldsets: [
    {
      name: 'beginning',
      title: 'Beginning',
      options: {
        collapsible: false,
        columns: 2
      }
    },
    {
      name: 'ending',
      title: 'Ending',
      options: {
        collapsible: false,
        columns: 2
      }
    }
  ],
  fields: [
    {
      name: 'beginOfTheBegin',
      title: 'Begynnelsen av begynnelsen',
      titleEN: 'Begin of the begin',
      fieldset: 'beginning',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
      // Validation on min/max date does not work, also handling of undefined is sub par
      // validation: Rule => Rule.max(Rule.valueOfField('endOfTheBegin')).max(Rule.valueOfField('BeginOfTheEnd')).max(Rule.valueOfField('endOfTheEnd'))
    },
    {
      name: 'endOfTheBegin',
      title: 'Slutten på begynnelsen',
      titleEN: 'End of the begin',
      fieldset: 'beginning',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'date',
      title: 'Dato',
      titleEN: 'Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'beginOfTheEnd',
      title: 'Begynnelsen av slutten',
      titleEN: 'Begin of the end',
      fieldset: 'ending',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'endOfTheEnd',
      title: 'Slutten av slutten',
      titleEN: 'End of the end',
      fieldset: 'ending',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
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
      bb: 'beginOfTheBegin',
      eb: 'endOfTheBegin',
      date: 'date',
      be: 'beginOfTheEnd',
      ee: 'endOfTheEnd',
      blocks: 'description.nor'
    },
    prepare (selection) {
      var dayjs = require('dayjs')
      var _ = require('lodash')
      var localizedFormat = require('dayjs/plugin/localizedFormat')
      dayjs.extend(localizedFormat)
      require('dayjs/locale/nb')

      const {bb, eb, date, be, ee } = selection
      var dates = _.pickBy({bb: bb, eb: eb, date: date, be: be, ee: ee}, _.identity)

      const {blocks} = selection
      const block = (blocks || []).find(block => block._type === 'block')

      let d = Object.assign({}, ...Object.keys(dates).map(k => ({[k]: dayjs(dates[k]).locale('nb').format('LL')})));

      return {
        //title: `${d.date}`,
        title: `${d.date || ''}${d.bb || ''}${d.bb && d.eb ? '~' : ''}${d.eb || ''}` + `${(d.bb || d.eb) && (d.be || d.ee) ? ' / ' : ''}` + `${d.be || ''}${d.be && d.ee ? '~' : ''}${d.ee || ''}`,
        subtitle: block
          ? block.children
            .filter((child) => child._type === "span")
            .map((span) => span.text)
            .join("")
        : "No description"
      }
    }
  }
}
