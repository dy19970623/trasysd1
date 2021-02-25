<template>
    <div class="homepage">
      <el-row >
        <el-col :span="7">
          <div  class=" grid-content">
            <div  id="main"  class="grid-table"></div>
          </div>
        </el-col>
        <el-col :span="7" :offset="10">
          <div class="grid-content ">
            <div  id="main1"  class="grid-table"></div>
          </div>
        </el-col>
      </el-row>
      <el-row >
      <el-col :span="7">
        <div class="grid-content ">
          <div  id="main2"  class="grid-table"></div>
        </div>
      </el-col>
      <el-col :span="7" :offset="10">
        <div class="grid-content ">
          <div  id="main3"  class="grid-table"></div>
        </div>
      </el-col>
      </el-row>
      <el-row >
        <el-col :span="7">
          <div class="grid-content ">
            <div  id="main4"  class="grid-table"></div>
          </div>
        </el-col>
        <el-col :span="7" :offset="10">
          <div class="grid-content ">
            <div  id="main5"  class="grid-table"></div>
          </div>
        </el-col>
      </el-row>

<!--      <div id="main" style="width:600px ; height :400px"></div>-->
      </div>

</template>

<script>
export default {
   name: "HomePage",
   methods:{
     myEcharts(){
       // 基于准备好的dom，初始化echarts实例
       var myChart = this.$echarts.init(document.getElementById('main'));

       // 指定图表的配置项和数据
       var option = {
         title: {
           text: 'ECharts 入门示例'
         },
         tooltip: {},
         legend: {
           data:['销量']
         },
         xAxis: {
           data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
         },
         yAxis: {},
         series: [{
           name: '销量',
           type: 'bar',
           data: [5, 20, 36, 10, 10, 20]
         }]
       };

       // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option);
     }
   },
  mounted() {
     this.myEcharts()
  }
}
</script>

<style scoped>

.homepage{
  position:relative;
  width: 100%;
  height: 98%;
}

.el-row {
 height: 34%;

}
.el-col {
  border-radius: 4px;
  height: 97%;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {

  border-radius: 4px;
  min-height: 36px;
}
.grid-table{
  width:100% ;
  height: 100%;
}
.grid-content{

  background:#d3dce6 ;
  width: 100%;
  height: 100%
}

</style>
