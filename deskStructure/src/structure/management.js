import S from '@sanity/desk-tool/structure-builder'
import {GiCrackedGlass} from 'react-icons/'
import {FaCog, FaGifts, FaProjectDiagram} from 'react-icons/fa'

// import PreviewIFrame from '../../src/components/previewIFrame'

const management = S.listItem()
  .title('Samlingsadministrasjon')
  .icon(FaCog)
  .child(
    S.list()
      .title('Samlingsadministrasjon')
      .items([
        S.documentTypeListItem('collection').title('Samlinger'),
        S.listItem()
          .title('Akkvisisjoner')
          .icon(FaGifts)
          .child(
            S.list()
              .title('Akkvisisjoner')
              .items([
                S.listItem()
                  .title('Akkvisisjoner etter type')
                  .icon(FaGifts)
                  .child(
                    // List out all categories
                    S.documentTypeList('acquisitionType')
                      .title('Akkvisisjoner etter type')
                      .filter('_type == "acquisitionType"')
                      .child(catId =>
                        // List out project documents where the _id for the selected
                        // category appear as a _ref in the project’s categories array
                        S.documentList()
                          .schemaType('acquisition')
                          .title('Akkvisisjoner')
                          .filter('_type == "acquisition" && $catId in hasType[]._ref')
                          .params({catId})
                      )
                  ),
                S.listItem()
                  .title('Upubliserte akkvisisjoner')
                  .icon(FaGifts)
                  .child(
                    // List out all categories
                    S.documentTypeList('acquisition')
                      .title('Upubliserte akkvisisjoner')
                      .filter('_type == "acquisition" && accessState == "secret"')
                  ),
                S.listItem()
                  .title('Til gjennomgang')
                  .icon(FaGifts)
                  .child(
                    // List out all categories
                    S.documentTypeList('acquisition')
                      .title('Til gjennomgang')
                      .filter('_type == "acquisition" && editorialState == "review"')
                  ),
                S.listItem()
                  .title('Alle akkvisisjoner')
                  .icon(FaGifts)
                  .child(
                    S.documentList()
                      .title('Alle akkvisisjoner')
                      .schemaType('acquisition')
                      .filter('_type == "acquisition"')
                  )
              ])
          ),
        S.documentTypeListItem('designOrProcedure').title('Design eller prosedyre'),
        S.listItem()
          .title('Rapport')
          .icon(GiCrackedGlass)
          .child(
            S.list()
              .title('Rapport')
              .items([
                S.listItem()
                  .title('Rapport etter type')
                  .icon(GiCrackedGlass)
                  .child(
                    // List out all categories
                    S.documentTypeList('reportType')
                      .title('Rapport etter type')
                      .filter('_type == "reportType"')
                      .child(catId =>
                        // List out project documents where the _id for the selected
                        // category appear as a _ref in the project’s categories array
                        S.documentList()
                          .schemaType('report')
                          .title('Rapport')
                          .filter('_type == "report" && $catId in hasType[]._ref')
                          .params({catId})
                      )
                  ),
                S.listItem()
                  .title('Upubliserte rapporter')
                  .icon(GiCrackedGlass)
                  .child(
                    // List out all categories
                    S.documentTypeList('report')
                      .title('Upubliserte rapporter')
                      .filter('_type == "report" && accessState == "secret"')
                  ),
                S.listItem()
                  .title('Til gjennomgang')
                  .icon(GiCrackedGlass)
                  .child(
                    // List out all categories
                    S.documentTypeList('report')
                      .title('Til gjennomgang')
                      .filter('_type == "report" && editorialState == "review"')
                  ),
                S.listItem()
                  .title('Alle rapporter')
                  .icon(GiCrackedGlass)
                  .child(
                    S.documentList()
                      .title('Alle rapporter')
                      .schemaType('report')
                      .filter('_type == "report"')
                  )
              ])
          ),
        S.documentTypeListItem('storage').title('Lagrinsenheter'),
        S.listItem()
          .title('Prosjekter')
          .icon(FaProjectDiagram)
          .child(
            S.list()
              .title('Prosjekter')
              .items([
                S.listItem()
                  .title('Active projects')
                  .icon(FaProjectDiagram)
                  .child(
                    // List out all categories
                    S.documentTypeList('project')
                      .title('Active projects')
                      .filter('_type == "project" && active')
                  ),
                S.listItem()
                  .title('Completed projects')
                  .icon(FaProjectDiagram)
                  .child(
                    // List out all categories
                    S.documentTypeList('project')
                      .title('Completed projects')
                      .filter('_type == "project" && !active')
                  ),
                S.listItem()
                  .title('Alle projects')
                  .icon(FaProjectDiagram)
                  .child(
                    S.documentList()
                      .title('Alle projects')
                      .schemaType('project')
                      .filter('_type == "project"')
                  )
              ])
          )
      ])
  )

export default management
