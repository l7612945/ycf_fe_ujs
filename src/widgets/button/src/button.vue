<template>
  <button :class="[
    'y-button',
    `y-button--${type} y-button--${size}`,
    {
      'is-pill':pill,
      'is-disabled': disabled
    }
  ]" 
    :type="nativeType"
  >
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
    type: {
      type: String,
      default: "defalut"
    },
    size: {
      type: String,
      default: "medium"
    },
    pill: Boolean,
    disabled: {
      type: Boolean
    },
    nativeType: {
      type: String,
      defalut: "button"
    }
  },
  mounted() {
    console.log(this.disabled);
  }
};
</script>
