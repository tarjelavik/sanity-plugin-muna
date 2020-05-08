import React from 'react'

const highlightIcon = () => (
  <span style={{fontWeight: 'bold'}}>H</span>
)
const highlightRender = props => (
  <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
)

export default {
  name: 'genericText',
  type: 'array',
  title: 'Excerpt',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Numbered', value: 'number'},
        {title: 'Bulleted', value: 'bullet'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender
            }
          },
          {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'actor'},
                  {type: 'madeObject'},
                  {type: 'collection'},
                  {type: 'group'},
                  {type: 'event'},
                  {type: 'material'},
                  {type: 'timeline'}
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'reference',
      to: [
        {type: 'actor'},
        {type: 'madeObject'},
        {type: 'collection'},
        {type: 'group'},
        {type: 'event'},
        {type: 'place'},
        {type: 'material'},
        {type: 'timeline'}
      ]
    },
    {type: 'instagramPost'},
    {type: 'imageCompare'},
    {type: 'geojson'}
  ]
}
