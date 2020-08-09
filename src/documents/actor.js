import { FaUser } from "react-icons/fa";
import { editorialState, accessState, referredToBy, labelSingleton, identifiedBy, memberOf } from "../props";
import { defaultFieldsets } from "../fieldsets";
import { timespanAsString } from "../helpers/helpers";
import { capitalize } from "lodash";

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
    memberOf,
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
      bb: 'activityStream.0.timespan.0.beginOfTheBegin',
      eb: 'activityStream.0.timespan.0.endOfTheBegin',
      date: 'activityStream.0.timespan.0.date',
      be: 'activityStream.0.timespan.0.beginOfTheEnd',
      ee: 'activityStream.0.timespan.0.endOfTheEnd',
      media: "mainRepresentation",
    },
    prepare(selection) {
      const { title, media, bb, eb, date, be, ee } = selection;
      const timespan = timespanAsString(bb, eb, date, be, ee, 'nb')
  
      return {
        title: title,
        subtitle: `${timespan ? 'Født: ' + timespan : ''}`,
        media: media,
      };
    },
  },
};
