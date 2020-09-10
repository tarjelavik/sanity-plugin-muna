import { FaUsers } from "react-icons/fa";
import { accessState, editorialState, referredToBy, labelSingleton, identifiedBy } from "../props";
import { coalesceLabel } from "../helpers/helpers";

export default {
  title: "Group",
  name: "group",
  type: "document",
  initialValue: {
    editorialState: "draft",
    accessState: "secret",
  },
  icon: FaUsers,
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
      name: "representation",
      title: "Hovedbilde og IIIF manifest",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "relations",
      title: "Relations to other stuff",
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
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      fieldset: "minimum",
      of: [
        {
          type: "reference",
          to: [{ type: "groupType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Events and activities connected to this object",
      type: "array",
      of: [
        { type: "formation" },
        { type: "joining" },
        { type: "leaving" },
        { type: "move" },
        { type: "dissolution" },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      title: "label",
      type: "hasType.0.label",
    },
    prepare(selection) {
      const { title, type } = selection;

      return {
        title: title,
        subtitle: coalesceLabel(type),
      };
    },
  },
};
