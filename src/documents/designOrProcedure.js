import { FaClipboard } from "react-icons/fa";
import { editorialState, accessState, label, referredToBy, labelSingleton, identifiedBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Design or procedure",
  name: "designOrProcedure",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaClipboard,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    labelSingleton,
    identifiedBy,
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
