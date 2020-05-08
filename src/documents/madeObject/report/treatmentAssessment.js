export default {
  title: 'Treatment assessment',
  name: 'treatmentAssessment',
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
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
    },
    {
      name: 'success',
      title: 'Suksess?',
      titleEN: 'Success?',
      type: 'boolean'
    },
    {
      name: 'tookPlaceAt',
      title: 'Skjedde ved',
      titleEN: 'Took place at',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'place'},
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
      date: 'productionDate'
    },
    prepare (selection) {
      const {date} = selection
      return {
        title: `Assessed${date ? ', dated ' + date : ''}`
      }
    }
  }
}
