import { MdLocalActivity } from "react-icons/md";
import { timespan, referredToBy, carriedOutBy, usedSpecificTechnique, usedGeneralTechnique, usedSpecificObject, label, tookPlaceAt } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Activity",
  name: "activity",
  type: "document",
  icon: MdLocalActivity,
  fieldsets: defaultFieldsets,
  fields: [
    label,
    {
      name: "hasType",
      title: "Aktivitetstype",
      titleEN: "Activity type",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Aktivitetstype" },
          },
        },
      ],
    },
    carriedOutBy,
    {
      name: "hasParticipant",
      title: "Hadde medvirkende",
      titleEN: "Had participant",
      type: "array",
      of: [{ type: "actorInRole" }],
    },
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
    {
      name: "usedObjectOfType",
      title: "Brukte objekt av type",
      titleEN: "Used object of type",
      description: "",
      fieldset: "objects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Objekt-/verkstype" },
          },
        },
      ],
    },
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
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "purposeType" },
          },
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
      title: "label.nor",
      type: "hasType.0.label.nor",
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
