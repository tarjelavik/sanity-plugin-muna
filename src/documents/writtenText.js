import jsonata from "jsonata";
import { FaMarker } from "react-icons/fa";
import { editorialState, accessState, label, language, labelSingleton, identifiedBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Text",
  name: "writtenText",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  // icon: FaMarker,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    labelSingleton,
    identifiedBy,
    {
      name: "slug",
      title: "Slug",
      titleEN: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      type: "slug",
      options: {
        source: "label.nor",
        maxLength: 96,
      },
    },
    {
      name: "creator",
      title: "Skaper",
      titleEN: "Author",
      description:
        "Registrer en eller flere aktører som har skapt dette dokumentet, gjerne med hvilken rolle de hadde.",
      type: "array",
      of: [
        {
          type: "actorInRole",
        },
      ],
    },
    language,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "textType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Kategorier",
      titleEN: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "concept" }],
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Publikasjonsdato",
      titleEN: "Published at",
      description: "This can be used to schedule post for publishing",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Hovedbilde",
      titleEN: "Main image",
      type: "mainImage",
    },
    {
      name: "excerpt",
      title: "Sammendrag",
      titleEN: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
      type: "localeBlockSimple",
    },
    {
      name: "body",
      title: "Tekst",
      titleEN: "Body",
      type: "localeBlock",
    },
    {
      name: "documentedIn",
      title: "Dokumentert i",
      titleEN: "Documented in",
      type: "array",
      of: [
        {
          type: "file",
        },
      ],
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "label.nor",
      blocks: "excerpt",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, blocks, media } = selection;
      const expression = jsonata("nor[0]");
      const block = expression.evaluate(blocks);

      return {
        title: title,
        description: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No description",
        media: media,
      };
    },
  },
};
