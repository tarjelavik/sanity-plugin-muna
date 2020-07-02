import { FaTag } from "react-icons/fa";
import { editorialState, accessState, label, altLabel, broader, domain } from "../../props";
import { defaultFieldsets } from "../../fieldsets";
import coalescedLabel from "../../helpers/helpers";

export default {
  title: "Teksttype",
  name: "textType",
  type: "document",
  initialValue: {
    editorialState: "workingDraft",
    accessState: "secret",
  },
  icon: FaTag,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    altLabel,
    {
      name: "broader",
      title: "Overordnet term",
      titleEN: "Broader",
      type: "array",
      of: [{ type: "reference", to: [{ type: "textType" }] }],
    },
    {
      name: "activityStream",
      title: "Aktivitetsstrøm",
      titleEN: "Activity stream",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "creation" }],
    },
  ],
  preview: {
    select: {
      title: "label",
      broader: "broader.0.label.nor",
    },
    prepare(selection) {
      const { title, broader } = selection;
      return {
        title: coalescedLabel(title),
        subtitle: broader
          ? `⬆️` + broader
          : "🔝 Toppkonsept",
      };
    },
  },
};
