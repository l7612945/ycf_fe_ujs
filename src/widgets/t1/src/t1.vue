<template>
  <button
    class="el-button test1"
  >
  组件01
  </button>
</template>
<style lang="scss">
  @import url("../../../sassCore/test1/test1.scss");
  .el-button{
    background: #fff;
    border: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    display: block;
    width: 100px;
    padding: 0;
  }
</style>
<script>
  export default {
    name: 't1',
    inject: {
      elFormItem: {
        default: ''
      }
    },
    // props: {
    //   type: {
    //     type: String,
    //     default: 'default'
    //   },
    //   size: String,
    //   icon: {
    //     type: String,
    //     default: ''
    //   },
    //   nativeType: {
    //     type: String,
    //     default: 'button'
    //   },
    //   loading: Boolean,
    //   disabled: Boolean,
    //   plain: Boolean,
    //   autofocus: Boolean,
    //   round: Boolean
    // },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>