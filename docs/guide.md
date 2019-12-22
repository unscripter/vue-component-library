---
title: Getting started with anatta component library
meta:
    - name: Anatta Design
      content: ecom business organization
    - name: Component Library
      content: Anatta design vue component library
---

# Introduction :rocket:
::: tip
<b>Anatta Design Component Library is one and only place to look for developement process</b>
:::
Anatta design common vue component library. Working with agency like anatta design should be a best experience and to accomplish those needs, we have this platform to get collaboration from every developer. 

# Getting Started
Too get started working with this platform, there are some basic prerequisite.
<ul>
  <li><a href="https://vuejs.org/" target="_blank">Basic knowledge of VueJS</a></li>
  <li><a href="https://vuejs.org/v2/api/#component" target="_blank">How Components work in VueJS</a></li>
</ul>

::: warning
<b>Let's put you on :fire: <a href="/vue-component-library/components/" class="anchor3">Components</a> </b>
:::

# Directory structure Docs :book:

```
├── README.md
├── deploy.sh
├── docs
│   ├── README.md
│   ├── components
│   │   ├── README.md
│   │   ├── base-anchor.md
│   │   ├── base-component.md
│   │   ├── counter.md
│   │   ├── input-tags.md
│   │   ├── modal.md
│   │   └── tab-structure.md
│   └── guide.md
├── package.json
└── yarn.lock
```
# Directory structure Components :book:
```
├── README.md
├── babel.config.js
├── jest.config.js
├── main.js
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── component.png
│   │   └── components.png
│   ├── components
│   │   ├── Anchor
│   │   │   ├── Anchor.spec.js
│   │   │   ├── Anchor.vue
│   │   │   └── index.js
│   │   ├── Counter
│   │   │   ├── Counter.spec.js
│   │   │   ├── Counter.vue
│   │   │   └── index.js
│   │   ├── DynamicTabStructure
│   │   │   ├── DynamicTabStructure.vue
│   │   │   └── index.js
│   │   ├── FunctionalComponent
│   │   │   ├── FunctionalComponent.spec.ts
│   │   │   ├── FunctionalComponent.vue
│   │   │   └── index.js
│   │   ├── InputTags
│   │   │   ├── InputTags.spec.js
│   │   │   ├── InputTags.vue
│   │   │   └── index.js
│   │   ├── Modal
│   │   │   ├── Modal.spec.js
│   │   │   ├── Modal.vue
│   │   │   └── index.js
│   │   ├── StandardComponent
│   │   │   ├── StandardComponent.ts
│   │   │   ├── StandardComponent.vue
│   │   │   └── index.js
│   │   └── index.js
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
└── tsconfig.json
```

<style scoped>
p {
  font-size: 18px;
}
ul {
  list-style: none;
  color: #42b983;
  font-size: 20px;
}
.anchor3 {
  color: #42b983 !important;
  font-size: 20px;
}
</style>
