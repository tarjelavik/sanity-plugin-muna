import { FaUsers } from "react-icons/fa";
import { accessState, label, editorialState, referredToBy, labelSingleton, identifiedBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Group",
  name: "group",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaUsers,
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
          to: [{ type: "groupType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
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
