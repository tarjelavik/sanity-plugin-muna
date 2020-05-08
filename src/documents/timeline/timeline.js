import {GiCalendar} from 'react-icons/gi'

export default {
  name: 'timeline',
  type: 'document',
  title: 'Timeline',
  initialValue: {
    editorialState: 'workingDraft',
    accessState: 'secret'
  },
  icon: GiCalendar,
  fieldsets: [
    {
      name: 'state',
      title: 'Status',
      options: {collapsible: true, collapsed: false}
    }
  ],
  fields: [
    {
      name: 'editorialState',
      title: 'Redaksjonell status',
      titleEN: 'Editorial state',
      type: 'string',
      fieldset: 'state',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Utkast', value: 'workingDraft'},
          {title: 'Trenger gjennomgang', value: 'review'},
          {title: 'Publisert', value: 'published'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'accessState',
      title: 'Tilgangsstatus',
      titleEN: 'Access state',
      type: 'string',
      fieldset: 'state',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Privat', value: 'secret'},
          {title: 'Open', value: 'open'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
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
      name: 'scale',
      title: 'Skala',
      titleEN: 'Scale',
      description: "Either human or cosmological. If no scale is specified, the default is human. The cosmological scale is required to handle dates in the very distant past or future. (Before Tuesday, April 20th, 271,821 BCE after Saturday, September 13 275,760 CE) For the cosmological scale, only the year is considered, but it's OK to have a cosmological timeline with years between 271,821 BCE and 275,760 CE.",
      type: 'string',
      options: {
        list: [
          {title: 'Human', value: 'human'},
          {title: 'Cosmological', value: 'cosmological'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'eras',
      title: 'Era',
      titleEN: 'Era',
      description: 'Eras is used to label a span of time on the timeline navigation component.',
      type: 'array',
      of: [{type: 'era'}],
      preview: {
        select: {
          title: 'headline'
        },
        prepare (selection) {
          const {title} = selection
          return {
            title: title
          }
        }
      }
    },
    {
      name: 'events',
      title: 'Hendelser',
      titleEN: 'Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'event'}
          ]
        },
        {type: 'timelineSlide'}
      ]
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
