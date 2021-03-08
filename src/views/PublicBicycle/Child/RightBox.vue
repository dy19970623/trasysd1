<template>
  <div id>
    <div id="Bike_inputBox">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="数据查询" name="first">数据查询</el-tab-pane>
        <el-tab-pane label="锁位分析" name="second">锁位分析</el-tab-pane>
      </el-tabs>
      <div>
        <Bike_Search ref="bikesearch" v-if="IsFirst"></Bike_Search>
        <lockAnalysis1
          ref="lockanalysis1"
          :data1="chart21data"
          :data2="chart22data"
          :map="map"
          :mapgroup="mapGroup"
          :siteName="siteName"
          :numberGroup="numGroup"
          v-else></lockAnalysis1>
      </div>
    </div>
  </div>
</template>

<script>
import Bike_Search from "./Bike_Search";
import lockAnalysis1 from "./lockAnalysis";


export default {
  name: "RightBox",
  components: {Bike_Search,lockAnalysis1},
  data() {
    return {
      activeName: 'first',
      IsFirst:true,
      chart21data:'',
      chart22data:'',
      map:'',
      mapGroup:'',
      siteName:'',
      numGroup:''
    };
  },
  methods: {
    trans(name,a1,a2,a3){
      //console.log(a);
      let self=this;
      self.$refs.bikesearch.PRBicycle_OD_echart11(name,a1,a2,a3)

    },
    trans2(data1){
      let self=this;
      self.chart21data=data1
    },
    trans3(data2){
      let self=this;
      self.chart22data=data2
    },
    transmap(map,group,name1,num1){
      let self=this;
      this.map=map
      this.mapGroup=group
      this.siteName=name1
      this.numGroup=num1
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
    top: 0.1%;
    left: 0px;
    width: 28%;
    height:100%;
    z-index:600;
    background-color:#08080D;
    opacity: 0.95;
  }
</style>
