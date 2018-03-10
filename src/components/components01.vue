<template>
 <div class="info1">
   {{info1}}
 </div>
</template>
<style lang="scss">
.info1 {
  height: 100px;
  line-height: 100px;
  color: #409eff;
  font-size: 20px;
  width: 600px;
  margin: 0 auto;

}
</style>
<script>

export default {
  name: "components01",
  data() {
    return {};
  },
  props: ['info1'],
  methods: {},
  components: {
   
  }
};
</script>