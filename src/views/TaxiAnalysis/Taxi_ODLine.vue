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
import 'echarts/extension/bmap/bmap'
import TaxiODLine from '../../assets/js/TaxiODLine/TaxiODLine'

export default {
  data() {
    return {
      taxi_ODData:[],
      mapStyle: { styleJson:[
                             {
                                 "featureType": "water",
                                 "elementType": "all",
                                 "stylers": {
                                           "color": "#021019"
                                 }
                       },
                       {
                                 "featureType": "highway",
                                 "elementType": "geometry.fill",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "highway",
                                 "elementType": "geometry.stroke",
                                 "stylers": {
                                           "color": "#147a92"
                                 }
                       },
                       {
                                 "featureType": "arterial",
                                 "elementType": "geometry.fill",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "arterial",
                                 "elementType": "geometry.stroke",
                                 "stylers": {
                                           "color": "#0b3d51"
                                 }
                       },
                       {
                                 "featureType": "local",
                                 "elementType": "geometry",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "land",
                                 "elementType": "all",
                                 "stylers": {
                                           "color": "#08244bff"
                                 }
                       },
                       {
                                 "featureType": "railway",
                                 "elementType": "geometry.fill",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "railway",
                                 "elementType": "geometry.stroke",
                                 "stylers": {
                                           "color": "#08304b"
                                 }
                       },
                       {
                                 "featureType": "subway",
                                 "elementType": "geometry",
                                 "stylers": {
                                           "lightness": -70
                                 }
                       },
                       {
                                 "featureType": "building",
                                 "elementType": "geometry.fill",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "all",
                                 "elementType": "labels.text.fill",
                                 "stylers": {
                                           "color": "#857f7f"
                                 }
                       },
                       {
                                 "featureType": "all",
                                 "elementType": "labels.text.stroke",
                                 "stylers": {
                                           "color": "#000000"
                                 }
                       },
                       {
                                 "featureType": "building",
                                 "elementType": "geometry",
                                 "stylers": {
                                           "color": "#022338"
                                 }
                       },
                       {
                                 "featureType": "green",
                                 "elementType": "geometry",
                                 "stylers": {
                                           "color": "#062032"
                                 }
                       },
                       {
                                 "featureType": "boundary",
                                 "elementType": "all",
                                 "stylers": {
                                           "color": "#1e1c1c"
                                 }
                       },
                       {
                                 "featureType": "manmade",
                                 "elementType": "geometry",
                                 "stylers": {
                                           "color": "#022338"
                                 }
                       },
                       {
                                 "featureType": "poi",
                                 "elementType": "all",
                                 "stylers": {
                                           "visibility": "off"
                                 }
                       },
                       {
                                 "featureType": "all",
                                 "elementType": "labels.icon",
                                 "stylers": {
                                           "visibility": "off"
                                 }
                       },
                       {
                                 "featureType": "road",
                                 "elementType": "all",
                                 "stylers": {
                                           "color": "#531fb859",
                                           "weight": "0.2",
                                           "lightness": 29,
                                           "visibility": "on"
                                 }
                       }
      ]},
      option: {
        bmap: {
          // 百度地图中心经纬度
          center: [116.4, 39.95],
          // 百度地图缩放
          zoom: 12,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: {
          }
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
        series: [
        {
          name:'Taxi',  //名称
          type: 'lines',    //线图
          coordinateSystem: 'bmap',
          lineStyle: {
            normal: {
              color: '#feb64d',
              width: 0.4,
              curveness: 0
            }
          },
          zlevel: 1,
          effect: {
            show: true,
            period: 10,
            trailLength: 0,
            color: '#feb64d',
            symbolSize: 3,
            loop:false
          },
          symbol:'circle',
          symbolSize:0.00009,
          data:TaxiODLine.taxi_ODData
			  }]
      }
    };
  },
  computed: {},
  mounted () {
    this.getbmap();
  },
  methods: {
    getbmap() {
      let map = echarts.init(this.$refs.map)
      map.setOption(this.option) // 获取到的百度地图对象bmap适用于所有的百度地图的接口
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
.map { height: 1000px;  }

</style>
