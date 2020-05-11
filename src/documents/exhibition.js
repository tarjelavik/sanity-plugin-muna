import { FaGlasses } from "react-icons/fa";

import { editorialState, accessState, label } from "../props";

export default {
  title: "Exhibition",
  name: "exhibition",
  description: "Should be fetched from KulturNav",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaGlasses,
  fieldsets: [
    {
      name: "state",
      title: "State",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    label,
    {
      name: "creator",
      title: "Skaper",
      titleEN: "Author",
      description:
        "Registrer en eller flere aktører som har skapt dette dokumentet, gjerne med hvilken rolle de hadde.",
      type: "array",
      of: [
        {
          type: "actorInRole",
        },
      ],
    },
    {
      name: "description",
      title: "Beskrivelse",
      titleEN: "Description",
      type: "localeBlock",
    },
  ],
  preview: {
    select: {
      title: "label.nor",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title,
      };
    },
  },
};
