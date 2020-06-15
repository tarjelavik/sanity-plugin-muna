---
id: home
title: Muna introduction
sidebar_label: Introduction
---

Sanity use `document` as equivalent to `class`. A property can refer to another `document` or create a nested `object` on the original `document`. Objects are sadly not directly queryable and can not be referred to by other documents. **Muna** nest data for quick editorial experience for the end user. Converting Sanity data to `JSON-LD` could easily convert *objects* to *documents* and poplate a rdf triplestore for detailed querying. A conversion of the dataset using **Muna** to `rdf` should treat `document` and `object` as equals.

## Properties

Common properties are described in `src/props/index.js` as properties are reused extensivly. The same property name can still be reused in *document* or *object* for more spesific ranges (eg, `madeObject hasType objectType` vs `group hasType groupType`).

## Documents and classes

Getting the balance right between Sanity `document` and `object` is a bit tricky coming from the world of `rdf`. The reasoning behind having few `document`s and many `object`s is user friendliness. **Muna** tries to strike a balance between expressivness and useability.

### Activity stream

**Muna** use Activity stream to group events that have happened to objects, actors and other `documents`. The reason is that **Activity stream** makes for a better editing experience compared to the `CIDOC-CRM` way. Too many properties makes it hard to edit the documents. The downside is that it is necessary to dive into some menues to edit the data.

[Activity Streams 2.0](https://www.w3.org/TR/activitystreams-core/)

### Report

`Report` is a subclass of E14_Condition_Assessment and E33_Linguistic_Object. The reasoning for this is that Sanity lets us create text with objects and structured data with Protable Text. We want quality data, but also the capability for users to write details reports. 

`Treatment` is a object connected to a `report`. This is because treatment should never be undertaken without documenting the `Made Object` before modification.