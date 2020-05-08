import {GiExplosiveMaterials} from 'react-icons/gi'

export default {
  title: 'Material',
  name: 'material',
  type: 'document',
  icon: GiExplosiveMaterials,
  fields: [
    {
      name: 'label',
      title: 'Foretrukket navn',
      titleEN: 'Preferred label',
      type: 'localeString'
    },
    {
      name: 'altLabel',
      title: 'Alternativt navn',
      titleEN: 'Alternative label',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'label.nor'
    },
    prepare (selection) {
      const {title} = selection
      return {
        title: title
      }
    }
  }
}
