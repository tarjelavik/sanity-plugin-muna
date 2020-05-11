import { FaTruckLoading } from "react-icons/fa";
import { timespan, editorialState, accessState, referredToBy } from "../props";

var capitalize = require("capitalize");

export default {
  title: "Relocation",
  name: "relocation",
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
    timespan,
    {
      name: "movedFrom",
      title: "Flyttet fra",
      titleEN: "Moved from",
      type: "reference",
      to: [{ type: "place" }],
    },
    {
      name: "movedTo",
      title: "Flyttet til",
      titleEN: "Moved to",
      type: "reference",
      to: [{ type: "place" }],
    },
    {
      name: "tookPlaceAt",
      title: "Tok sted ved",
      titleEN: "Took place at",
      description: "Det generelle området eller stedet dette skjedde",
      type: "array",
      of: [{ type: "reference", to: [{ type: "place" }] }],
    },
    {
      name: "moved",
      title: "Flyttet",
      titleEN: "Moved",
      type: "array",
      of: [{ type: "reference", to: [{ type: "group" }, { type: "actor" }] }],
    },
    referredToBy,
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
