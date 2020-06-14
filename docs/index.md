# Muna Documentation

Sanity use `Document` as equivalent to `Class`. A property can refer to another `Document` or create a nested `Object` on the original `Document`. `Objects` are sadly not directly queryable. Muna tries to nest data for quick editorial experience for the end user. Converting Sanity data to `JSON-LD` could easily contert objects to documents and poplate a rdf triplestore for detailed querying. The drawback is that object can not be referred to by other documents.

## Documents / Classes

### Activity stream

[Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/)

### Report

`Report` is a subclass of E14_Condition_Assessment and E33_Linguistic_Object. The reasoning for this is that Sanity lets us create text with objects and structured data with Protable Text. We want quality data, but also the capability for users to write details reports. 

`Treatment` is a object connected to a `report`. This is because treatment should never be undertaken without documenting the `Made Object` before modification.