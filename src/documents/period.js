import { FaEmpire } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  tookPlaceAt,
} from "../props";

export default {
  title: "Period",
  name: "period",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaEmpire,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Mandatory fields for minimum registration",
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
            filterParams: { sysCat: "Hendelsestype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
    timespan,
    tookPlaceAt,
    {
      name: "media",
      title: "Media",
      titleEN: "Media",
      type: "mediaObject",
    },
    {
      name: "consistsOf",
      title: "Består av",
      titleEN: "consistsOf",
      type: "array",
      of: [{ type: "reference", to: [{ type: "period" }, { type: "event" }] }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "definingSTV",
      title: "Definert av STV",
      titleEN: "Defining STC",
      type: "spacetimeVolume",
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label.nor",
    },
    prepare(selection) {
      const { title, type } = selection;

      return {
        title: title,
        subtitle: type,
      };
    },
  },
};
