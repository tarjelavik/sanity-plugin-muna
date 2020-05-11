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
} from "../../props";

export default {
  title: "Report",
  name: "report",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: GiCrackedGlass,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "minimum",
      title: "Minimumsregistrering",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "documentation",
      title: "Documentation",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "technique",
      title: "Technique",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    label,
    {
      name: "concerned",
      title: "Omhandler",
      titleEN: "About",
      description: "Which collection(s) or object(s) is this an assessment of.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "madeObject" }, { type: "collection" }],
        },
      ],
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
            filterParams: { sysCat: "Rapporttype" },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    referredToBy,
    {
      name: "conditionAssignment",
      title: "Tilstandsvurdering",
      titleEN: "Condition assignment",
      type: "array",
      of: [{ type: "valueSlider" }],
    },
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
    usedGeneralTechnique,
    usedSpecificTechnique,
    usedObjectOfType,
    usedSpecificObject,
    {
      name: "motivated",
      title: "Motiverte",
      titleEN: "Motivated",
      type: "array",
      of: [{ type: "treatment" }],
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
