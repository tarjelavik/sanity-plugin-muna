import jsonata from "jsonata";
/* import client from 'part:@sanity/base/client' */

import { FaBookDead } from "react-icons/fa";

import {
  editorialState,
  accessState,
  mainRepresentation,
  mainManifest,
  preferredIdentifier,
  label,
  title,
  rights,
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
} from "../../props";

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
  icon: FaBookDead,
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
    {
      name: "partsOfTheObject",
      title: "Felt relatert til deler eller seksjoner",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "additionalInformation",
      title: "Alternative navn, identifikatorer og beskrivelser",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "visualObject",
      title: "Felt relatert til visuelle objekt",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "linguisticObject",
      title: "Felt relatert til tekstlige objekt",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "physicalDescription",
      title: "Felt relatert til fysisk beskrivelse",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "collectionManagement",
      title: "Felt relatert til samlingspleie",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    editorialState,
    accessState,
    mainRepresentation,
    mainManifest,
    preferredIdentifier,
    label,
    title,
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
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [...($sysCat)]]._id)',
            filterParams: { sysCat: ["Objekt-/verkstype", "Seksjonstype"] },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    rights,
    subject,
    referredToBy,
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
        { type: "endingActivity" },
      ],
    },
    relation,
    hasCurrentOwner,
    hasFormerOrCurrentOwner,
    composedOf,
    identifiedBy,
    isSubjectOf,
    depicts, // remove?
    showsVisualObject,
    carries,
    measurement,
    consistsOf
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
