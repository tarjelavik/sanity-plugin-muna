import { FaLanguage } from "react-icons/fa";
import { label, altLabel } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Language",
  name: "language",
  type: "document",
  // icon: FaLanguage,
  fieldsets: defaultFieldsets,
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
