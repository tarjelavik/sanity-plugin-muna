export default {
  title: 'Manifest',
  name: 'manifest',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Manifest URL',
      titleEN: 'Manifest URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      name: 'url'
    },
    prepare (selection) {
      const {url} = selection
      return {
        title: `${url}`
      }
    }
  }
}
