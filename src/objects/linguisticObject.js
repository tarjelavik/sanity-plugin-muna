import { editorialState, accessState } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Text",
  name: "linguisticObject",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
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
      name: "body",
      title: "Tekst",
      titleEN: "Body",
      type: "blockContent",
    },
    {
      name: "language",
      title: "Språk",
      titleEN: "Language",
      type: "array",
      of: [{ type: "reference", to: [{ type: "language" }] }],
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
    {
      name: "categories",
      title: "Kategorier",
      titleEN: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "textType" }],
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
  preview: {
    select: {
      title: "hasType.0.label.nor",
      blocks: "body",
    },
    prepare(selection) {
      const { title, blocks } = selection;
      const block = blocks[0];

      return {
        title: title,
        subtitle: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No description"
      };
    },
  },
};
