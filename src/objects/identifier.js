import { referredToBy } from "../props"
import { defaultFieldsets } from "../fieldsets"

export default {
  title: 'Identifier',
  name: 'identifier',
  type: 'object',
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: 'content',
      title: 'Identifikator',
      titleEN: 'Identifier',
      type: 'string'
    },
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Identifikatortype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
  ],
  preview: {
    select: {
      identifier: 'identifier',
      label: 'label'
    },
    prepare (selection) {
      const {identifier, label} = selection
      return {
        title: `${identifier}${label ? ', ' + label : ''}`
      }
    }
  }
}
