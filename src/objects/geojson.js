import { label } from "../props"

export default {
  title: 'geoJSON',
  name: 'geojson',
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
      name: 'data',
      title: 'Data',
      titleEN: 'Data',
      description: 'Besøk geojson.io/ og konstruér din geoJSON. Lag punkt, linjer, rekangler eller polygon for å fortelle din historie.',
      type: 'code'
    }
  ],
  preview: {
    select: {
      type: 'type'
    },
    prepare (selection) {
      const {type} = selection
      return {
        title: type
      }
    }
  }
}
