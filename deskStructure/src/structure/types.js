import S from '@sanity/desk-tool/structure-builder'
import {
  FaTags
} from 'react-icons/fa'

// import PreviewIFrame from '../../src/components/previewIFrame'

const types = S.listItem()
  .title('Typer')
  .icon(FaTags)
  .child(
    S.list()
      .title('Typer')
      .items([
        S.documentTypeListItem('activityType').title('Aktivitetstype'),
        S.documentTypeListItem('acquisitionType').title('Akkvisisjonstype'),
        S.documentTypeListItem('actorType').title('Aktørtype'),
        S.documentTypeListItem('dimensionType').title('Dimensjonstype'),
        S.documentTypeListItem('concept').title('Emner'),
        S.documentTypeListItem('groupType').title('Gruppetype'),
        S.documentTypeListItem('eventType').title('Hendelsestype'),
        S.documentTypeListItem('identifierType').title('IdentifikatorType'),
        S.documentTypeListItem('storageType').title('Lagringstype'),
        S.documentTypeListItem('material').title('Material'),
        S.documentTypeListItem('measurementUnit').title('Måleenhet'),
        S.documentTypeListItem('appelationType').title('Navnetype'),
        S.documentTypeListItem('objectType').title('Objekttype'),
        S.documentTypeListItem('reportType').title('Rapporttype'),
        S.documentTypeListItem('role').title('Rolle'),
        S.documentTypeListItem('sectionType').title('Seksjonstype'),
        S.documentTypeListItem('language').title('Språk'),
        S.documentTypeListItem('placeType').title('Stedstype'),
        S.documentTypeListItem('technique').title('Teknikk'),
        S.documentTypeListItem('textType').title('Tekststype'),
        S.documentTypeListItem('conditionType').title('Tilstandstype'),
        S.documentTypeListItem('exhibitionType').title('Utstillingstype')
      ])
  )

export default types
