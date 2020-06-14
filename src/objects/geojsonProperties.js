export default {
  title: "Properties",
  name: "geojsonProperties",
  type: "object",
  fields: [
    {
      // WIP. Should use systemcategories
      name: "type",
      title: "Type",
      titleEN: "Type",
      type: "string",
      // Initial value not supported for objects
      // validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Point", value: "Point" },
          { title: "Point of camera", value: "Point of camera" },
          { title: "Center of motif", value: "Center of motif" },
          { title: "Place", value: "Place" },
          { title: "Building", value: "Building" },
        ],
      },
    },
  ],
};
