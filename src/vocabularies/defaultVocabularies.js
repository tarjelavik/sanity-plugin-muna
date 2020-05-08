export const supportedLanguages = [
  {id: 'nor', title: 'Norwegian', isDefault: true},
  {id: 'sme', title: 'Sami'},
  {id: 'eng', title: 'English'},
  {id: 'ger', title: 'German'}
]

export const rights = [
  {title: 'Public Domain Mark', value: 'https://creativecommons.org/publicdomain/mark/1.0/'},
  {title: 'CC0 1.0 - Public Domain Dedication', value: 'https://creativecommons.org/publicdomain/zero/1.0/'},
  {title: 'CC BY', value: 'https://creativecommons.org/licenses/by/4.0/'},
  {title: 'In copyright', value: 'https://rightsstatements.org/vocab/InC/1.0/'},
  {title: 'In copyright - non-commercial use permitted', value: 'https://rightsstatements.org/vocab/InC-NC/1.0/'},
  {title: 'Copyright not evaluated', value: 'https://rightsstatements.org/vocab/CNE/1.0/'},
  {title: 'Copyright undetermined', value: 'https://rightsstatements.org/vocab/UND/1.0/'}
]

export const reportTypes = [
  {title: 'Condition assessment', value: 'conditionAssessment'},
  {title: 'Book binding assessment', value: 'bookBindingAssessment'},
  {title: 'Pest assessment', value: 'pestAssessment'},
  {title: 'Conservation report', value: 'conservationReport'}
]

export const activityTypes = [
  {title: 'Add', value: 'add'},
  {title: 'Remove', value: 'remove'},
  {title: 'Correspondance', value: 'correspondance'},
  {title: 'Use', value: 'use'},
  {title: 'Marriage', value: 'marriage'}
]

export const units = [
  {title: 'Centimeters', value: 'cm'},
  {title: 'Meters', value: 'm'},
  {title: 'Kilos', value: 'k'},
  {title: 'Grams', value: 'gr'}
]

export const appelationTypes = [
  {title: 'Preferred title', value: 'preferredTitle'},
  {title: 'Translated title', value: 'translatedTitle'},
  {title: 'Preferred name', value: 'preferredName'},
  {title: 'Given name', value: 'givenName'},
  {title: 'Stage name', value: 'stageName'},
  {title: 'Pseudonym', value: 'pseudonym'},
  {title: 'Alternativ name', value: 'alternativeName'},
  {title: 'Secular name', value: 'secularName'},
  {title: 'Religious name', value: 'religiousName'},
  {title: 'Nickname', value: 'nickname'}
]

export const textTypes = [
  {title: 'Description', value: 'description'},
  {title: 'Brief text', value: 'briefText'}
]

export default {
  supportedLanguages,
  reportTypes,
  activityTypes,
  units,
  appelationTypes,
  textTypes,
  rights
}
