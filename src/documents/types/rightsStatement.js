import { GiHandOfGod } from "react-icons/gi";
import { label } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Right statement",
  name: "rightsStatement",
  type: "document",
  icon: GiHandOfGod,
  fieldsets: defaultFieldsets,
  fields: [
    label, 
    {
      name: "inheritFrom",
      title: "Arver fra",
      titleEN: "Inherits from",
      description: "Arver rettigheter fra predefinert lisens.",
      type: "url"
    },
    {
      name: "deprecatedOn",
      title: "Gyldig til",
      titleEN: "Deprecated on",
      description: "Dato rettighetene utløper.",
      descriptionEN: "Date the rights deprecates",
      type: "date"
    },
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
