import { FaCalendar } from "react-icons/fa";
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
import { timespanAsString } from "../helpers/helpers";
import { capitalize } from "lodash";

export default {
  title: "Event",
  name: "event",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaCalendar,
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
      title: "label",
      bb: 'timespan.0.beginOfTheBegin',
      eb: 'timespan.0.endOfTheBegin',
      date: 'timespan.0.date',
      be: 'timespan.0.beginOfTheEnd',
      ee: 'timespan.0.endOfTheEnd',
      type: "hasType.0.label.nor",
    },
    prepare(selection) {
      const { title, type, bb, eb, date, be, ee } = selection;
      const timespan = timespanAsString(bb, eb, date, be, ee, 'nb')
      console.log(type)
      return {
        title: title,
        subtitle: `${type ? capitalize(type) + ': ' : ''} ${timespan}`
      };
    },
  },
};
