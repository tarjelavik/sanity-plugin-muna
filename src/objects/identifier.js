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
      type: "reference",
      to: [{ type: "identifierType" }],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
  ],
  preview: {
    select: {
      title: 'content',
      type: "hasType.label.nor",
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
