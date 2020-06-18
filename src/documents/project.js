import { FaProjectDiagram } from "react-icons/fa";

import {
  editorialState,
  accessState,
  label,
  timespan,
  referredToBy,
  identifiedBy,
} from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Project",
  name: "project",
  type: "document",
  // icon: FaProjectDiagram,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    identifiedBy,
    {
      name: "active",
      title: "Pågående?",
      titleEN: "Ongoing?",
      type: "boolean",
      fieldset: "state",
    },
    {
      name: "concerned",
      title: "Omhandler",
      titleEN: "About",
      description:
        "Which collection(s) or object(s) is this project was about.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "madeObject" }, { type: "collection" }],
        },
      ],
    },
    timespan,
    referredToBy,
    /* {
      title: 'Activity stream',
      description: 'Events and activities connected to this object',
      name: 'activityStream',
      type: 'array',
      of: [
        {type: 'measurement'}
      ],
      options: {
        editModal: 'fullscreen'
      }
    }, */
    {
      name: "consistsOf",
      title: "Underprosjekt",
      titleEN: "Sub projects",
      type: "array",
      of: [{ type: "project" }],
      options: {
        editModal: "fullscreen",
      },
    },
    {
      name: "documentedIn",
      title: "Dokumentert i",
      titleEN: "Documented in",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "file" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label.nor",
      blocks: "description.nor",
      published: "accessState",
      active: "active",
    },
    prepare(selection) {
      const { type, title, blocks, published, active } = selection;
      const block = (blocks || []).find((block) => block._type === "block");
      const secret = published === "secret" ? "🔒" : "";
      const a = active ? "Active" : "Completed";

      return {
        title: title,
        subtitle: secret + " " + a + (type || ""),
        description: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No description",
      };
    },
  },
  orderings: [
    {
      title: "Title, A-Å",
      name: "title",
      by: [{ field: "label", direction: "desc" }],
    },
    {
      title: "Title, Å-A",
      name: "title",
      by: [{ field: "label", direction: "asc" }],
    },
  ],
};
