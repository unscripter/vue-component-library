<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
      amount: 1
    };
  },
  methods: {
    increment() {
      this.count += this.amount;
    },
    decrement() {
      this.count -= this.amount;
    },
    reset() {
      this.count = 0;
    }
  },
  render() {
    return this.$scopedSlots.default({
      increment: this.increment,
      decrement: this.decrement,
      reset: this.reset,
      count: this.count,
      amount: this.amount
    });
  }
};
</script>