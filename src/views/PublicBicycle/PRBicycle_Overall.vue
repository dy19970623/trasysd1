/*
 * 邹瑞萌 2021-2-26
 * 公租自行车整体使用情况
 * */
<template>
  <div id="PRBicycleOverall">
  <rightBox></rightBox>
     <div ref="map" class="map"></div>
  </div>
</template>

<script  type="text/ecmascript-6">
import echarts from 'echarts'
import 'echarts-gl'
import PRBicycleOverall from '../../assets/js/PRBicycle_Overall/PRBicycle_Overall'
import RightBox from '../../components/content/PRBicycle_Overall/PRBicycle_Overall_RightBox'
//import {MapBox_Key, MapBox_Style, BicycleOverall_MapCenter, BicycleOverall_MapZoom, BicycleOverall_Maptexture} from '../common/const.js'

export default {
  data() {
    return {
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
      mapboxgl.accessToken = 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ';
      let PRBicycle_Overall_myChart = echarts.init(this.$refs.map)
      // 指定图表的配置项和数据
      let PRBicycle_Overall_myChartOption = {
        //backgroundColor: '#cdcfd5',
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
            right:"2%",
            bottom:"10%",
            padding:5,
            inRange: {
              //color: ['#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              color: ['#1710c0', '#61bdff', '#1dbcb8', '#38b81f', '#f5f811', '#c75f01', '#a50026']
            },
            outOfRange: {
              colorAlpha: 0.1
            },
            max: linedata[1],
            borderColor: 'rgb(44, 188, 255)',
				    borderWidth: 1.5,
				    backgroundColor: '#19344B',
            //text:['High', 'Low'],
            textStyle: {
              //图例文字的样式
              color: '#FFF'     //图例文字颜色，大小等配置
              //fontSize: 16
            },
            pieces: [
              {
				        min: 0, max: linedata[1]*1/7, label:'0-'+linedata[1]*1/7, 
                color: '#1710c0'
			        },
              {
				        min: linedata[1]*1/7, max: linedata[1]*2/7, label:linedata[1]*1/7+'-'+linedata[1]*2/7,
                color: '#61bdff'
			        },
				      {
				        min: linedata[1]*2/7, max: linedata[1]*3/7, label:linedata[1]*2/7+'-'+linedata[1]*3/7, 
                color: '#1dbcb8'
			        }, {
				        min: linedata[1]*3/7, max: linedata[1]*4/7, label:linedata[1]*3/7+'-'+linedata[1]*4/7, 
                color: '#38b81f'
			        }, {
				        min: linedata[1]*4/7, max: linedata[1]*5/7, label:linedata[1]*4/7+'-'+linedata[1]*5/7, 
                color: '#f5f811'
				      }, {
					      min: linedata[1]*5/7,max: linedata[1]*6/7, label:linedata[1]*5/7+'-'+linedata[1]*6/7, 
                color: '#c75f01'
              }, {
				        min: linedata[1]*6/7,max: linedata[1], label:linedata[1]*6/7+'-'+linedata[1], 
                color: '#a50026'
			      }],
        },
        mapbox: {
          center: [116.337, 39.92],
          zoom: 12,
          pitch: 60,
          bearing: -10,
          style: 'mapbox://styles/litaizeng/ckm398gud9bmz17rykd0lemst',
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
              texture: '../../assets/js/PRBicycle_Overall/data-1491896094618-H1DmP-5px.hdr',
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
          minHeight:10,//10.2
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
      for (let i = 0; i < res[0].length; i++) {
        const element = res[0][i].value[2];
        //console.log(element)  
      }
      this.mapload(res)
    }

  }
}
</script>

<style>
.map {
   width:100%;
   height:100%;
   overflow: hidden;
   margin:0;
   font-family:"微软雅黑";
   position:absolute;
}
/*隐藏水印 */
.mapboxgl-ctrl {
    display: none !important;
}
</style>
