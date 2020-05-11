import { GiExplosiveMaterials } from "react-icons/gi";
import { label, altLabel } from "../../props";

export default {
  title: "Material",
  name: "material",
  type: "document",
  icon: GiExplosiveMaterials,
  fieldsets: [
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
  ],
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
