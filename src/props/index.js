import { licenseTypes } from "../vocabularies/defaultVocabularies";

const editorialState = {
  name: "editorialState",
  title: "Redaksjonell status",
  titleEN: "Editorial state",
  type: "string",
  fieldset: "state",
  validation: (Rule) => Rule.required(),
  options: {
    list: [
      { title: "Publisert", value: "published" },
      { title: "Til gjennomgang", value: "review" },
      { title: "Utkast", value: "draft" },
    ],
    layout: "radio",
  },
};

const accessState = {
  name: "accessState",
  title: "Tilgangsstatus",
  titleEN: "Access state",
  type: "string",
  fieldset: "state",
  validation: (Rule) => Rule.required(),
  options: {
    list: [
      { title: "Privat", value: "secret" },
      { title: "Open", value: "open" },
    ],
    layout: "radio",
    direction: "horizontal",
  },
};

const mainRepresentation = {
  title: "Hovedbilde",
  titleEN: "Main image",
  name: "mainRepresentation",
  fieldset: "representation",
  description:
    'Velg et bilde fra egen samling eller fra NB.no. Legg til bildetekst ved å trykke "Edit".',
  descriptionEN: "Choose a image from out own collection or from NB.no.",
  type: "mainRepresentation",
};

const subjectOfManifest = {
  title: "Hovedmanifest",
  titleEN: "Main manifest",
  description:
    "Hovedmanifestet til objektet, for eksempel: https://digi.ub.uni-heidelberg.de/diglit/iiif/cpgraec132/manifest.json.",
  descriptionEN: "The main manifest of this object",
  fieldset: "representation",
  name: "subjectOfManifest",
  type: "url",
};

const iiifStructures = {
  title: "IIIF structures",
  name: "structures",
  fieldset: "representation",
  type: "array",
  of: [{ type: "range" }],
};

const preferredIdentifier = {
  name: "preferredIdentifier",
  title: "Foretrukket identifikator",
  titleEN: "Preferred identifier",
  fieldset: "minimum",
  type: "string",
  /* validation: Rule => Rule.required().custom(async prefId => {
    // eslint-disable-next-line no-template-curly-in-string
    const docs = await client.fetch('*[preferredIdentifier == "${prefId}" && !(_id in path("drafts.**"))] { preferredIdentifier }', {prefId})
    return docs.length > 1 ? 'Value is not unique' : true
  }) */
};

const label = {
  name: "label",
  title: "Tittel",
  titleEN: "Title",
  description: "",
  descriptionEN: "",
  fieldset: "minimum",
  type: "localeString",
  validation: (Rule) => Rule.required(),
};

const labelSingleton = {
  name: "label",
  title: "Tittel",
  titleEN: "Title",
  description: "",
  descriptionEN: "",
  fieldset: "minimum",
  type: "string",
  validation: (Rule) => Rule.required(),
};

/**
 * Identified by
 * P1_is_identified_by
 */

const identifiedBy = {
  name: "identifiedBy",
  title: "Identifisert av",
  titleEN: "Identified by",
  description: "Legg til titler, navn eller identifikatorer.",
  descriptionEN: "Add all known titles, name or identifiers.",
  fieldset: "minimum",
  type: "array",
  of: [{ type: "name" }, { type: "identifier" }],
  options: {
    editModal: "popup",
  },
};

const hasType = {
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
};

/**
 * License
 * dct:license
 */

const license = {
  name: "license",
  title: "Lisensiering",
  titleEN: "License",
  description: "Velg den korrekt lisensen eller rettighetserklæringen. ",
  descriptionEN: "Choose the correct lisense or mark",
  fieldset: "minimum",
  type: "string",
  options: {
    list: licenseTypes,
  },
  validation: (Rule) => Rule.required(),
};

const subject = {
  name: "subject",
  title: "Emne",
  titleEN: "Subject",
  fieldset: "minimum",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "concept" }],
    },
  ],
};

const referredToBy = {
  name: "referredToBy",
  title: "Beskrivelse",
  titleEN: "Description",
  description:
    "Objektet kan ha mange beskrivelser, korte og/eller lange. Tekstene kan types for ulike brukeformål.",
  descriptionEN: "A shortish description",
  fieldset: "minimum",
  type: "array",
  of: [
    { type: "linguisticObject" },
    { type: "reference", to: [{ type: "text" }] },
  ],
  options: {
    editModal: "fullscreen",
  },
};

const relation = {
  name: "relation",
  title: "Relaterte ting",
  titleEN: "Related stuff",
  description: "Uspesifisert relasjon til en annen ting",
  type: "array",
  of: [
    {
      type: "reference",
      to: [
        { type: "madeObject" }, 
        { type: "actor" }, 
        { type: "group" },
        { type: "event" },
        { type: "activity" },
      ],
    },
  ],
};

const hasCurrentOwner = {
  name: "hasCurrentOwner",
  title: "Nåværende eier",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "actor" }, { type: "group" }],
    },
  ],
};

const hasFormerOrCurrentOwner = {
  name: "hasFormerOrCurrentOwner",
  title: "Tidligere eller nåværende eier",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "actor" }, { type: "group" }],
    },
  ],
};

const composedOf = {
  name: "composedOf",
  title: "Består av",
  titleEN: "Composed of",
  description:
    'Andre identifiserte objekt som er en del av dette objektet. For eksempel: bokomslaget eller "Sult" av Hamsun bundet sammen med andre verk.',
  descriptionEN: "Other identified madeObjects this object is composed of",
  type: "array",
  of: [{ type: "reference", to: [{ type: "madeObject" }] }],
};

const isSubjectOf = {
  name: "isSubjectOf",
  title: "Omhandlet i",
  titleEN: "Subject of",
  description: "Tekster om dette objektet",
  descriptionEN: "Texts that have this object as its main subject, both internal and other texts",
  fieldset: "additionalInformation",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "writtenText" }],
    },
  ],
};

const depicts = {
  name: "depicts",
  title: "Avbilder",
  titleEN: "Depicts",
  type: "array",
  fieldset: "additionalInformation",
  of: [
    {
      type: "reference",
      to: [
        { type: "madeObject" },
        { type: "actor" },
        { type: "group" },
        { type: "concept" },
      ],
    },
  ],
};

const represents = {
  name: "represents",
  title: "Representerer",
  titleEN: "Represents",
  type: "array",
  of: [
    {
      type: "reference",
      to: [
        { type: "madeObject" },
        { type: "actor" },
        { type: "group" },
        { type: "concept" },
      ],
    },
  ],
};

const showsVisualObject = {
  name: "showsVisualObject",
  title: "Viser merke eller bilde",
  titleEN: "Shown visual item",
  type: "array",
  fieldset: "additionalInformation",
  of: [{ type: "visualObject" }],
};

const carries = {
  name: "carries",
  title: "Bærer verk",
  titleEN: "Carries work",
  type: "array",
  fieldset: "additionalInformation",
  of: [{ type: "reference", to: [{ type: "work" }] }],
};

const measurement = {
  name: "measurement",
  title: "Måling",
  titleEN: "Measurement",
  type: "array",
  fieldset: "physicalDescription",
  of: [{ type: "measurement" }],
};

const consistsOf = {
  name: "consistsOf",
  title: "Laget av",
  titleEn: "Consists of",
  description: "Laget av material, for eksempel lær og/eller pergament.",
  descriptionEN:
    "The material the item is produced with, eg. leather and-or parchment.",
  type: "array",
  fieldset: "technique",
  of: [
    {
      type: "reference",
      to: [{ type: "material" }],
    },
  ],
};

const usedGeneralTechnique = {
  name: "usedGeneralTechnique",
  title: "Brukte generell teknikk",
  titleEN: "Used general technique",
  fieldset: "technique",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "technique" }],
    },
  ],
};

const usedSpecificTechnique = {
  name: "usedSpecificTechnique",
  title: "Brukte spesifikk teknikk",
  titleEN: "Used spesific technique",
  fieldset: "technique",
  type: "array",
  of: [{ type: "reference", to: [{ type: "designOrProcedure" }] }],
};

const usedObjectOfType = {
  name: "usedObjectOfType",
  title: "Brukte objekt av type",
  titleEN: "Used object of type",
  fieldset: "technique",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "objectType" }],
    },
  ],
};

const usedSpecificObject = {
  name: "usedSpecificObject",
  title: "Brukte spesifikt objekt",
  titleEN: "Used spesific object",
  fieldset: "technique",
  type: "array",
  of: [{ type: "reference", to: [{ type: "madeObject" }] }],
};

const usedSpecificObjectSet = {
  name: "usedSpecificObject",
  title: "Brukte spesifikt objekt",
  titleEN: "Used spesific object",
  type: "set",
};


const timespan = {
  name: "timespan",
  title: "Tidsspenn",
  titleEN: "Timespan",
  type: "array",
  of: [{ type: "timespan" }],
  options: {
    editModal: "fullscreen",
  },
  validation: (Rule) =>
    Rule.length(1).warning("You should only register one timespan"),
};

const carriedOutBy = {
  name: "carriedOutBy",
  title: "Utført av",
  titleEN: "Carried out by",
  type: "array",
  of: [{ type: "actorInRole" }],
};

const hadParticipant = {
  name: "hadParticipant",
  title: "Hadde medvirkende",
  titleEN: "Had participant",
  type: "array",
  of: [{ type: "actorInRole" }],
};

const tookPlaceAt = {
  name: "tookPlaceAt",
  title: "Skjedde ved",
  titleEN: "Took place at",
  type: "array",
  of: [{ type: "reference", to: [{ type: "place" }] }],
};

/**
 * skos:altLabel
 */
const altLabel = {
  name: "altLabel",
  title: "Alternativt navn",
  titleEN: "Alternative label",
  type: "localeString",
};

/**
 * P35_has_identified
 */
const hasIdentified = {
  name: "hasIdentified",
  title: "Identifiserte tilstander",
  titleEN: "Has identified condition states",
  type: "array",
  of: [{ type: "conditionState" }],
};

const valueSlider = {
  name: "value",
  title: "Verdi",
  titleEN: "Value",
  description: "1 is horrible, 100 is MINT!",
  type: "number",
  options: {
    layout: "slider",
    range: { min: 1, max: 100, step: 1 },
  },
};

const language = {
  name: "language",
  title: "Språk",
  titleEN: "Language",
  type: "array",
  of: [{ type: "reference", to: [{ type: "language" }] }],
};

const memberOf = {
  name: "memberOf",
  title: "Medlem av",
  titleEN: "Member of",
  type: "array",
  of: [{ type: "reference", to: [{ type: "group" }] }],
};

/**
 * hasMember
 * la:has_member
 */
const hasMember = {
  name: "hasMember",
  title: "Har deler",
  titleEN: "Has member",
  type: "array",
  of: [{ type: "reference", to: [{ type: "madeObject" }] }],
};

/**
 * broader
 * skos:broader
 */
const broader = {
  name: "broader",
  title: "Overordnet term",
  titleEN: "Broader",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

const narrower = {
  name: "narrower",
  title: "Underordnet term",
  titleEN: "Narrower",
  description: "Trenger vi narrower? Blir mye å registrere...",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

const domain = {
  name: "domain",
  title: "Domene",
  titleEN: "Domain",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

const definedByGeoJSON = {
  name: "definedByGeoJSON",
  title: "GeoJSON",
  titleEN: "GeoJSON",
  description: "Lag et GeoJSON objekt eller lim inn en hel GeoJSON fil.",
  type: "array",
  of: [{ type: "geojsonFeatureCollection" }, { type: "geojson" }],
};

export {
  editorialState,
  accessState,
  mainRepresentation,
  subjectOfManifest,
  iiifStructures,
  preferredIdentifier,
  label,
  labelSingleton,
  identifiedBy,
  hasType,
  license,
  subject,
  referredToBy,
  relation,
  hasCurrentOwner,
  hasFormerOrCurrentOwner,
  composedOf,
  isSubjectOf,
  depicts,
  represents,
  showsVisualObject,
  carries,
  measurement,
  consistsOf,
  usedGeneralTechnique,
  usedSpecificTechnique,
  usedObjectOfType,
  usedSpecificObject,
  usedSpecificObjectSet,
  timespan,
  carriedOutBy,
  hadParticipant,
  tookPlaceAt,
  altLabel,
  hasIdentified,
  valueSlider,
  language,
  memberOf,
  hasMember,
  broader,
  narrower,
  domain,
  definedByGeoJSON,
};
