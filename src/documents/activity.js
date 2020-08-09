import { MdLocalActivity } from "react-icons/md";
import { timespan, referredToBy, carriedOutBy, usedSpecificTechnique, usedGeneralTechnique, usedSpecificObject, label, tookPlaceAt, hadParticipant, usedObjectOfType, identifiedBy, labelSingleton } from "../props";
import { defaultFieldsets } from "../fieldsets";
import { capitalize } from "lodash";
import { timespanAsString } from "../helpers/helpers";

export default {
  title: "Activity",
  name: "activity",
  type: "document",
  icon: MdLocalActivity,
  fieldsets: defaultFieldsets,
  fields: [
    labelSingleton,
    identifiedBy,
    {
      name: "hasType",
      title: "Aktivitetstype",
      titleEN: "Activity type",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "activityType" }],
        },
      ],
    },
    carriedOutBy,
    hadParticipant,
    {
      name: "target",
      title: "Mål",
      titleEN: "Target",
      type: "reference",
      to: [{ type: "collection" }, { type: "actor" }, { type: "group" }],
    },
    timespan,
    tookPlaceAt,
    referredToBy,
    {
      name: "consistsOf",
      title: "Underaktiviteter",
      titleEN: "Sub activities",
      type: "array",
      of: [{ type: "reference", to: [{ type: "activity" }] }],
    },
    {
      name: "continued",
      title: "Fortsatte",
      titleEN: "Continued",
      type: "array",
      of: [{ type: "reference", to: [{ type: "activity" }] }],
    },
    {
      name: "wasContinuedBy",
      title: "Ble fortsatt av",
      titleEN: "Was continued by",
      type: "array",
      of: [{ type: "reference", to: [{ type: "activity" }] }],
    },
    {
      name: "influencedBy",
      title: "Påvirket av",
      titleEN: "Influenced by",
      description: "",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "madeObject" },
            { type: "event" },
            { type: "place" },
            { type: "work" },
            { type: "actor" },
            { type: "group" },
          ],
        },
      ],
    },
    usedObjectOfType,
    usedSpecificObject,
    usedGeneralTechnique,
    usedSpecificTechnique,
    {
      name: "generalPurpose",
      title: "Generelt formål",
      titleEN: "General purpose",
      description: "",
      fieldset: "purpose",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "concept" }],
        },
      ],
    },
    {
      name: "motivatedBy",
      title: "Motivert av",
      titleEN: "Motivated by",
      description: "",
      fieldset: "purpose",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "designOrProcedure" },
            { type: "event" },
            { type: "report" },
            { type: "acquisition" },
            { type: "exhibition" },
            { type: "project" },
          ],
        },
      ],
    },
    {
      name: "intendedUseOf",
      title: "Forutså bruk av",
      titleEN: "Intended use of",
      description: "",
      fieldset: "purpose",
      type: "array",
      of: [{ type: "reference", to: [{ type: "madeObject" }] }],
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
  
      return {
        title: title,
        subtitle: `${type ? capitalize(type) + ': ' : ''} ${timespan}`
      };
    },
  },
};
