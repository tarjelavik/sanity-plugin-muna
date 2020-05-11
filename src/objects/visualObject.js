import { FaImage } from "react-icons/fa";

import { mainRepresentation, label, represents, referredToBy } from "../props";

export default {
  title: "Visual object",
  name: "visualObject",
  type: "object",
  icon: FaImage,
  fieldsets: [
    {
      name: "state",
      title: "Status",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Felt for minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "representation",
      title: "Hovedbilde og IIIF manifest",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [label, mainRepresentation, represents, referredToBy],
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
