import { GiExplosiveMaterials } from "react-icons/gi";
import { label, altLabel } from "../../props";
import { defaultFieldsets } from "../../fieldsets";
import { coalescedLabel } from "../../helpers/helpers.js";

export default {
  title: "Material",
  name: "material",
  type: "document",
  icon: GiExplosiveMaterials,
  fieldsets: defaultFieldsets,
  fields: [
    label,
    altLabel
  ],
  preview: {
    select: {
      title: "label",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: coalescedLabel(title),
      };
    },
  },
};
