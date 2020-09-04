export default {
  title: 'Article',
  name: 'generalArticle',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'simpleBlockContent'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: 'Article',
        subtitle: title
      }
    }
  }
}
