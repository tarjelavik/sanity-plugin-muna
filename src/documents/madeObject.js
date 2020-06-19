import jsonata from "jsonata";
// import { FaBookDead } from "react-icons/fa";

import {
  editorialState,
  accessState,
  mainRepresentation,
  subjectOfManifest,
  preferredIdentifier,
  label,
  license,
  subject,
  referredToBy,
  relation,
  hasCurrentOwner,
  hasFormerOrCurrentOwner,
  composedOf,
  identifiedBy,
  isSubjectOf,
  depicts,
  showsVisualObject,
  carries,
  measurement,
  consistsOf,
  labelSingleton,
  iiifStructures,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  name: "madeObject",
  title: "Objekt",
  titleEN: "Made Object",
  description: "Menneskapte objekt",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  // icon: FaBookDead,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    preferredIdentifier,
    labelSingleton,
    identifiedBy,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      description: "",
      descriptionEN: "",
      fieldset: "minimum",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "objectType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
    subject,
    license,
    mainRepresentation,
    subjectOfManifest,
    iiifStructures,
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Hendelser og aktiviteter knyttet til dette objektet.",
      descriptionEN: "Events and activities connected to this object",
      type: "array",
      of: [
        { type: "production" },
        { type: "transformation" },
        { type: "reference", to: [{ type: "acquisition" }] },
        { type: "move" },
        { type: "activity" },
        { type: "destruction" },
      ],
    },
    relation,
    hasCurrentOwner,
    hasFormerOrCurrentOwner,
    composedOf,
    isSubjectOf,
    depicts, // remove?
    showsVisualObject,
    carries,
    measurement,
    consistsOf,
  ],
  preview: {
    select: {
      title: "label",
      id: "preferredIdentifier",
      type: "hasType.0.label.nor",
      blocks: "description",
      media: "mainRepresentation",
      published: "accessState",
    },
    prepare(selection) {
      const { title, id, type, blocks, media, published } = selection;
      const expression = jsonata("nor[0]");
      const block = expression.evaluate(blocks);
      const secret = published === "secret" ? "🔒" : "";

      return {
        title: title,
        subtitle: secret + (id ? id + ", " : "") + type,
        description: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "",
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Tittel, A-Å",
      name: "title",
      by: [{ field: "label", direction: "asc" }],
    },
    {
      title: "Tittel, Å-A",
      name: "title",
      by: [{ field: "label", direction: "desc" }],
    },
    {
      title: "Foretrukket id, Synkende",
      name: "preferredIdentifier",
      by: [{ field: "preferredIdentifier", direction: "desc" }],
    },
    {
      title: "Foretrukket id, Stigende",
      name: "preferredIdentifier",
      by: [
        {
          field: "preferredIdentifier",
          direction: "asc",
        },
      ],
    },
  ],
};
