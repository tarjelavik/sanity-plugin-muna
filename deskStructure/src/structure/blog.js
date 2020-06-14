import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoArchive as AllIcon
} from 'react-icons/go'

// import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  AllIcon
}

const blog = S.listItem()
  .title('Blog')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/blog')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('post')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              .filter('_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('post')
                  // .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('post').title('All posts').icon(AllIcon)/* ,
        S.listItem()
          .title('Post by author')
          .child(
            S.documentTypeList('actor')
              .title('Post by author')
              .filter(
                '_type == "actor" && count(*[_type=="post" && ^._id in authors[]->.actor._ref]) > 0'
              )
              .child(id =>
              // List out project documents where the _id for the selected
              // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('post')
                  .title('Blogs')
                  .filter(
                    '_type == "post" && $id in authors[].actor._ref'
                  )
                  .params({id})
              )
          ) */
      ])
  )

export default blog
