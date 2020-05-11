import { FaTruckLoading } from "react-icons/fa";
import { timespan, editorialState, accessState, label, carriedOutBy, tookPlaceAt } from "../props";

var capitalize = require("capitalize");

export default {
  title: "Move",
  name: "move",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaTruckLoading,
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
    carriedOutBy,
    timespan,
    tookPlaceAt,
    {
      name: "moved",
      title: "Flyttet",
      titleEN: "Moved",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "madeObject" }, { type: "group" }, { type: "actor" }],
        },
      ],
    },
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlockReport",
    },
    {
      name: "movedFrom",
      title: "Flyttet fra",
      titleEN: "Moved from",
      type: "reference",
      to: [{ type: "place" }, { type: "storage" }],
    },
    {
      name: "movedTo",
      title: "Flyttet til",
      titleEN: "Moved to",
      type: "reference",
      to: [{ type: "place" }, { type: "storage" }],
    },
    {
      name: "wasMotivatedBy",
      title: "Motivert av",
      titleEN: "Motivated by",
      type: "array",
      of: [{ type: "reference", to: [{ type: "event" }] }],
    },
  ],
  preview: {
    select: {
      type: "_type",
      published: "accessState",
    },
    prepare(selection) {
      const { type, published } = selection;
      const secret = published === "secret" ? "🔒" : "";

      return {
        title: `${capitalize(type)}`,
        subtitle: secret,
      };
    },
  },
};
