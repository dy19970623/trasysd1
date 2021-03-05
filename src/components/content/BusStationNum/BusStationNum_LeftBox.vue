<template>
  <div id="left">
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {
  },
  methods: {
    getLeftBox(data){
      let that = this//把this赋给变量that
         that.$emit('importClick', data)//用that.$emit即可解决传值问题         
      }
  }
}
</script>

<style>
#left{
    float:right;
    position: absolute;
    left: 7px;
    height: 790px;
    width: 20%;
    padding-top:5px;
    padding-left: 10px;
    padding-bottom:5px;
    z-index: 600;
    background-color:rgba(1,19,66,0.6);
}
</style>
