import { FaMapMarker } from "react-icons/fa";

import { editorialState, accessState, label, referredToBy } from "../props";

export default {
  title: "Place",
  name: "place",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "published",
    accessState: "open",
  },
  icon: FaMapMarker,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    label,
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
            filterParams: { sysCat: "Stedstype" },
          },
        },
      ],
    },
    referredToBy,
    {
      name: "geoJSON",
      title: "Lokasjon",
      titleEN: "Location",
      description: "Where the hell did this happen?!",
      type: "feature",
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
      title: "label.nor",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
