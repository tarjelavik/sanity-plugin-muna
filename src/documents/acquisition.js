import { FaGifts } from "react-icons/fa";
import { editorialState, accessState, timespan, label } from "../props";

export default {
  title: "Acquisition",
  name: "acquisition",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaGifts,
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
  ],
  fields: [
    editorialState,
    accessState,
    label,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "typeClass" }],
          options: {
            filter:
              'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: { sysCat: "Akkvisisjonstype" },
          },
        },
      ],
    },
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlockReport",
    },
    timespan,
    {
      name: "transferredTitleTo",
      title: "Overførte tittel til",
      titleEN: "Transferred title to",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: "group" }, { type: "actor" }] }],
    },
    {
      name: "transferredTitleFrom",
      title: "Overførte tittel fra",
      titleEN: "Transferred title from",
      description: "",
      type: "array",
      of: [{ type: "reference", to: [{ type: "group" }, { type: "actor" }] }],
    },
    {
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
    },
    {
      name: "consistsOf",
      title: "Underakkvisisasjon",
      titleEN: "Sub acquisition",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "acquisition" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "documentedIn",
      title: "Documented in",
      titleEN: "Dokumentert i",
      type: "array",
      of: [{ type: "file" }],
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label.nor",
      published: "accessState",
    },
    prepare(selection) {
      const { type, title, published } = selection;
      const secret = published === "secret" ? "🔒" : "";

      return {
        title: title,
        subtitle: secret + type,
      };
    },
  },
};
