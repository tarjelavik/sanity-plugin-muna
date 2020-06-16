---
id: installation
title: Installation
sidebar_label: Installation
---

***Warning!*** Muna will be unstable for some time. Fork and do you own thing or [suggest improvements!](https://github.com/tarjelavik/sanity-plugin-muna/issues) 

```bash
npm install -g @sanity/cli
sanity init
sanity install muna
# Add some other Sanity plugins
sanity install @sanity/code-input
sanity install @sanity/color-input
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
