import jsonata from 'jsonata'
/* import client from 'part:@sanity/base/client' */

import {FaBookDead} from 'react-icons/fa'
import {rights} from '../../vocabularies/defaultVocabularies'

export default {
  name: 'madeObject',
  title: 'Objekt',
  titleEN: 'Made Object',
  description: 'Menneskapte objekt',
  type: 'document',
  initialValue: {
    editorialState: 'workingDraft',
    accessState: 'secret'
  },
  icon: FaBookDead,
  fieldsets: [
    {
      name: 'state',
      title: 'Status',
      options: {collapsible: true, collapsed: false}
    },
    {
      name: 'minimum',
      title: 'Felt for minimumsregistrering',
      options: {collapsible: true, collapsed: false}
    },
    {
      name: 'representation',
      title: 'Hovedbilde og IIIF manifest',
      options: {collapsible: true, collapsed: false}
    },
    {
      name: 'partsOfTheObject',
      title: 'Felt relatert til deler eller seksjoner',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'additionalInformation',
      title: 'Alternative navn, identifikatorer og beskrivelser',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'visualObject',
      title: 'Felt relatert til visuelle objekt',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'linguisticObject',
      title: 'Felt relatert til tekstlige objekt',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'physicalDescription',
      title: 'Felt relatert til fysisk beskrivelse',
      options: {collapsible: true, collapsed: true}
    },
    {
      name: 'collectionManagement',
      title: 'Felt relatert til samlingspleie',
      options: {collapsible: true, collapsed: true}
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
      title: 'Hovedbilde',
      titleEN: 'Main image',
      name: 'mainRepresentation',
      fieldset: 'representation',
      description: 'Velg et bilde fra egen samling eller fra NB.no. Legg til bildetekst ved å trykke "Edit".',
      descriptionEN: 'Choose a image from out own collection or from NB.no.',
      type: 'mainRepresentation'
    },
    {
      title: 'Hovedmanifest',
      titleEN: 'Main manifest',
      description: 'Hovedmanifestet til objektet, for eksempel: https://digi.ub.uni-heidelberg.de/diglit/iiif/cpgraec132/manifest.json. Det kan også være en lenke til en sekvens eller et utvalg. For eksempel: https://digi.ub.uni-heidelberg.de/diglit/iiif/cpgraec132/range/r2',
      descriptionEN: 'The main manifest of this object',
      fieldset: 'representation',
      name: 'mainManifest',
      type: 'url'
    },
    {
      name: 'preferredIdentifier',
      title: 'Foretrukket identifikator',
      titleEN: 'Preferred identifier',
      fieldset: 'minimum',
      type: 'string'
      /* validation: Rule => Rule.required().custom(async prefId => {
        // eslint-disable-next-line no-template-curly-in-string
        const docs = await client.fetch('*[preferredIdentifier == "${prefId}" && !(_id in path("drafts.**"))] { preferredIdentifier }', {prefId})
        return docs.length > 1 ? 'Value is not unique' : true
      }) */
    },
    {
      name: 'label',
      title: 'Tittel',
      titleEN: 'Title',
      description: '',
      descriptionEN: '',
      fieldset: 'minimum',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'hasType',
      title: 'Klassifisert som',
      titleEN: 'Classified as',
      description: '',
      descriptionEN: '',
      fieldset: 'minimum',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'typeClass'}
          ],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [...($sysCat)]]._id)',
            filterParams: {sysCat: ['Objekt-/verkstype', 'Seksjonstype']}
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'rights',
      title: 'Rettigheter og lisensiering',
      titleEN: 'Rights',
      description: 'Velg den korrekt lisensen eller rettighetserklæringen.',
      descriptionEN: 'Choose the correct lisense or mark',
      fieldset: 'minimum',
      type: 'string',
      options: {
        list: rights
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'subject',
      title: 'Emne',
      titleEN: 'Subject',
      fieldset: 'minimum',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'concept'}
          ]
        }
      ]
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      titleEN: 'Description',
      description: 'En kort beskrivelse.',
      descriptionEN: 'A shortish description',
      fieldset: 'minimum',
      type: 'localeBlockSimple'
    },
    {
      name: 'activityStream',
      title: 'Aktivitetsstrøm',
      titleEN: 'Activity stream',
      description: 'Hendelser og aktiviteter knyttet til dette objektet.',
      descriptionEN: 'Events and activities connected to this object',
      type: 'array',
      of: [
        {type: 'production'},
        {type: 'transformation'},
        {type: 'reference', to: [{type: 'acquisition'}]},
        {type: 'move'},
        {type: 'activity'},
        {type: 'endingActivity'}
      ]
    },
    {
      name: 'relation',
      title: 'Relaterte ting',
      titleEN: 'Related stuff',
      description: 'Uspesifisert relasjon til en annen ting',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'madeObject'},
            {type: 'actor'},
            {type: 'group'}
          ]
        }
      ]
    },
    {
      name: 'hasCurrentOwner',
      title: 'Nåværende eier',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'actor'},
            {type: 'group'}
          ]
        }
      ]
    },
    {
      name: 'hasFormerOrCurrentOwner',
      title: 'Tidligere eller nåværende eier',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'actor'},
            {type: 'group'}
          ]
        }
      ]
    },
    {
      name: 'composedOf',
      title: 'Består av',
      titleEN: 'Composed of',
      description: 'Andre identifiserte objekt som er en del av dette objektet. For eksempel: bokomslaget eller "Sult" av Hamsun bundet sammen med andre verk.',
      descriptionEN: 'Other identified madeObjects this object is composed of',
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
      name: 'title',
      title: 'Titler',
      titleEN: 'Titles',
      description: 'Legg til alternative titler',
      descriptionEN: 'Add all known titles',
      fieldset: 'additionalInformation',
      type: 'array',
      of: [
        {type: 'name'}
      ],
      options: {
        editModal: 'popup'
      }
    },
    {
      name: 'identifiedBy',
      title: 'Identifikator',
      titleEN: 'Identifier',
      description: 'Legg til identifikator',
      descriptionEN: 'Add all known identifiers',
      fieldset: 'additionalInformation',
      type: 'array',
      of: [
        {type: 'identifier'}
      ],
      options: {
        editModal: 'dialog'
      }
    },
    {
      name: 'isSubjectOf',
      title: 'Omhandlet i',
      titleEN: 'Subject of',
      description: 'Tekster om dette objektet',
      descriptionEN: 'Texts about this object, both internal and other texts',
      fieldset: 'additionalInformation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'linguisticObject'}
          ]
        }
      ]
    },
    {
      name: 'depicts',
      title: 'Avbilder',
      titleEN: 'Depicts',
      type: 'array',
      fieldset: 'visualObject',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'madeObject'},
            {type: 'actor'},
            {type: 'group'},
            {type: 'typeClass'}
          ]
        }
      ]
    },
    {
      name: 'showsVisualItem',
      title: 'Viser merke eller bilde',
      titleEN: 'Shown visual item',
      type: 'array',
      fieldset: 'visualObject',
      of: [
        {type: 'reference',
          to: [
            {type: 'visualItem'}
          ]
        }
      ]
    },
    {
      name: 'carries',
      title: 'Bærer verk',
      titleEN: 'Carries work',
      type: 'array',
      fieldset: 'linguisticObject',
      of: [
        {type: 'reference',
          to: [
            {type: 'work'}
          ]
        }
      ]
    },
    {
      name: 'pages',
      title: 'Antall sider',
      titleEN: 'Pages',
      fieldset: 'physicalDescription',
      type: 'number'
    },
    {
      name: 'measurement',
      title: 'Måling',
      titleEN: 'Measurement',
      type: 'array',
      fieldset: 'physicalDescription',
      of: [{type: 'measurement'}]
    },
    {
      name: 'consistsOf',
      title: 'Laget av',
      titleEn: 'Consists of',
      description: 'Laget av material, for eksempel lær, pertament eller noe annet.',
      type: 'array',
      fieldset: 'physicalDescription',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'material'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'label',
      id: 'preferredIdentifier',
      type: 'hasType.0.label.nor',
      blocks: 'description',
      media: 'mainRepresentation',
      published: 'accessState'
    },
    prepare (selection) {
      const {title, id, type, blocks, media, published} = selection
      const expression = jsonata('nor[0]')
      const block = expression.evaluate(blocks)
      const secret = published === 'secret' ? '🔒' : ''

      return {
        title: title,
        subtitle: secret + (id ? id + ', ' : '') + type,
        description: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : '',
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Tittel, A-Å',
      name: 'title',
      by: [
        {field: 'label', direction: 'asc'}
      ]
    },
    {
      title: 'Tittel, Å-A',
      name: 'title',
      by: [
        {field: 'label', direction: 'desc'}
      ]
    },
    {
      title: 'Foretrukket id, Synkende',
      name: 'preferredIdentifier',
      by: [
        {field: 'preferredIdentifier', direction: 'desc'}
      ]
    },
    {
      title: 'Foretrukket id, Stigende',
      name: 'preferredIdentifier',
      by: [
        {field: 'preferredIdentifier', direction: 'asc'}
      ]
    }
  ]
}
