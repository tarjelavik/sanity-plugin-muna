import { GiBookshelf } from "react-icons/gi";

import {
  editorialState,
  accessState,
  referredToBy,
  preferredIdentifier,
  labelSingleton,
  identifiedBy,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Collection",
  name: "collection",
  type: "document",
  initialValue: {
    editorialState: "published",
    accessState: "secret",
  },
  icon: GiBookshelf,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    preferredIdentifier,
    labelSingleton,
    identifiedBy,
    referredToBy,
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Events and activities connected to this object",
      type: "array",
      of: [
        { type: "production" },
        { type: "transformation" },
        { type: "acquisition" },
        { type: "move" },
        { type: "destruction" },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "composedOf",
      title: "Består av",
      titleEN: "Composed of",
      description:
        "Andre identifiserte undersamlinger som er en del av dette samlingen.",
      descriptionEN:
        "Other identified subcollections this collection is composed of",
      type: "array",
      of: [{ type: "reference", to: [{ type: "collection" }] }],
    },
    {
      name: "isSubjectOf",
      title: "Omhandlet i",
      titleEN: "Subject of",
      description: "Tekster om dette objektet",
      descriptionEN: "Texts about this object, both internal and other texts",
      fieldset: "additionalInformation",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "linguisticObject" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "preferredIdentifier",
    },
    prepare(selection) {
      const { title, subtitle } = selection;

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
