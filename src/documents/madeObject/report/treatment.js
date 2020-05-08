export default {
  title: 'Treatment',
  name: 'treatment',
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
    },
    {
      name: 'assessedBy',
      title: 'Vurdert av',
      titleEN: 'Assessment',
      type: 'array',
      of: [
        {type: 'treatmentAssessment'}
      ]
    }
  ],
  preview: {
    select: {
      date: 'productionDate'
    },
    prepare (selection) {
      const {date} = selection
      return {
        title: `Transformation${date ? ', dated ' + date : ''}`
      }
    }
  }
}
