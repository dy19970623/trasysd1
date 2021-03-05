/**
  * 邹瑞萌
  * 2021年2月28日
  *
 */
<template>
<div id="TaxiDistribution">
  <div ref="map" id="Taxi_mainMap"></div>
</div>
</template>
<script>
import echarts from 'echarts'
//import AMapEcharts from 'amap-echarts';
import TaxiDis from '../../assets/js/TaxiDistribution/TaxiDistribution' // 需要在地图上绘制的数据集

export default {
  name: 'TaxiGrid',
  data() {
    return {
    };
  },
  computed: {},
  mounted () {
    this.getbmap();
  },
  methods: {
    getbmap() {
      var Taxi_Distribution_myChart = echarts.init(this.$refs.map);

      var mapData = {
        title:'鸟巢游客分布图',
        mapColor:'#5c9ac1',   //地图填充颜色
        borderColor:'#5278a7',//地图边框颜色
        shadowColor: '#5174a4', //阴影颜色
        shadowBlur: 1, //地图阴影
        setIntervalTime:3000,  //默认刷新时间3秒
      };
      /******设置Echarts参数******/
      var Taxi_Distribution_option={
        baseOption : {
        	timeline: {
		        axisType: 'category',
		        autoPlay: true,
		        bottom:'50px',
            playInterval: 1000,
            lineStyle:{
        	    color:'#6495ed',
        	    shadowColor:'#a9a9a9',
        	    labelColor:'#c0c0c0'
            },
            label:{
        	    normal:{color:"#fffdd0"},
        	    emphasis:{color:"#fffdd0"}
            },
            itemStyle:{
        	    normal:{
             	  color:'#00008b',
            	  shadowColor:'#a9a9a9',
              },
              emphasis:{
                color:'#ffebcd'
          	  }
            },
            checkpointStyle:{
        	    color:'#6495ed',
        	    borderColor:'#ffebcd',
        	    borderWidth:1
            },
            controlStyle:{
        	    normal:{
        		    color:'#6495ed',
        		    borderColor:'#6495ed'
        	    },
        	    emphasis:{
        		    color:'#4b0082',
        		    borderColor:'#ffebcd'
        	    }
            },
            data: [
               		'7:00','7:15','7:30','7:45',
               		'8:00','8:15','8:30','8:45'
               	]
          },
          //高德地图参数
          amap: {
             // 高德地图中心经纬度
                center: [116.4, 39.95],
                // 高德地图缩放
                /*zoom: 45,*/
                zoom:11,
                // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
                scale:false,
                //在绘制地图时是否应绘制echarts图层移动。默认为true。
                //如果为false，则只会在map`moveend`之后重新渲染。
                //如果数据很大，最好将此选项设置为false。
                renderOnMoving:false,
                // 高德地图的自定义样式
                mapStyle: 'amap://styles/af097bca6ec095a38da9b0e9b695ad29',
          },
          roam: true,
          series: [{
                  type: 'scatter',
                  coordinateSystem: 'amap',
                  progressive:100000,
                  progressiveThreshold:100000,
                  symbolSize: function(val) {
                    return 4;
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                      brushType: 'stroke'
                    },
                  hoverAnimation: false,
                  itemStyle: {
                      normal: {
                        color: '#ffa500'
                    }
                  },
                  zlevel: 3
          }],
        },
        options:[
          {series: [{data: TaxiDis.Taxi_data1}]},
          {series: [{data: TaxiDis.Taxi_data2}]},
          {series: [{data: TaxiDis.Taxi_data3}]},
          {series: [{data: TaxiDis.Taxi_data4}]},
          {series: [{data: TaxiDis.Taxi_data5}]},
          {series: [{data: TaxiDis.Taxi_data6}]},
          {series: [{data: TaxiDis.Taxi_data7}]},
          {series: [{data: TaxiDis.Taxi_data8}]},
        ]
      }
      //设置echarts参数
      Taxi_Distribution_myChart.setOption(Taxi_Distribution_option);
      var amap = Taxi_Distribution_myChart.getModel().getComponent('amap').getAMap();
      amap.setMinZoom(11);
      // 设置最大/小缩放值
      amap.setMaxZoom(14);
    }
  },
}
</script>

<style>
#Taxi_mainMap {
   height: 1000px;
}

</style>
