<template>
  <div class="marginTop" v-focus-trap="escapeModal">
    <v-modal />
  </div>
</template>

<script>
export default {
  methods: {
    escapeModal() {
      console.log("close was triggered");
      console.log("now get focus back to initiating element");
      let elm = document.querySelector(".tabs-backgrouund");
      console.log("elm", elm);
      if (elm) {
        elm.focus();
      }
    }
  }
};
</script>

<style>
.marginTop {
  margin: 30px auto;
}
</style>