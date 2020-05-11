import { FaLanguage } from "react-icons/fa";
import { label, altLabel } from "../../props";

export default {
  title: "Language",
  name: "language",
  type: "document",
  icon: FaLanguage,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    label,
    altLabel,
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
