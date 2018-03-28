<template>
  <div class="y-input" 
    :class="[
      inputSize ? 'y-input--' + inputSize : ''
    ]">
    <template>
      <input 
        type="text"
        class="y-input__inner"
        v-bind="$props"
        v-model:value="currentValue"
        @blur="handleBlur"
        v-bind:class='{"is-error":status=="error"}'
      >
    </template>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import './input.scss';
  export default {
    name: 'y-input',
    data() {
      return {
        currentValue: this.value,
        prefixOffset: null,
        suffixOffset: null,
        hovering: false,
        focused: false
      };
    },
    props: {
      value: {
        type:  [String, Number],
        default: ''
      },
      status: {
        type:  [String],
        default: 'primary'
      },
      placeholder: String,
      size: String,
      name: String,
      form: String,
      id: String,
      maxlength: Number,
      minlength: Number,
      readonly: Boolean,
      autofocus: Boolean,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      inputSize() {
        return this.size;
      }
    },
    mounted() {
     
    },
    methods: {
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', this.currentValue);
      }
    }
  };
</script>