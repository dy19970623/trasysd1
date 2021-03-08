/**
  * 邹瑞萌
  * 2021年2月25日
  * 
 */
<template>
<div id="TaxiODLine">
  <div ref="map" class="map"></div></div>
</template>
<script>
import echarts from 'echarts' 
import 'echarts-gl'
import 'echarts/extension/bmap/bmap'
import TaxiODLine from '../../assets/js/TaxiODLine/TaxiODLine'
//import ODData from '../assets/js/TaxiODLine/ODData'

export default {
  data() {
    return {
      taxi_ODData:TaxiODLine.taxi_ODData,
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
    };
  },
  computed: {},
  mounted () { 
    this.getbmap();
  },
  methods: {
    getbmap() {
      let option= { 
        bmap: { 
          // 百度地图中心经纬度
          center: [116.4, 39.95],
          // 百度地图缩放
          zoom: 12,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: {    
          },
          
          
			  },
        
        title : {
          text: '',
          left: 'center',
          top: 26,
          textStyle : {
              color:'white',
                   fontSize: 24,
          }
        },
        roam: true,   //是否开启鼠标缩放和平移漫游
        title: {
          text: '出租车乘客OD图',
          right: '20px',
          top: 26,
          textStyle: {
            fontSize: 30,
            color: '#feb64d'
          }
        },
        // 地图飞线样式选项
        //geo: geo,
        series: [
        {
          name:'Taxi',  //名称
          type: 'lines',    //线图
          coordinateSystem: 'bmap',
          progressive:1e6,
          //progressiveThreshold:100000,
          blendMode: 'lighter',
          hoverAnimation: false,
          //zlevel: 3,
          effect: {
            show: true,
            constantSpeed: 10,
            //period: 3, //箭头指向速度，值越小速度越快
            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
            trailWidth: 1,
            trailOpacity: 0.5,
            //symbol: 'arrow', //箭头图标
            symbolSize: 1.5, //图标大小
          },
           postEffect: {
            enable: true
          },
          lineStyle: {
              normal: {
                width: 0.2, //线条宽度
                opacity: 0.2, //尾迹线条透明度
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgb(20, 15, 2)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#2098FF' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                },
                //curveness: .3 //尾迹线条曲直度
              },
          },
          data:this.taxi_ODData
			  }]
      }
      let map = echarts.init(this.$refs.map) 
      map.setOption(option) // 获取到的百度地图对象bmap适用于所有的百度地图的接口
      let bmap = map.getModel().getComponent('bmap').getBMap() 
      bmap.setMapStyle(this.mapStyle)
      bmap.setMinZoom(11)
      // 设置最大缩放值
      bmap.setMaxZoom(15)
      
    }
  },

}

</script>

<style>
body, html,.map {
   width:100%;
   height:100%;
   overflow: hidden;
   margin:0;
   font-family:"微软雅黑";
   position:absolute;
}
.anchorBL{
  display:none
}
</style>
