/*
 * 邹瑞萌 2021-2-26
 * 公租自行车整体使用情况
 * */
<template>
  <div id="PRBicycleOverall">
  <rightBox></rightBox>
     <div ref="map"  style="height:900px;width:100%;overflow: hidden;"></div>
  </div>
</template>

<script  type="text/ecmascript-6">
import echarts from 'echarts'
import 'echarts-gl'
import PRBicycleOverall from '../../assets/js/PRBicycleOverall/PRBicycleOverall'
import RightBox from '../../components/content/PRBicycle_Overall/PRBicycle_Overall_RightBox'
//import {MapBox_Key, MapBox_Style, BicycleOverall_MapCenter, BicycleOverall_MapZoom, BicycleOverall_Maptexture} from '../common/const.js'

export default {
  data() {
    return {
      //res: PRBicycleOverall.res
    }
  },
  components:{
    RightBox
  },
  mounted() {
    setInterval(this.remove_line2,1000)
  },
  computed: {

  },
  methods: {
    //init() {
    mapload(linedata){
      mapboxgl.accessToken = 'pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA';
      let PRBicycle_Overall_myChart = echarts.init(this.$refs.map)
      // 指定图表的配置项和数据
      let PRBicycle_Overall_myChartOption = {
        tooltip: {
		            // trigger: 'item',
		            transitionDuration: 0,
		            formatter: function(a){
                       	var echartid = parseFloat(a['value'][2]);
                       	var newdata = a['name']  + ": " + echartid+ "辆";
                           return (newdata);
                       	}
		        },
        visualMap: {
            //show: false, //是否显示
            type: 'piecewise',//定义为分段型
            calculable: true, //是否显示拖拽用的手柄
            realtime: true, //拖拽时，是否实时更新
            inverse:true,  //是否反转 visualMap 组件
            itemHeight:25,
            left:"2%",
            bottom:"10%",
            padding:5,
            inRange: {
                color: ['#99CC33', '#99CC33', '#99CC33', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0.1
            },
            max: linedata[1],

            borderColor: '#ccc',
				    borderWidth: 2,
				    backgroundColor: '#eee',

            //text:['High', 'Low'],
            textStyle: {
              //图例文字的样式
              //color: '#fff',
              //fontSize: 16
            },
            pieces: [
				      {
				        min: 0, max: linedata[1]*3/7, label:'0-'+linedata[1]*3/7, color: '#99CC33'
			        }, {
				        min: linedata[1]*3/7, max: linedata[1]*4/7, label:linedata[1]*3/7+'-'+linedata[1]*4/7, color: '#fdae61'
			        }, {
				        min: linedata[1]*4/7, max: linedata[1]*5/7, label:linedata[1]*4/7+'-'+linedata[1]*5/7, color: '#f46d43'
				      }, {
					      min: linedata[1]*5/7,max: linedata[1]*6/7, label:linedata[1]*5/7+'-'+linedata[1]*6/7, color: '#d73027'
              }, {
				        min: linedata[1]*6/7,max: linedata[1], label:linedata[1]*6/7+'-'+linedata[1], color: '#a50026'
			      }],
        },
        mapbox: {
          center: [116.35, 39.92],
          zoom: 12,
          pitch: 60,
          bearing: -10,
          style: 'mapbox://styles/mrmax/cjnn6bltn028r2rnvywtz4yoj',
          boxHeight: 35,

          postEffect: {
            enable: true,
            SSAO: {
              enable: true,
              radius: 2,
              intensity: 1.5
            }
          },
          light: {
            main: {
              intensity: 1,
              shadow: true,
              shadowQuality: 'high'
            },
            ambient: {
              intensity: 0
            },
            ambientCubemap: {
              texture: 'http://localhost:8080/TraSys/resources/js/PublicBicycle/data-1491896094618-H1DmP-5px.hdr',
              exposure: 1,
              diffuseIntensity: 0.5
            }
          }
        },
        series: [{
          type: 'bar3D',
          name:'空闲车辆',
          shading: 'realistic',
          coordinateSystem: 'mapbox',
          minHeight:10,
          barSize: 0.2,
          silent: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          data: linedata[0]
        }]
      }
      PRBicycle_Overall_myChart.setOption(PRBicycle_Overall_myChartOption);
    },
    remove_line2() {
      let res = PRBicycleOverall.drawsite()
      this.mapload(res)
    }

  }
}
</script>

<style>
 #chordChart2{
    width: 100%;
    height: 220px;
    padding: 0 0;
    color: #ddd;
    z-index: 700;
}
/*隐藏水印 */
.mapboxgl-ctrl {
    display: none !important;
}
</style>
