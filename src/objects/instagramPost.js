import InstagramPreview from '../previews/instagramPreview'

export default {
  type: 'object',
  name: 'instagramPost',
  title: 'Instagram Post',
  fields: [
    {
      name: 'url',
      title: 'URL',
      titleEN: 'URL',
      description: 'Visit an Instagram post in a browser and copy the URL',
      type: 'url'
    }
  ],
  preview: {
    select: {url: 'url'},
    component: InstagramPreview
  }
}
