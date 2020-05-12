import { FaTag } from "react-icons/fa";
import { editorialState, accessState, label, altLabel } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Type",
  name: "typeClass",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaTag,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    altLabel,
    {
      title: "System category",
      name: "systemCategory",
      type: "array",
      of: [{ type: "reference", to: [{ type: "systemCategory" }] }],
    },
    {
      name: "broader",
      title: "Overordnet term",
      titleEN: "Broader",
      type: "array",
      of: [{ type: "reference", to: [{ type: "typeClass" }] }],
    },
    {
      name: "narrower",
      title: "Underordnet term",
      titleEN: "Narrower",
      description: "Trenger vi narrower? Blir mye å registrere...",
      type: "array",
      of: [{ type: "reference", to: [{ type: "typeClass" }] }],
    },
    {
      name: "domain",
      title: "Domene",
      titleEN: "Domain",
      type: "array",
      of: [{ type: "reference", to: [{ type: "typeClass" }] }],
    },
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "creation" }],
    },
  ],
  preview: {
    select: {
      title: "label.nor",
      broader: "broader.0.label.nor",
      sysCat: "systemCategory.0.label.nor",
    },
    prepare(selection) {
      const { title, broader, sysCat } = selection;
      return {
        title: title,
        subtitle: sysCat
          ? `⚙️ ${sysCat}`
          : "" + " | " + broader
          ? `⬆️` + broader
          : "🔝 Toppkonsept",
      };
    },
  },
};
