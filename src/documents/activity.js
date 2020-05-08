import {MdLocalActivity} from 'react-icons/md'

export default {
  title: 'Activity',
  name: 'activity',
  type: 'document',
  icon: MdLocalActivity,
  fieldsets: [
    {
      name: 'purpose',
      title: 'Fields related to the purpose of the activity',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'objects',
      title: 'Fields related to the objects or object types used',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'technique',
      title: 'Fields related to techniques, designs or procedures used',
      options: {collapsible: true, collapsed: true}
    }
  ],
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'hasType',
      title: 'Aktivitetstype',
      titleEN: 'Activity type',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Aktivitetstype'}
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
      name: 'hasParticipant',
      title: 'Hadde medvirkende',
      titleEN: 'Had participant',
      type: 'array',
      of: [{type: 'actorInRole'}]
    },
    {
      name: 'target',
      title: 'Mål',
      titleEN: 'Target',
      type: 'reference',
      to: [
        {type: 'collection'},
        {type: 'actor'},
        {type: 'group'}
      ]
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
      name: 'tookPlaceAt',
      title: 'Tok sted ved',
      titleEN: 'Took place at',
      description: '',
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
      name: 'consistsOf',
      title: 'Underaktiviteter',
      titleEN: 'Sub activities',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'activity'}]}
      ]
    },
    {
      name: 'continued',
      title: 'Fortsatte',
      titleEN: 'Continued',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'activity'}]}
      ]
    },
    {
      name: 'wasContinuedBy',
      title: 'Ble fortsatt av',
      titleEN: 'Was continued by',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'activity'}]}
      ]
    },
    {
      name: 'influencedBy',
      title: 'Påvirket av',
      titleEN: 'Influenced by',
      description: '',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'madeObject'},
            {type: 'event'},
            {type: 'place'},
            {type: 'work'},
            {type: 'actor'},
            {type: 'group'}
          ]
        }
      ]
    },
    {
      name: 'usedObjectOfType',
      title: 'Brukte objekt av type',
      titleEN: 'Used object of type',
      description: '',
      fieldset: 'objects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Objekt-/verkstype'}
          }
        }
      ]
    },
    {
      name: 'usedSpecificObject',
      title: 'Brukte spesifikt objekt',
      titleEN: 'Used specific object',
      description: '',
      fieldset: 'objects',
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
      description: '',
      fieldset: 'technique',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'technique'}
          }
        }
      ]
    },
    {
      name: 'usedSpecificTechnique',
      title: 'Brukte spesifikk teknikk',
      titleEN: 'Used specific technique',
      description: '',
      fieldset: 'technique',
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
      name: 'generalPurpose',
      title: 'Generelt formål',
      titleEN: 'General purpose',
      description: '',
      fieldset: 'purpose',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'purposeType'}
          }
        }
      ]
    },
    {
      name: 'motivatedBy',
      title: 'Motivert av',
      titleEN: 'Motivated by',
      description: '',
      fieldset: 'purpose',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'designOrProcedure'},
            {type: 'event'},
            {type: 'report'},
            {type: 'acquisition'},
            {type: 'exhibition'},
            {type: 'project'}
          ]
        }
      ]
    },
    {
      name: 'intendedUseOf',
      title: 'Forutså bruk av',
      titleEN: 'Intended use of',
      description: '',
      fieldset: 'purpose',
      type: 'array',
      of: [
        {type: 'reference',
          to: [
            {type: 'madeObject'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'label.nor',
      type: 'hasType.0.label.nor'
    },
    prepare (selection) {
      const {title, type} = selection
      return {
        title: title,
        subtitle: type
      }
    }
  }
}
