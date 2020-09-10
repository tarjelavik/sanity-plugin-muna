import { FaClipboard } from "react-icons/fa";
import { editorialState, accessState, label, referredToBy, identifiedBy } from "../props";
import { defaultFieldsets } from "../fieldsets";
import { coalesceLabel } from "../helpers/helpers";

export default {
  title: "Design or procedure",
  name: "designOrProcedure",
  type: "document",
  initialValue: {
    editorialState: "draft",
    accessState: "secret",
  },
  icon: FaClipboard,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    identifiedBy,
    {
      name: "body",
      title: "Tekst",
      titleEN: "Body",
      type: "localeBlock",
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
      title: "label",
    },
    prepare(selection) {
      const { title } = selection;
      
      return {
        title: coalesceLabel(title),
      };
    },
  },
};
