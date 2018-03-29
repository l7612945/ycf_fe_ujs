<template>
  <button :class="{'y-button': true,'is-disabled':disabled,'y-button--pill':pill}" >
      <slot></slot>
  </button>
</template>

<script>
import "./buttom.scss";

export default {
  data() {
    return {};
  },
  props: {
    type: String,
    size: String,
    pill: Boolean,
    disabled: {
      type: Boolean
    }
  },
  mounted() {
    console.log(this.disabled);
  }
};
</script>
