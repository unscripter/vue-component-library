---
pageClass: custom-page-class
---

# Tab Structure

## Example :fire:

<Demo componentName="examples-tab-structure" />

## Source Code
### Library Abstruction

<SourceCode>
<<< @/node_modules/anatta-component-library/src/components/DynamicTabStructure/DynamicTabStructure.vue
</SourceCode>

## slots
``` 
default slot 
```

## props
```
props: {
    value: {
      type: Array,
      default: () => []
    }
  }
```

### Implementation
<SourceCode>
<<< @/docs/.vuepress/components/examples/tab-structure.vue
</SourceCode>