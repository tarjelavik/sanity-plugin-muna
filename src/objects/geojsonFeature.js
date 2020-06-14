export default {
  title: "Feature",
  name: "geojsonFeature",
  type: "object",
  fields: [
    {
      name: "geometry",
      title: "Geometri",
      titleEN: "Geometry",
      type: "geojsonFeaturePoint",
    },
    {
      name: "properties",
      title: "Egenskaper",
      titleEN: "Propterties",
      type: "geojsonProperties",
    },
  ],
  preview: {
    select: {
      type: "properties.type",
    },
    prepare(selection) {
      const { type } = selection;
      return {
        title: type || "Point",
      };
    },
  },
};
