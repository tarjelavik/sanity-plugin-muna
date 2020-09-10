import { FaGifts } from "react-icons/fa";
import { editorialState, accessState, timespan, label, referredToBy, labelSingleton, identifiedBy, isSubjectOf, transferredTitleOf, transferredTitleFrom, transferredTitleTo } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Acquisition",
  name: "acquisition",
  type: "document",
  initialValue: {
    editorialState: "draft",
    accessState: "secret",
  },
  icon: FaGifts,
  fieldsets: [
    {
      name: "state",
      title: "Status",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Basic metadata",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "ownership",
      title: "Felt relatert til eierskap",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    labelSingleton,
      {
        ...identifiedBy,
        fieldset: "minimum",
      },
      {
        ...referredToBy,
        fieldset: "minimum",
      },
      {
        ...isSubjectOf,
        fieldset: "minimum",
      },
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      fieldset: "minimum",
      of: [
        {
          type: "reference",
          to: [{ type: "acquisitionType" }],
        },
      ],
    },
    timespan,
    {
      ...transferredTitleOf,
      fieldset: "ownership",
    },
    {
      ...transferredTitleFrom,
      fieldset: "ownership",
    },
    {
      ...transferredTitleTo,
      fieldset: "ownership",
    },
    {
      name: "consistsOf",
      title: "Underakkvisisasjon",
      titleEN: "Sub acquisition",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "acquisition" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "documentedIn",
      title: "Documented in",
      titleEN: "Dokumentert i",
      type: "array",
      of: [{ type: "file" }],
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label",
      published: "accessState",
    },
    prepare(selection) {
      const { type, title, published } = selection;
      const secret = published === "secret" ? "🔒" : "";

      return {
        title: title,
        subtitle: secret + type,
      };
    },
  },
};
