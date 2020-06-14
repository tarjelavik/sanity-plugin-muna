import { timespan, referredToBy, tookPlaceAt, carriedOutBy } from "../../props";
import { defaultFieldsets } from "../../fieldsets";

export default {
  title: "Measurement",
  name: "measurement",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    {
      name: "observedDimension",
      title: "Dimensjon",
      titleEN: "Dimension",
      description: "Events and activities connected to this object",
      type: "array",
      of: [{ type: "dimension" }],
    },
    timespan,
    carriedOutBy,
    referredToBy,
    tookPlaceAt,
  ],
  preview: {
    select: {
      actor: "carriedOutBy.0.actor.label",
      dimension: "observedDimension.0.hasType.label.nor",
      unit: "observedDimension.0.hasUnit",
      value: "observedDimension.0.value"
    },
    prepare(selection) {
      const { actor, dimension, unit, value } = selection;
      return {
        title: `Measurement ${actor ? 'by ' + actor : ''}`,
        subtitle: `${dimension}: ${value} ${unit || ''}`,
      };
    },
  },
};
