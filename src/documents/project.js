import { FaProjectDiagram } from "react-icons/fa";

import {
  editorialState,
  accessState,
  label,
  timespan,
  referredToBy,
} from "../props";

export default {
  title: "Project",
  name: "project",
  type: "document",
  icon: FaProjectDiagram,
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
      name: "active",
      title: "Pågående?",
      titleEN: "Ongoing?",
      type: "boolean",
      fieldset: "state",
    },
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
            filterParams: { sysCat: "Prosjekttype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
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
