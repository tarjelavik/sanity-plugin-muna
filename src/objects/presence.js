import { label, definedByGeoJSON } from "../props"

export default {
  title: 'Presence',
  name: 'presence',
  type: 'object',
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    label,
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
    definedByGeoJSON,
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
