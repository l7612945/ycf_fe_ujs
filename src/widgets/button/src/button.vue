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
    :autofocus="autofocus"
    @focus="handleFocus" 
    @click="handleClick"
    @blur="handleBlur"
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
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    }
  }
};
</script>
