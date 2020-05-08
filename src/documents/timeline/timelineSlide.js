// TODO: Finish timeline with references to internal stuff and external. +datamodell
// See http://timeline.knightlab.com/docs/json-format.html#json-slide for more info

export default {
  title: 'Timeline slide',
  name: 'timelineSlide',
  type: 'object',
  fields: [
    {
      name: 'headline', // path: title.text.heading
      title: 'Tittel',
      titleEN: 'Headline',
      type: 'localeString'
    },
    {
      name: 'text', // path: title.text.text
      title: 'Tekst',
      titleEN: 'Text',
      type: 'localeBlock'
    },
    {
      name: 'media',
      title: 'Media',
      titleEN: 'Media',
      type: 'array',
      of: [
        {type: 'mediaObject'},
        {type: 'externalMediaObject'}
      ],
      validation: Rule => Rule.length(1).error('You should only register one media object')
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
      name: 'group',
      title: 'Gruppe',
      titleEN: 'Group',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.length(1).error('An event can only be in one group!')
    },
    {
      name: 'background',
      title: 'Bakgrunn',
      titleEN: 'Background',
      type: 'background'
    }
  ],
  preview: {
    select: {
      title: 'headline.nor'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: title
      }
    }
  }

}
