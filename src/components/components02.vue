<template>
 <div class="info2">
   {{info2}}
 </div>
</template>
<style lang="scss">
.info2 {
  height: 100px;
  line-height: 100px;
  color: #666;
  font-size: 20px;
  width: 600px;
  margin: 0 auto;

}
</style>
<script>

export default {
  name: "components02",
  data() {
    return {};
  },
  props: ['info2'],
  methods: {},
  components: {
   
  }
};
</script>