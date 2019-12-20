<template>
  <a :href="href">{{ title }}</a>
</template>

<script>
export default {
  name: "Anchor",
  props: {
    title: {
      type: String,
      default: "Default"
    },
    href: {
      type: String,
      default: "/"
    }
  },
  computed: {
    target() {
      return this.href ? this.href : "_blank";
    }
  }
};
</script>
