export default {
    type: 'document',
    name: 'navigationMenu',
    title: 'Navigation menu',
    fields: [
      {
        type: 'string',
        name: 'title',
        title: 'title',
      },
      {
        type: 'array',
        name: 'items',
        of: [{ type: 'navigationItem' }]
      }
    ]
  }