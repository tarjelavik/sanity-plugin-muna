import jsonata from 'jsonata'
import {FaMarker} from 'react-icons/fa'

export default {
  title: 'Text',
  name: 'linguisticObject',
  type: 'object',
  icon: FaMarker,
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
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      name: 'creator',
      title: 'Skaper',
      titleEN: 'Author',
      description: 'Registrer en eller flere aktører som har skapt dette dokumentet, gjerne med hvilken rolle de hadde.',
      type: 'array',
      of: [
        {
          type: 'actorInRole'
        }
      ]
    },
    {
      name: 'body',
      title: 'Tekst',
      titleEN: 'Body',
      type: 'genericText'
    },
    {
      name: 'language',
      title: 'Språk',
      titleEN: 'Language',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'language'}]}
      ]
    },
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
            filterParams: {sysCat: 'Teksttype'}
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      title: 'Kategorier',
      titleEN: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Kategorier'}
          }
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Publikasjonsdato',
      titleEN: 'Published at',
      description: 'This can be used to schedule post for publishing',
      type: 'datetime'
    },
    {
      name: 'documentedIn',
      title: 'Dokumentert i',
      titleEN: 'Documented in',
      type: 'array',
      of: [
        {
          type: 'file'
        }
      ]
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'label.nor',
      blocks: 'excerpt',
      media: 'mainImage'
    },
    prepare (selection) {
      const {title, blocks, media} = selection
      const expression = jsonata('nor[0]')
      const block = expression.evaluate(blocks)

      return {
        title: title,
        description: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No description',
        media: media
      }
    }
  }
}
