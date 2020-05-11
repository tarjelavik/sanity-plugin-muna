import { FaBox } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  tookPlaceAt,
} from "../props";

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
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Mandatory fields for minimum registration",
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
            filterParams: { sysCat: "Lagringstype" },
          },
        },
      ],
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
