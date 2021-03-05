<template>
  <div id>
    <div id="Bike_inputBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="数据查询" name="first">数据查询</el-tab-pane>
        <el-tab-pane label="数据报告" name="second">数据报告</el-tab-pane>
      </el-tabs>
      <div>
        <Bike_Search ref="bikesearch" v-if="IsFirst"></Bike_Search>
        <report ref="report" v-else></report>
      </div>
    </div>
  </div>
</template>

<script>
import Bike_Search from "./Bike_Search";
import report from "./report";

export default {
  name: "RightBox",
  components: {Bike_Search,report},
  data() {
    return {
      activeName: 'second',
      IsFirst:false
    };
  },
  methods: {
    trans(name,a1,a2,a3){
      //console.log(a);
      let self=this;
      self.$nextTick(()=>{
        self.$refs.bikesearch.PRBicycle_OD_echart11(name,a1,a2,a3)
      })
    },
    trans2(){
      console.log("zzzzzzzzzzzzzzzzz")
    },
    handleClick(tab, event) {
      //console.log(tab, event);
      this.IsFirst=!(this.IsFirst)
      console.log(this.IsFirst)
    }
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
  #Bike_inputBox{
    position: absolute;
    top: 5px;
    right: 0px;
    width: 420px;
    height:100%;
    z-index:600;
    background-color:#031a51;
  }
</style>
