import { FaUsers } from "react-icons/fa";
import { accessState, label, editorialState, referredToBy } from "../props";

export default {
  title: "Group",
  name: "group",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaUsers,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Felt for minimumsregistrering",
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
            filterParams: { sysCat: "Gruppetype" },
          },
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
        { type: "relocation" },
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
