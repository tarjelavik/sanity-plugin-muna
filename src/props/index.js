import { rights as rightsVocab } from "../vocabularies/defaultVocabularies";

const editorialState = {
  name: "editorialState",
  title: "Redaksjonell status",
  titleEN: "Editorial state",
  type: "string",
  fieldset: "state",
  validation: (Rule) => Rule.required(),
  options: {
    list: [
      { title: "Utkast", value: "workingDraft" },
      { title: "Trenger gjennomgang", value: "review" },
      { title: "Publisert", value: "published" },
    ],
    layout: "radio",
    direction: "horizontal",
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

const mainManifest = {
  title: "Hovedmanifest",
  titleEN: "Main manifest",
  description:
    "Hovedmanifestet til objektet, for eksempel: https://digi.ub.uni-heidelberg.de/diglit/iiif/cpgraec132/manifest.json. Det kan også være en lenke til en sekvens eller et utvalg. For eksempel: https://digi.ub.uni-heidelberg.de/diglit/iiif/cpgraec132/range/r2",
  descriptionEN: "The main manifest of this object",
  fieldset: "representation",
  name: "mainManifest",
  type: "url",
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

const title = {
  name: "title",
  title: "Titler",
  titleEN: "Titles",
  description: "Legg til alternative titler eller titler på andre språk",
  descriptionEN: "Add all known titles",
  fieldset: "minimum",
  type: "array",
  of: [{ type: "name" }],
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

const rights = {
  name: "rights",
  title: "Rettigheter og lisensiering",
  titleEN: "Rights",
  description: "Velg den korrekt lisensen eller rettighetserklæringen.",
  descriptionEN: "Choose the correct lisense or mark",
  fieldset: "minimum",
  type: "string",
  options: {
    list: rightsVocab,
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
    { type: "reference", to: [{ type: "writing" }] },
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
      to: [{ type: "madeObject" }, { type: "actor" }, { type: "group" }],
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

const identifiedBy = {
  name: "identifiedBy",
  title: "Identifikator",
  titleEN: "Identifier",
  description: "Legg til identifikator",
  descriptionEN: "Add all known identifiers",
  fieldset: "additionalInformation",
  type: "array",
  of: [{ type: "identifier" }],
  options: {
    editModal: "dialog",
  },
};

const isSubjectOf = {
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
};

const depicts = {
  name: "depicts",
  title: "Avbilder",
  titleEN: "Depicts",
  type: "array",
  fieldset: "visualObject",
  of: [
    {
      type: "reference",
      to: [
        { type: "madeObject" },
        { type: "actor" },
        { type: "group" },
        { type: "typeClass" },
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
        { type: "typeClass" },
      ],
    },
  ],
};

const showsVisualObject = {
  name: "showsVisualObject",
  title: "Viser merke eller bilde",
  titleEN: "Shown visual item",
  type: "array",
  fieldset: "visualObject",
  of: [{ type: "visualItem" }],
};

const carries = {
  name: "carries",
  title: "Bærer verk",
  titleEN: "Carries work",
  type: "array",
  fieldset: "linguisticObject",
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
  fieldset: "physicalDescription",
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
      to: [{ type: "typeClass" }],
      options: {
        filter:
          'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
        filterParams: { sysCat: "Teknikk" },
      },
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
      to: [{ type: "typeClass" }],
      options: {
        filter:
          'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
        filterParams: { sysCat: "Objekt-/verkstype" },
      },
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

const timespan = {
  name: "timespan",
  title: "Tidsspenn",
  titleEN: "Timespan",
  type: "array",
  of: [{ type: "timespan" }],
  options: [
    {
      editModal: "fullscreen",
    },
  ],
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

const tookPlaceAt = {
  name: "tookPlaceAt",
  title: "Skjedde ved",
  titleEN: "Took place at",
  type: "array",
  of: [{ type: "reference", to: [{ type: "place" }] }],
};

const altLabel = {
  name: "altLabel",
  title: "Alternativt navn",
  titleEN: "Alternative label",
  type: "localeString",
};

export {
  editorialState,
  accessState,
  mainRepresentation,
  mainManifest,
  preferredIdentifier,
  label,
  title,
  hasType,
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
  represents,
  showsVisualObject,
  carries,
  measurement,
  consistsOf,
  usedGeneralTechnique,
  usedSpecificTechnique,
  usedObjectOfType,
  usedSpecificObject,
  timespan,
  carriedOutBy,
  tookPlaceAt,
  altLabel,
};
