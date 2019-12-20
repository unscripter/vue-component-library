<script>
export default {
  name: "dynamic-tab-structure",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.currentTab = this.value[0].title;
  },
  data() {
    return {
      currentTab: ""
    };
  },
  methods: {
    switchTab(index) {
      debugger;
      this.value.forEach(tab => {
        tab.active = false;
      });
      let tab = this.value[index];
      tab.active = true;
      this.currentTab = tab.title;
    }
  },
  computed: {
    currentTabComponent() {
      return `examples-${this.currentTab}`;
    }
  },
  render() {
    return this.$scopedSlots.default({
      tabs: this.value,
      switchTab: this.switchTab,
      removeTag: this.removeTag,
      currentTab: this.currentTab,
      currentTabComponent: this.currentTabComponent
    });
  }
};
</script>