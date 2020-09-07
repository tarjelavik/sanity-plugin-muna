import { FaEmpire } from "react-icons/fa";
import {
  timespan,
  editorialState,
  accessState,
  label,
  referredToBy,
  tookPlaceAt,
} from "../props";
import { coalesceLabel } from "../helpers/helpers";

export default {
  title: "Period",
  name: "period",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "published",
    accessState: "open",
  },
  icon: FaEmpire,
  fieldsets: [
    {
      name: "state",
      title: "Status",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Basic metadata",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "timelineMedium",
      title: "Hovedbilde (brukt i tidslinke)",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "relations",
      title: "Relations to other stuff",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    label,
    {
      ...referredToBy,
      fieldset: "minimum",
    },
    {
      ...timespan,
      fieldset: "minimum",
    },
    {
      ...tookPlaceAt,
      fieldset: "minimum",
    },
    {
      name: "media",
      title: "Media",
      titleEN: "Media",
      type: "mediaObject",
      fieldset: "timelineMedium",
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
      type: "hasType.0.label",
      title: "label",
    },
    prepare(selection) {
      const { title, type } = selection;

      return {
        title: coalesceLabel(title),
        subtitle: coalesceLabel(type),
      };
    },
  },
};
