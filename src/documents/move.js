import { FaTruckLoading } from "react-icons/fa";
import { timespan, editorialState, accessState, label, carriedOutBy, tookPlaceAt, referredToBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

var capitalize = require("capitalize");

export default {
  title: "Move",
  name: "move",
  type: "document",
  initialValue: {
    editorialState: "draft",
    accessState: "secret",
  },
  icon: FaTruckLoading,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    carriedOutBy,
    timespan,
    tookPlaceAt,
    referredToBy,
    {
      name: "moved",
      title: "Flyttet",
      titleEN: "Moved",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "madeObject" }, 
            { type: "exhibition" }, 
            { type: "group" }, 
            { type: "actor" }
          ],
        },
      ],
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
