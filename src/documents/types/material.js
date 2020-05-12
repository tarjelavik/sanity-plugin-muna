import { GiExplosiveMaterials } from "react-icons/gi";
import { label, altLabel } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

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
      title: "label.nor",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title.no,
      };
    },
  },
};
