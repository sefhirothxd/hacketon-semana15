<template>
  <button
    @click="buttonClick"
    class="bg-transparent border-redHeader text-redHeader font-semibold hover:text-white py-2 px-2 border bg-white hover:bg-redHeader rounded outline-none"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ExButton",

  props: {},

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    }
  }
};
</script>
