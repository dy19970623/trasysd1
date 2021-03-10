<template>
  <div id>
    <div id="Sub_inputBox">
      <StaAnalysis></StaAnalysis>
    </div>
  </div>
</template>

<script>
import StaAnalysis from "./StaAnalysis";
//import FlowQuery from "./FlowQuery"

export default {
  name: "RightBox",
  components: {
    StaAnalysis,
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<style>
.el-tabs__content{
  display: none;
}
.el-tabs__item {
  color: #f5f7fa;
}
#Sub_inputBox{
  position: absolute;
  width: 28%;
  height:100%;
  z-index:600;
  background-color: rgba(0,0,0,0.7);
  opacity: 95%;
}

</style>
