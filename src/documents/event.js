// import { FaCalendar } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  labelSingleton,
  identifiedBy,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Event",
  name: "event",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  // icon: FaCalendar,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    labelSingleton,
    identifiedBy,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "eventType" }],
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
    {
      name: "tookPlaceAt",
      title: "Tok sted ved",
      titleEN: "Took place at",
      description: "Det generelle området eller stedet dette skjedde",
      type: "array",
      of: [{ type: "reference", to: [{ type: "place" }] }],
    },
    {
      name: "media",
      title: "Media",
      titleEN: "Media",
      type: "mediaObject",
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
