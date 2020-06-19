import { mainRepresentation, label, represents, referredToBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Visual object",
  name: "visualObject",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [represents, label, mainRepresentation, referredToBy],
  preview: {
    select: {
      title: "label.nor",
      media: "mainRepresentation",
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title: title,
        media: media,
      };
    },
  },
};
