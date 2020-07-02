import { FaMapMarker } from "react-icons/fa";

import {
  editorialState,
  accessState,
  label,
  referredToBy,
  identifiedBy,
  definedByGeoJSON,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

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
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    identifiedBy,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "placeType" }],
        },
      ],
    },
    referredToBy,
    definedByGeoJSON,
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
