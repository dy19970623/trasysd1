<template>
  <div id="app">
   <div id="RightBox">
     <el-tabs style="margin-left:5px "  v-model="activeName">
       <el-tab-pane label="统计分析" name="first"  :key="'first'"  ><Analysis/></el-tab-pane>
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
    top: 5px;
    right: 0px;
    width:435px;
    height:100%;
    z-index:600;
    background-color:#031a51;

  }
</style>
