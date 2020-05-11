import client from "part:@sanity/base/client";
import { GiBookshelf } from "react-icons/gi";

import {
  editorialState,
  accessState,
  label,
  referredToBy,
  preferredIdentifier,
} from "../props";

export default {
  title: "Collection",
  name: "collection",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: GiBookshelf,
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
    {
      name: "additionalInformation",
      title: "Alternative navn, identifikatorer og beskrivelser",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    editorialState,
    accessState,
    label,
    {
      name: "title",
      title: "Titler",
      titleEN: "Titles",
      description: "Legg til alternative titler",
      descriptionEN: "Add all known titles",
      fieldset: "additionalInformation",
      type: "array",
      of: [{ type: "name" }],
      options: {
        editModal: "popup",
      },
    },
    {
      name: "identifiedBy",
      title: "Identifikator",
      titleEN: "Identifier",
      description: "Legg til identifikator",
      descriptionEN: "Add all known identifiers",
      fieldset: "additionalInformation",
      type: "array",
      of: [{ type: "identifier" }],
      options: {
        editModal: "popup",
      },
    },
    preferredIdentifier,
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
        { type: "endingActivity" },
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
      title: "label.nor",
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
