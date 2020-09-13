import { licenseTypes } from "../vocabularies/defaultVocabularies";

export const editorialState = {
  name: "editorialState",
  title: "Status",
  titleEN: "State",
  type: "string",
  fieldset: "state",
  validation: (Rule) => Rule.required(),
  options: {
    list: [
      { title: "Utkast", value: "draft" },
      { title: "Til gjennomgang", value: "review" },
      { title: "Publisert", value: "published" },
    ],
    layout: "radio",
    direction: "horizontal"
  },
};

export const accessState = {
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

export const mainRepresentation = {
  title: "Hovedbilde",
  titleEN: "Main image",
  name: "mainRepresentation",
  description:
    'Velg et bilde fra en av kildene.',
  descriptionEN: "Choose a image from out own collection or from NB.no.",
  type: "mainRepresentation",
};

export const subjectOfManifest = {
  title: "Hovedmanifest",
  titleEN: "Main manifest",
  description:
    "Hovedmanifestet til objektet.",
  descriptionEN: "The main manifest of this object",
  name: "subjectOfManifest",
  type: "iiifManifest",
};

export const iiifStructures = {
  title: "IIIF structures",
  name: "structures",
  type: "array",
  of: [{ type: "range" }],
};

export const preferredIdentifier = {
  name: "preferredIdentifier",
  title: "Foretrukket identifikator",
  titleEN: "Preferred identifier",
  type: "string",
  /* validation: Rule => Rule.required().custom(async prefId => {
    // eslint-disable-next-line no-template-curly-in-string
    export const docs = await client.fetch('*[preferredIdentifier == "${prefId}" && !(_id in path("drafts.**"))] { preferredIdentifier }', {prefId})
    return docs.length > 1 ? 'Value is not unique' : true
  }) */
};

export const label = {
  name: "label",
  title: "Tittel",
  titleEN: "Title",
  description: "",
  descriptionEN: "",
  type: "localeString",
  validation: (Rule) => Rule.required(),
};

export const labelSingleton = {
  name: "label",
  title: "Tittel",
  titleEN: "Title",
  description: "",
  descriptionEN: "",
  type: "string",
  validation: (Rule) => Rule.required(),
};

/**
 * Identified by
 * P1_is_identified_by
 */

export const identifiedBy = {
  name: "identifiedBy",
  title: "Identifisert av",
  titleEN: "Identified by",
  description: "Legg til titler, navn eller identifikatorer.",
  descriptionEN: "Add all known titles, name or identifiers.",
  type: "array",
  of: [{ type: "name" }, { type: "identifier" }],
  options: {
    editModal: "popup",
  },
};

export const hasType = {
  name: "hasType",
  title: "Klassifisert som",
  titleEN: "Classified as",
  description: "",
  descriptionEN: "",
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

export const license = {
  name: "license",
  title: "Lisensiering",
  titleEN: "License",
  description: "Velg den korrekt lisensen eller rettighetserklæringen. ",
  descriptionEN: "Choose the correct lisense or mark",
  type: "string",
  options: {
    list: licenseTypes,
  },
  validation: (Rule) => Rule.required(),
};

export const subject = {
  name: "subject",
  title: "Emne",
  titleEN: "Subject",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "concept" }],
    },
  ],
};

export const referredToBy = {
  name: "referredToBy",
  title: "Beskrivelse",
  titleEN: "Description",
  description:
    "Objektet kan ha mange beskrivelser, korte og/eller lange. Tekstene kan types for ulike brukeformål.",
  descriptionEN: "A shortish description",
  type: "array",
  of: [
    { type: "linguisticObject" },
    { type: "reference", to: [{ type: "text" }] },
  ],
  options: {
    editModal: "fullscreen",
  },
};

export const relation = {
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

export const wasPresentAt = {
  name: "wasPresentAt",
  title: "Var tilstede ved",
  titleEN: "Was present at",
  description: "Dette objektet var tilstede ved en hendelse eller aktivitet",
  type: "array",
  of: [
    {
      type: "reference",
      to: [
        { type: "event" },
        { type: "activity" },
      ],
    },
  ],
};

export const hasCurrentOwner = {
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

export const hasFormerOrCurrentOwner = {
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

export const composedOf = {
  name: "composedOf",
  title: "Består av",
  titleEN: "Composed of",
  description:
    'Andre identifiserte objekt som er en del av dette objektet. For eksempel: bokomslaget eller "Sult" av Hamsun bundet sammen med andre verk.',
  descriptionEN: "Other identified madeObjects this object is composed of",
  type: "array",
  of: [{ type: "reference", to: [{ type: "madeObject" }] }],
};

export const isSubjectOf = {
  name: "isSubjectOf",
  title: "Omhandlet i",
  titleEN: "Subject of",
  description: "Tekster om dette objektet",
  descriptionEN: "Texts that have this object as its main subject, both internal and other texts",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "writtenText" }],
    },
  ],
};

export const depicts = {
  name: "depicts",
  title: "Avbilder",
  titleEN: "Depicts",
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

export const represents = {
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

export const showsVisualObject = {
  name: "showsVisualObject",
  title: "Viser merke eller bilde",
  titleEN: "Shown visual item",
  type: "array",
  of: [{ type: "visualObject" }],
};

export const carries = {
  name: "carries",
  title: "Bærer verk",
  titleEN: "Carries work",
  type: "array",
  of: [{ type: "reference", to: [{ type: "work" }] }],
};

export const measurement = {
  name: "measurement",
  title: "Måling",
  titleEN: "Measurement",
  type: "array",
  of: [{ type: "measurement" }],
};

export const consistsOf = {
  name: "consistsOf",
  title: "Laget av",
  titleEn: "Consists of",
  description: "Laget av material, for eksempel lær og/eller pergament.",
  descriptionEN:
    "The material the item is produced with, eg. leather and-or parchment.",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "material" }],
    },
  ],
};

export const usedGeneralTechnique = {
  name: "usedGeneralTechnique",
  title: "Brukte generell teknikk",
  titleEN: "Used general technique",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "technique" }],
    },
  ],
};

export const usedSpecificTechnique = {
  name: "usedSpecificTechnique",
  title: "Brukte spesifikk teknikk",
  titleEN: "Used spesific technique",
  type: "array",
  of: [{ type: "reference", to: [{ type: "designOrProcedure" }] }],
};

export const usedObjectOfType = {
  name: "usedObjectOfType",
  title: "Brukte objekt av type",
  titleEN: "Used object of type",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "objectType" }],
    },
  ],
};

export const usedSpecificObject = {
  name: "usedSpecificObject",
  title: "Brukte spesifikt objekt",
  titleEN: "Used spesific object",
  type: "array",
  of: [{ type: "reference", to: [{ type: "madeObject" }] }],
};

export const usedSpecificObjectSet = {
  name: "usedSpecificObject",
  title: "Brukte spesifikt objekt",
  titleEN: "Used spesific object",
  type: "set",
};


export const timespan = {
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

export const carriedOutBy = {
  name: "carriedOutBy",
  title: "Utført av",
  titleEN: "Carried out by",
  type: "array",
  of: [{ type: "actorInRole" }],
};

export const hadParticipant = {
  name: "hadParticipant",
  title: "Hadde medvirkende",
  titleEN: "Had participant",
  type: "array",
  of: [{ type: "actorInRole" }],
};

export const tookPlaceAt = {
  name: "tookPlaceAt",
  title: "Skjedde ved",
  titleEN: "Took place at",
  type: "array",
  of: [{ type: "reference", to: [{ type: "place" }] }],
};

/**
 * skos:altLabel
 */
export const altLabel = {
  name: "altLabel",
  title: "Alternativt navn",
  titleEN: "Alternative label",
  type: "localeString",
};

/**
 * P35_has_identified
 */
export const hasIdentified = {
  name: "hasIdentified",
  title: "Identifiserte tilstander",
  titleEN: "Has identified condition states",
  type: "array",
  of: [{ type: "conditionState" }],
};

export const valueSlider = {
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

export const language = {
  name: "language",
  title: "Språk",
  titleEN: "Language",
  type: "array",
  of: [{ type: "reference", to: [{ type: "language" }] }],
};

export const memberOf = {
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
export const hasMember = {
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
export const broader = {
  name: "broader",
  title: "Overordnet term",
  titleEN: "Broader",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

export const narrower = {
  name: "narrower",
  title: "Underordnet term",
  titleEN: "Narrower",
  description: "Trenger vi narrower? Blir mye å registrere...",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

export const domain = {
  name: "domain",
  title: "Domene",
  titleEN: "Domain",
  type: "array",
  of: [{ type: "reference", to: [{ type: "typeClass" }] }],
};

export const definedByGeoJSON = {
  name: "definedByGeoJSON",
  title: "GeoJSON",
  titleEN: "GeoJSON",
  description: "Lag et GeoJSON objekt eller lim inn en hel GeoJSON fil.",
  type: "array",
  of: [{ type: "geojsonFeatureCollection" }, { type: "geojson" }],
};

export const transferredTitleTo = {
  name: "transferredTitleTo",
  title: "Overførte tittel til",
  titleEN: "Transferred title to",
  description: "",
  type: "array",
  of: [{ type: "reference", to: [{ type: "group" }, { type: "actor" }] }],
};

export const transferredTitleFrom = {
  name: "transferredTitleFrom",
  title: "Overførte tittel fra",
  titleEN: "Transferred title from",
  description: "",
  type: "array",
  of: [{ type: "reference", to: [{ type: "group" }, { type: "actor" }] }],
};

export const transferredTitleOf = {
  name: "transferredTitleOf",
  title: "Overførte tittel",
  titleEN: "Transferred title of",
  description: "",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "madeObject" }, { type: "collection" }],
    },
  ],
};

export const concerned = {
  name: "concerned",
  title: "Omhandler",
  titleEN: "About",
  description: "Which collection(s) or object(s) is this an assessment of.",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "madeObject" }, { type: "collection" }],
    },
  ],
};

export const motivated = {
  name: "motivated",
  title: "Motiverte",
  titleEN: "Motivated",
  type: "array",
  of: [{ type: "treatment" }],
};
