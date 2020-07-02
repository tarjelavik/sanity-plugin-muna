import { FaEmpire } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  tookPlaceAt,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

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
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
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
