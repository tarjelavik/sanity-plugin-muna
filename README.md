# Muna - Sanity schema

**Muna** or *memory* in Norse is a schema plugin for [Sanity](https://sanity.io) that enables detailed descriptions of cultural heritage objects and knowledge about their contexts. Muna is based on [CIDOC-CRM](http://www.cidoc-crm.org/) and [linked.art](https://linked.art).

```
sanity init
sanity install muna
sanity start
```

* [ ] Add documentation
* [ ] Add deskStructure.js example

## GROQ

Muna is rather huge, so there is a lot that could be queried. More examples will follow.

### Made Object 
`madeObject` is the main type in Muna, get some.

```
*[_type == "madeObject" 
  && accessState == "open" 
  && !references ]
  | order(preferredIdentifier desc)
  {
    ..., 
    hasType[]->{ _id, label }
  }
```

# Example

See example of Muna at [Sælen-samlingen](https://saelen.family). 

