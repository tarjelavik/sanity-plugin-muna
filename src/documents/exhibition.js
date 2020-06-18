import { FaGlasses } from "react-icons/fa";

import { editorialState, accessState, label, referredToBy, labelSingleton, identifiedBy, language } from "../props";
import { defaultFieldsets } from "../fieldsets";
import coalescedLabel from "../helpers/helpers";

export default {
  title: "Exhibition",
  name: "exhibition",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  // icon: FaGlasses,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    labelSingleton,
    identifiedBy,
    language,
    {
      name: "creator",
      title: "Skaper",
      titleEN: "Author",
      description:
        "Registrer en eller flere aktører som har skapt dette dokumentet, gjerne med hvilken rolle de hadde.",
      type: "array",
      of: [
        {
          type: "actorInRole",
        },
      ],
    },
    referredToBy
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
