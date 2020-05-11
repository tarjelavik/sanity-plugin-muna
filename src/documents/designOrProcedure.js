import { FaClipboard } from "react-icons/fa";

import { editorialState, accessState, label, referredToBy } from "../props";

export default {
  title: "Design or procedure",
  name: "designOrProcedure",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaClipboard,
  fieldsets: [
    {
      name: "state",
      title: "State",
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
            filterParams: { sysCat: "Prosedyretype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
    {
      name: "documentedIn",
      title: "Dokumentert i",
      titleEN: "Documented in",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "file" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "label.nor",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title,
      };
    },
  },
};
