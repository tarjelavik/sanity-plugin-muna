import {supportedLanguages} from '../vocabularies/defaultVocabularies'

export default {
  title: 'localeSlug',
  name: 'localeSlug',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: supportedLanguages.map(lang => (
    {
      title: lang.title,
      name: lang.id,
      type: 'string',
      validation: Rule => Rule.regex(/^[a-zA-Z0-9\-_]{0,60}$/),
      fieldset: lang.isDefault ? null : 'translations'
    }
  ))
}
