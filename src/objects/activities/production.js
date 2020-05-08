var capitalize = require('capitalize')

export default {
  title: 'Production',
  name: 'production',
  type: 'object',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Hendelsestype'}
          }
        }
      ]
    },
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
      name: 'geoJSON',
      title: 'Lokasjon',
      titleEN: 'Geographic features',
      type: 'array',
      of: [
        {type: 'feature'}
      ]
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
    },
    {
      name: 'hasModified',
      title: 'Har modifisert',
      titleEN: 'Has modified',
      description: 'A production can modify an existing object',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'madeObject'}
          ]
        }
      ]
    },
    {
      name: 'usedGeneralTechnique',
      title: 'Brukte generell teknikk',
      titleEN: 'Used general technique',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Teknikk'}
          }
        }
      ]
    },
    {
      name: 'usedSpecificTechnique',
      title: 'Brukte spesifikk teknikk',
      titleEN: 'Used spesific technique',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'designOrProcedure'}
          ]
        }
      ]
    },
    {
      name: 'employed',
      title: 'Benyttet',
      titleEN: 'Employed',
      description: 'WIP, could be a API call to some source of authorities',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'material'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      date: 'productionDate',
      type: '_type'
    },
    prepare (selection) {
      const {type, date} = selection
      return {
        title: `${capitalize(type)}${date ? ', dated ' + date : ''}`
      }
    }
  }
}
