<template>
  <div class="Bar_Top">
    <div id="chordChart1Bar">
      <legend class="title1">车站总体情况</legend>
      <div id="chordChart1"></div>  
    </div>
  </div>
</template>

<script>
import echarts from 'echarts' 
import PRBicycleOverall from '../../../assets/js/PRBicycle_Overall/PRBicycle_Overall'

export default {
  data() {
    return {
    }
  },
  components: {
  },
  mounted() {
    setInterval(this.remove_line3,10000)
  },
  methods: {
    remove_line3(){
      PRBicycleOverall.remove_line3();
      this.PRBicycle_Overall_echart11();
    },

    PRBicycle_Overall_echart11(){
      let PRBicycle_Overall_myChart2 = echarts.init(document.getElementById('chordChart1'));
      let PRBicycle_Overall_option2 = {
		    //backgroundColor: 'rgba(255,255,255,0.1)',
		    title: [{
		        x: "11%",
            y: "75%",
		        bottom: 40,
		        text: '车站数量',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 14,
		            color: 'white',
                backgroundColor: 'red',
		        },
		    }, {
		        x: "43%",
            y: "75%",
		        bottom: 40,
		        text: '空闲车辆',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 14,
		            color: 'white'
		        },
		    }, {
		        x: "72%",
            y: "75%",
		        bottom: 40,
		        text: '锁位使用率%',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 14,
		            color: 'white'
		        },
		    }],
		    tooltip: {
		        trigger: 'item',
		        formatter: "{b}: {c}",

		    },
		    series: [{
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: false,
            hoverAnimation: false,
		        radius: ['51%', '55%'], //大小
		        center: ['18%', '43%'], //位置
		        data: [{
		            value: 148 ,
		            name: '车站数量',
		            itemStyle: {
		                color: '#8A00E1'
		            }
		        }]
		    }, {
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: false,
            hoverAnimation: false,
		        radius: ['45%', '49%'],
		        center: ['18%', '43%'],
		        data: [{
		            value: 148 ,
		            name: '车站数量',
		            itemStyle: {
		                color: '#8A00E1'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['18%', '45%'], //饼图的中心（圆心）坐标
		        radius: ['0%', '35%'],
            itemStyle: { //图形样式
		            normal: {
		                color: {
		                    type: 'radial',
		                    x: 0.5,
		                    y: 0.5,
		                    r: 0.5,
		                    colorStops: [{
		                        offset: 0,
		                        color: 'rgba(241,192,73,0)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(241,192,73,0)' // 100% 处的颜色
		                    }],
		                    globalCoord: false // 缺省为 false
		                },
		                borderWidth: 1.5,
		                opacity: 0.21,
		            }
		        },
		        label: { //标签的位置
		            normal: {
		                show: true,
		                align: 'center',
		                position: 'center', //标签的位置
		                formatter: "{c}",
		                fontSize: 22,
		                textStyle: {
		                    color: '#8A00E1',
		                }
		            }
		        },
		        data: [{
		            value: 148
		        }]
		    }, {
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: true,
            hoverAnimation: false,
		        radius: ['51%', '55%'], //大小
		        center: ['50%', '43%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[0],
		            name: '空闲车辆',
		            itemStyle: {
		                color: '#00C5FF'
		            }
		        }]
		    }, 
        {
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: true,
            hoverAnimation: false,
		        radius: ['45%', '49%'], //大小
		        center: ['50%', '43%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[0],
		            name: '空闲车辆',
		            itemStyle: {
		                color: '#00C5FF'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['50%', '45%'], //饼图的中心（圆心）坐标
		        radius: ['0%', '35%'],
            itemStyle: { //图形样式
		            normal: {
		                color: {
		                    type: 'radial',
		                    x: 0.5,
		                    y: 0.5,
		                    r: 0.5,
		                    colorStops: [{
		                        offset: 0,
		                        color: 'rgba(48,230,142,0)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(48,230,142,0)' // 100% 处的颜色
		                    }],
		                    globalCoord: false // 缺省为 false
		                },
		                borderWidth: 1.5,
		                opacity: 0.21,
		            }
		        },
		        label: { //标签的位置
		            normal: {
		                show: true,
		                align: 'center',
		                position: 'center', //标签的位置
		                formatter: "{c}",
		                fontSize: 22,
		                textStyle: {
		                    color: '#00C5FF',
		                }
		            }
		        },
		        data: [{
		            value: PRBicycleOverall.echart11_num[0]
		        }]
		    }, {
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: false,
            hoverAnimation: false,
		        radius: ['51%', '55%'],
		        center: ['82%', '43%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[1],
		            name: '锁位使用率%',
		            itemStyle: {
		                color: '#FF6633'
		            }
		        }]
		    }, 
        {
		        type: 'pie',
		        label: { //标签的位置
		            normal: {
		                show: false,
		            }
		        },
		        clockwise: false,
            hoverAnimation: false,
		        radius: ['45%', '49%'],
		        center: ['82%', '43%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[1],
		            name: '锁位使用率%',
		            itemStyle: {
		                color: '#FF6633'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['82%', '43%'], //饼图的中心（圆心）坐标
		        radius: ['0%', '35%'],
		        itemStyle: { //图形样式
		            normal: {
		                color: {
		                    type: 'radial',
		                    x: 0.5,
		                    y: 0.5,
		                    r: 0.5,
		                    colorStops: [{
		                        offset: 0,
		                        color: 'rgba(232,30,135,0)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(232,30,135,0)' // 100% 处的颜色
		                    }],
		                    globalCoord: false // 缺省为 false
		                },
		                borderWidth: 1.5,
		                opacity: 0.21,
		            }
		        },
		        label: { //标签的位置
		            normal: {
		                show: true,
		                align: 'center',
		                position: 'center', //标签的位置
		                formatter: "{c}",
		                fontSize: 22,
		                textStyle: {
		                    color: '#FF6633',
		                }
		            }
		        },
		        data: [{
		            value: PRBicycleOverall.echart11_num[1]
		        }]
		    }]
		  };
      PRBicycle_Overall_myChart2.setOption(PRBicycle_Overall_option2);
    }
  }
}
</script>

<style>
.Bar_Top{
  height: 26%;
  width: 100%;
}
#chordChart1Bar{
  float:right;
  position: absolute;
  width: 100%;
  height: 25%;
  margin-top: 1%;  
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  
  z-index: 700; 
}
#chordChart1{
  width: 90%;
  height: 78%;
  margin-top: 0%;
  margin-left: 5%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#chordChart1:after{
  opacity: 0.5;
}
.title1 {
  width: 99.4%;
  height: 16%;
  font-size:125%;
  text-align:center;
  line-height: 200%;
  color:rgb(44, 188, 255);
  font-weight:bold;
  width: 97.6%;
  margin-left: 0.5%;
}
</style>
