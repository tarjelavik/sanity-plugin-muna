import {FaTruckLoading} from 'react-icons/fa'

var capitalize = require('capitalize')

export default {
  title: 'Relocation',
  name: 'relocation',
  type: 'document',
  initialValue: {
    editorialState: 'workingDraft',
    accessState: 'secret'
  },
  icon: FaTruckLoading,
  fieldsets: [
    {
      name: 'state',
      title: 'State',
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
      name: 'timespan',
      title: 'Tidsspenn',
      titleEN: 'Timespan',
      type: 'array',
      of: [{type: 'timespan'}],
      validation: Rule => Rule.length(1).warning('You should only register one timespan')
    },
    {
      name: 'movedFrom',
      title: 'Flyttet fra',
      titleEN: 'Moved from',
      type: 'reference',
      to: [
        {type: 'place'}
      ]
    },
    {
      name: 'movedTo',
      title: 'Flyttet til',
      titleEN: 'Moved to',
      type: 'reference',
      to: [
        {type: 'place'}
      ]
    },
    {
      name: 'tookPlaceAt',
      title: 'Tok sted ved',
      titleEN: 'Took place at',
      description: 'Det generelle området eller stedet dette skjedde',
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
      name: 'moved',
      title: 'Flyttet',
      titleEN: 'Moved',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'group'},
            {type: 'actor'}
          ]
        }
      ]
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      type: 'localeBlockReport'
    },
    {
      name: 'wasMotivatedBy',
      title: 'Motivert av',
      titleEN: 'Motivated by',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'event'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      type: '_type',
      published: 'accessState'
    },
    prepare (selection) {
      const {type, published} = selection
      const secret = published === 'secret' ? '🔒' : ''

      return {
        title: `${capitalize(type)}`,
        subtitle: secret
      }
    }
  }
}
