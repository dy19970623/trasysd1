<!--创建日期：2021.3.3-->
<!--姓名：高翔森-->
<!--功能：组件-->
<template>
  <div id="box">
    <div id="RightBox" >
      <el-tabs style="height: 100% " v-model="activeName">
        <el-tab-pane label=" 统计分析" name="first" style="left:5%" :key="'first'"  ><Analysis/></el-tab-pane>
        <el-tab-pane label="停车场信息管理" name="second" :key="'second'"><Manage/> </el-tab-pane>
        <el-tab-pane label="停车诱导" name="third"  :key="'third'"><Guide/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Analysis from "./Analysis";
  import Manage from "./Manage";
  import Guide from "./Guide";
  export default {
    name: "RightBox",
    data(){
      return {
        activeName:'first',
      }
    },
    components:{
      Analysis,
      Manage,
      Guide
    },
    mounted() {

    },
    methods:{


    }


  }
</script>

<style>
  .el-tabs__item {
    color: #f5f7fa;
  }
  #RightBox{
    position: absolute;
    float: left;
    top:0;
    left:0;
    width:28%;
    height:100%;
    z-index:600;
    /*background-color:#031a51;*/
    background-color: rgba(0,0,0,0.7)
  }

  #RightBox .el-tabs__header {
    position: relative;
    padding-top: 3%;
    /*margin: 0 0 15px;*/
    margin: 0;
  }
  #RightBox .el-tabs__item{
    font-size: 20px;
  }

  #RightBox .el-tabs__content {
    overflow: hidden;
    position: relative;
    height: 92%;
  }

  #RightBox .el-tab-pane{
    width:100%;
    height: 100%;
  }
  #RightBox .el-tabs__nav{
    float: inherit;
  }
  #RightBox .el-tabs__active-bar{
    float: inherit;
    height: 0px;
}
  .el-main{
    overflow: hidden;
  }
</style>
