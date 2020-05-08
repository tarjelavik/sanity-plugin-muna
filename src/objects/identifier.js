export default {
  title: 'Identifier',
  name: 'identifier',
  type: 'object',
  fields: [
    {
      name: 'identifier',
      title: 'Identifikator',
      titleEN: 'Identifier',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      titleEN: 'URL',
      type: 'url'
    },
    {
      name: 'label',
      title: 'Navn',
      titleEN: 'Label',
      type: 'string'
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
      identifier: 'identifier',
      label: 'label'
    },
    prepare (selection) {
      const {identifier, label} = selection
      return {
        title: `${identifier}${label ? ', ' + label : ''}`
      }
    }
  }
}
