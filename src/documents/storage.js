import { FaBox } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  tookPlaceAt,
  preferredIdentifier,
  identifiedBy,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Storage",
  name: "storage",
  description: "Storage is a subclass of place.",
  type: "document",
  initialValue: {
    editorialState: "published",
    accessState: "secret",
  },
  icon: FaBox,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    preferredIdentifier,
    label,
    identifiedBy,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "reference",
      to: [{ type: "storageType" }],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
    timespan,
    {
      name: "location",
      title: "Lokasjon",
      titleEN: "Location",
      description: "Where the hell did this happen?!",
      type: "geopoint",
    },
    tookPlaceAt,
    {
      name: "consistsOf",
      title: "Består av",
      titleEN: "consistsOf",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "storage" },
            { type: "madeObject" },
            { type: "collection" },
          ],
        },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label.nor",
    },
    prepare(selection) {
      const { title, type } = selection;

      return {
        title: title,
        subtitle: type,
      };
    },
  },
};
