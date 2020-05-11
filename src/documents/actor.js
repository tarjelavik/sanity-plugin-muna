import { FaUser } from "react-icons/fa";

import { editorialState, accessState, referredToBy } from "../props";

export default {
  title: "Actor",
  name: "actor",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaUser,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Felt for minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    {
      name: "label",
      title: "Visningsnavn",
      titleEN: "Display name",
      type: "string",
      validation: (Rule) => Rule.required(),
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
            filterParams: { sysCat: "Aktørtype" },
          },
        },
      ],
    },
    {
      name: "mainRepresentation",
      title: "Hovedbilde",
      titleEN: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    referredToBy,
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description:
        'En aktivitetsstrøm samler alle hendelser knyttet til denne aktøren. Fødsel og død er "inline" til personen, mens andre aktiviteter som ekteskap er egne dokument.',
      descriptionEN: "Add all known events this smuck did",
      type: "array",
      of: [
        { type: "birth" },
        { type: "reference", to: [{ type: "activity" }] },
        { type: "relocation" },
        { type: "death" },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "name",
      title: "Navn",
      titleEN: "Names",
      description: "Add all known names and pseudonyms you wish",
      type: "array",
      of: [{ type: "name" }],
      options: {
        editModal: "popup",
      },
    },
    {
      name: "identifier",
      title: "Identifikatorer",
      titleEN: "Identifiers",
      description:
        "Add identifiers this actor is identified by, both internally and externally, like in KulturNav og VIAF.",
      type: "array",
      of: [{ type: "identifier" }],
      options: {
        editModal: "popup",
      },
    },
  ],
  preview: {
    select: {
      title: "label",
      media: "mainRepresentation",
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title: title,
        media: media,
      };
    },
  },
};
