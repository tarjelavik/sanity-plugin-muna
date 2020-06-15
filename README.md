# Muna - Sanity schema

**Muna** or *remember* in norse is a schema plugin for [Sanity](https://sanity.io) that enables detailed descriptions of cultural heritage objects and knowledge about their contexts. Muna is inspired by [CIDOC-CRM](http://www.cidoc-crm.org/) and [linked.art](https://linked.art). The goal is to enable anyone to describe objects without a costly application or infrastructure.

Muna tries to combine the expressiveness of CIDOC-CRM and the customizable editor Sanity. Objects can connected to events, actors, reports and loads more. If you have a good knowledge of CIDOC-CRM and is willing to try a rather untested schema here is the way to get started!

***Warning!*** Muna will be unstable for some time. Fork and do you own thing or [suggest improvements!](https://github.com/tarjelavik/sanity-plugin-muna/issues) 

## Documentation

Visit [muna-docs.vercel.app](https://muna-docs.vercel.app) for documentation.

## Install

```bash
npm install -g @sanity/cli
sanity init
sanity install muna
sanity start
```

The Sanity studio will fire up on `http://localhost:3333/`, but without the desk structure you deserve ;-).

Copy the content of the `deskStructure` folder into your Sanity studio and add this to `sanity.json`:

```json
  ...
  "parts": [
    {
      "name": "part:@sanity/desk-tool/structure",
      "path": "./deskStructure.js"
    },
  ]
  ...
```

# Example

See an older version of Muna in action at [Sælen-samlingen](https://saelen.family). 

