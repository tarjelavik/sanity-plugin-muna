import { label } from "../props";
import { defaultFieldsets } from "../fieldsets";
import { coalesceLabel } from "../helpers/helpers";

export default {
  title: "Feature Collection",
  name: "geojsonFeatureCollection",
  type: "object",
  fieldsets: defaultFieldsets,
  fields: [
    // Foreign member not in the GeoJSON schema
    {    
      name: "label",
      title: "Tittel",
      titleEN: "Title",
      description: "",
      descriptionEN: "",
      fieldset: "minimum",
      type: "localeString",
    },
    {
      name: "features",
      title: "Features",
      titleEN: "Features",
      type: "array",
      of: [{ type: "geojsonFeature" }],
    },
  ],
  preview: {
    select: {
      title: 'label',
      types: 'features'
    },
    prepare (selection) {
      function pickTypes(arr) {
        if (!arr && !arr.properties && !arr.properties[0].type) { return }
        const result = arr.map(x => {return x.properties.type}).filter(Boolean).join(", ")
        return result
      }

      const {title, types} = selection
      const type = types ? pickTypes(types) : ""
      const label = coalesceLabel(title)

      return {
        title: label,
        subtitle: type
      }
    }
  }
};
