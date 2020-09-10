import { GiCrackedGlass } from "react-icons/gi";
import {
  editorialState,
  accessState,
  label,
  usedGeneralTechnique,
  usedSpecificTechnique,
  usedObjectOfType,
  usedSpecificObject,
  referredToBy,
  hasIdentified,
  concerned,
  motivated,
} from "../../props";

/**
 * Report
 * A combination of E14_Condition_Assessment and E33_Linguistic_Object
 */

export default {
  title: "Report",
  name: "report",
  type: "document",
  initialValue: {
    editorialState: "draft",
    accessState: "secret",
  },
  icon: GiCrackedGlass,
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
      name: "relations",
      title: "Relations to other stuff",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "partsAndContent",
      title: "Felt relatert til deler eller innhold",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "technique",
      title: "Felt relatert til teknikk",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "documentation",
      title: "Dokumentasjon",
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
      fieldset: "minimum",
      of: [
        {
          type: "reference",
          to: [{ type: "reportType" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      ...referredToBy,
      fieldset: "minimum",
    },
    concerned,
    hasIdentified,
    motivated,
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Hendelser og aktiviteter relatert til rapporten",
      descriptionEN: "Events and activities connected to this object",
      type: "array",
      of: [
        { type: "measurement" },
        { type: "sampling" },
        { type: "treatment" },
      ],
    },
    {
      ...usedGeneralTechnique,
      fieldset: "technique",
    },
    {
      ...usedSpecificTechnique,
      fieldset: "technique",
    },
    {
      ...usedObjectOfType,
      fieldset: "technique",
    },
    {
      ...usedSpecificObject,
      fieldset: "technique",
    },
    {
      name: "documentationImage",
      title: "Documentasjonsfotografi",
      titleEN: "Documentation images",
      fieldset: "documentation",
      type: "array",
      of: [{ type: "figure" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "documentedIn",
      title: "Documented in",
      titleEN: "Dokumentert i",
      fieldset: "documentation",
      type: "array",
      of: [{ type: "file" }],
    },
    {
      name: "consistsOf",
      title: "Underrapport",
      titleEN: "Sub report",
      type: "array",
      of: [{ type: "report" }],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      type: "hasType.0.label.nor",
      title: "label.nor",
      blocks: "description.nor",
      published: "accessState",
    },
    prepare(selection) {
      const { type, title, blocks, published } = selection;
      const block = (blocks || []).find((block) => block._type === "block");
      const secret = published === "secret" ? "🔒" : "";

      return {
        title: title,
        subtitle: secret + type,
        description: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "",
      };
    },
  },
  orderings: [
    {
      title: "Tittel, A-Å",
      name: "title",
      by: [{ field: "label", direction: "desc" }],
    },
    {
      title: "Tittel, Å-A",
      name: "title",
      by: [{ field: "label", direction: "asc" }],
    },
  ],
};
