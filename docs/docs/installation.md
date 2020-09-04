---
id: installation
title: Installation
sidebar_label: Installation
---

## [Experimental] "One-click" installation

:::danger
Combine the experimental Create functionality of sanity.io/create with the unstable Muna schema! Great fun 💥!

<button class="button"><a href="https://www.sanity.io/create?template=tarjelavik/sanity-template-muna">Create your Muna Studio</a></button> 

[Github template](https://github.com/tarjelavik/sanity-template-muna)
:::

## Install as a plugin in your existing Studio

***Warning!*** Muna will be unstable for some time. Fork and do you own thing or [suggest improvements!](https://github.com/tarjelavik/sanity-plugin-muna/issues) 

```bash
npm install -g @sanity/cli
sanity init
sanity install muna
sanity start
```

The Sanity studio will fire up on http://localhost:3333/, but without the desk structure you deserve!.

## Desk structure

Copy the content of the deskStructure folder into your Sanity studio and add this to sanity.json:

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

Finally install react-icons, since the version that Sanity uses is old.

```bash
# For the icons in deskStructure.js
npm install --save react-icons
```
