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
import 'echarts/extension/bmap/bmap'
//import TaxiDis from '../../assets/js/TaxiDistribution/TaxiDistribution' // 需要在地图上绘制的数据集
import {request} from "../../network/request" // 需要在地图上绘制的数据集

export default {
  //name: 'TaxiGrid',
  data() {
    return {
      mapStyle: {
         styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#0f0815'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#0f0815'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#999999'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': 'rgba(0,0,0,0)'
                }
            }]
      },
      Taxi_data1: [],
      Taxi_data2: [],
      Taxi_data3: [],
      Taxi_data4: [],
      Taxi_data5: [],
      Taxi_data6: [],
      Taxi_data7: [],
      Taxi_data8: []
    };
  },
  computed: {},
  mounted () {
     //后台获取数据
    request({
      url:'/Taxi/getData',
      method:'get'
    }).then(res=>{
      this.getdata1(res.data);
    }).then(res=>{
      setTimeout(() =>{
        console.log("success")
        this.getbmap();
      },10000);
    }).catch(err=>{
      console.log(err);
    })

    //this.getbmap();
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
          bmap: {
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
                //mapStyle: 'amap://styles/af097bca6ec095a38da9b0e9b695ad29',
                mapStyle: {

                }
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
          {series: [{data: this.Taxi_data1}]},
          {series: [{data: this.Taxi_data2}]},
          {series: [{data: this.Taxi_data3}]},
          {series: [{data: this.Taxi_data4}]},
          {series: [{data: this.Taxi_data5}]},
          {series: [{data: this.Taxi_data6}]},
          {series: [{data: this.Taxi_data7}]},
          {series: [{data: this.Taxi_data8}]},
        ]
      }
      console.log(Taxi_Distribution_option.options)
      //设置echarts参数
      Taxi_Distribution_myChart.setOption(Taxi_Distribution_option);
      let bmap = Taxi_Distribution_myChart.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new BMap.MapTypeControl())
      bmap.setMapStyle(this.mapStyle)
      //var amap = Taxi_Distribution_myChart.getModel().getComponent('amap').getAMap();
      //amap.setMinZoom(11);
      // 设置最大/小缩放值
      //amap.setMaxZoom(14);
      //console.log(Taxi_Distribution_option.options)
    },
    getdata1(data) {
      //console.log(data)
      /******获取数据动态分布*****/
      var Taxi_Distribution_data=[]; //储存每个ID最后是个时间节点的数据
      var Taxi_Distribution_data1=[]; //储存7点-7点15出租车分布
      var Taxi_Distribution_data2=[]; //储存7点15-7点30出租车分布
      var Taxi_Distribution_data3=[]; //储存7点30-7点45出租车分布
      var Taxi_Distribution_data4=[]; //储存7点45-8点出租车分布
      var Taxi_Distribution_data5=[]; //储存8点-8点15出租车分布
      var Taxi_Distribution_data6=[]; //储存8点15-8点30出租车分布
      var Taxi_Distribution_data7=[]; //储存8点30-8点45出租车分布
      var Taxi_Distribution_data8=[]; //储存8点45-9点出租车分布

      function Taxi_getData(e){

        for (var i=1;i<e.msg.length;i++) {
          if(e.msg[i-1].ID!=e.msg[i].ID)//获取每个id最后一条数据
          {
            Taxi_Distribution_data.push(e.msg[i]);
          }

        }
        for (var j = 0; j < Taxi_Distribution_data.length; j++) {
          var taxiTime =Taxi_Distribution_data[j].DATE;//获取时间用来以每15分钟分组
          var timeLevel = parseInt(taxiTime.substring(8,14)); //获取8-14位进行比较分组
          if (timeLevel>=70000&&timeLevel<71500) { //7：00-7：15
            Taxi_Distribution_data1.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=71500&&timeLevel<73000) {//7：15-7：30
            Taxi_Distribution_data2.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=73000&&timeLevel<74500) {//7：30-7：45
            Taxi_Distribution_data3.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=74500&&timeLevel<80000) {//7：45-8：00
            Taxi_Distribution_data4.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=80000&&timeLevel<81500) {//8：00-8：15
            Taxi_Distribution_data5.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=81500&&timeLevel<83000) {//8：15-8：30
            Taxi_Distribution_data6.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=83000&&timeLevel<84500) {//8：30-8：45
            Taxi_Distribution_data7.push(Taxi_Distribution_data[j]);
          }
          else if (timeLevel>=84500&&timeLevel<90000) {//8：45-9：00
            Taxi_Distribution_data8.push(Taxi_Distribution_data[j]);
          }

        }
      }
      /**************拼接数据 并返回坐标数组*************/
      var converData = function (data) {
        var res = [];
        var val=[];
        for (var i = 0; i < data.length; i++) { //遍历获取的所有数据
          val.push([data[i].LNG,data[i].LAT,50]) //赋值经纬度
          res.push({
            value: val[i]
          });
        };
        return res;
      };

      Taxi_getData(data);

      this.Taxi_data1 = converData(Taxi_Distribution_data1)
      this.Taxi_data2 = converData(Taxi_Distribution_data2)
      this.Taxi_data3 = converData(Taxi_Distribution_data3)
      this.Taxi_data4 = converData(Taxi_Distribution_data4)
      this.Taxi_data5 = converData(Taxi_Distribution_data5)
      this.Taxi_data6 = converData(Taxi_Distribution_data6)
      this.Taxi_data7 = converData(Taxi_Distribution_data7)
      this.Taxi_data8 = converData(Taxi_Distribution_data8)

      //console.log(this.Taxi_data1)
    }
  }

  }

</script>

<style>
#Taxi_mainMap {
   height: 1000px;
}

</style>
