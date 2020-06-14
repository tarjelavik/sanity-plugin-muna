import { FaUser } from "react-icons/fa";

import { editorialState, accessState, referredToBy, labelSingleton, identifiedBy } from "../props";
import { defaultFieldsets } from "../fieldsets";

export default {
  title: "Actor",
  name: "actor",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaUser,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    labelSingleton,
    identifiedBy,
    {
      name: "hasType",
      title: "Klassifisert som",
      titleEN: "Classified as",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "actorType" }],
        },
      ],
    },
    {
      name: "mainRepresentation",
      title: "Hovedbilde",
      titleEN: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    referredToBy,
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description:
        'En aktivitetsstrøm samler alle hendelser knyttet til denne aktøren. Fødsel og død er "inline" til personen, mens andre aktiviteter som ekteskap er egne dokument.',
      descriptionEN: "Add all known events this smuck did",
      type: "array",
      of: [
        { type: "birth" },
        { type: "reference", to: [{ type: "activity" }] },
        { type: "move" },
        { type: "joining" },
        { type: "leaving" },
        { type: "death" },
      ],
      options: {
        editModal: "fullscreen",
      },
    },
  ],
  preview: {
    select: {
      title: "label",
      media: "mainRepresentation",
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title: title,
        media: media,
      };
    },
  },
};
