export default {
  title: 'Presence',
  name: 'presence',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      description: 'A shortish description',
      type: 'localeBlockSimple'
    },
    {
      name: 'temporalProjection',
      title: 'Tidsspenn',
      titleEN: 'Timespan',
      type: 'array',
      of: [{type: 'timespan'}]
    },
    {
      name: 'spatialProjection',
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
      name: 'data',
      title: 'Data',
      titleEN: 'Data',
      description: 'Besøk geojson.io/ og konstruér din geoJSON. Lag punkt, linjer, rekangler eller polygon for å fortelle din historie.',
      type: 'code'
    }
  ],
  preview: {
    select: {
      title: 'label'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: title.nor
      }
    }
  }
}
