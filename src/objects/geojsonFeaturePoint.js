export default {
  title: 'Point',
  name: 'geojsonFeaturePoint',
  type: 'object',
  fields: [
    {
      name: 'coordinates',
      title: 'Koordinater',
      titleEN: 'Coordinates',
      type: 'geopoint'
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
