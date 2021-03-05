<template>
  <div>
    <div id="chordChart1Bar">
      <legend style="float:left;color:white;font-size: 18px;border-bottom: 0px solid #e5e5e5;">车站总体情况</legend>
      <p style="color:white; font-size:12px; float:left;margin-top:5px;margin-left:10px">2015年4月7日数据</p>
    </div>
    <div id="chordChart1"></div> 
  </div>
</template>

<script>
import echarts from 'echarts' 
import PRBicycleOverall from '../../../assets/js/PRBicycleOverall/PRBicycleOverall'

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
		    backgroundColor: 'rgba(255,255,255,0.1)',
		    title: [{
		        x: "12%",
		        bottom: 40,
		        text: '车站数量',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 18,
		            color: "rgba(241,192,73,1.0)"
		        },
		    }, {
		        x: "40%",
		        bottom: 40,
		        text: '空闲车辆',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 18,
		            color: "rgba(48,230,142,1.0)"
		        },
		    }, {
		        x: "65%",
		        bottom: 40,
		        text: '锁位使用率%',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 18,
		            color: "rgba(232,30,135,1.0)"
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
		        radius: ['35%', '40%'],
		        center: ['22%', '50%'],
		        data: [{
		            value: 148 ,
		            name: '车站数量',
		            itemStyle: {
		                color: 'rgba(241,192,73,1.0)'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['22%', '50%'], //饼图的中心（圆心）坐标
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
		                        color: 'rgba(241,192,73,0.5)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(241,192,73,1)' // 100% 处的颜色
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
		                fontSize: 30,
		                textStyle: {
		                    color: 'rgba(241,192,73,1.0)',
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
		        radius: ['35%', '40%'],
		        center: ['50%', '50%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[0],
		            name: '空闲车辆',
		            itemStyle: {
		                color: 'rgba(48,230,142,1.0)'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['50%', '50%'], //饼图的中心（圆心）坐标
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
		                        color: 'rgba(48,230,142,0.1)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(48,230,142,1)' // 100% 处的颜色
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
		                fontSize: 30,
		                textStyle: {
		                    color: 'rgba(48,230,142,1.0)',
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
		        radius: ['35%', '40%'],
		        center: ['77%', '50%'],
		        data: [{
		            value: PRBicycleOverall.echart11_num[1],
		            name: '锁位使用率%',
		            itemStyle: {
		                color: 'rgba(232,30,135,1.0)'
		            }
		        }]
		    }, {
		        name: '',
		        type: 'pie',
		        clockwise: false,
		        silent: true,
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['77%', '50%'], //饼图的中心（圆心）坐标
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
		                        color: 'rgba(232,30,135,0.1)' // 0% 处的颜色
		                    }, {
		                        offset: 1,
		                        color: 'rgba(232,30,135,1)' // 100% 处的颜色
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
		                fontSize: 30,
		                textStyle: {
		                    color: 'rgba(232,30,135,1.0)',
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

#chordChart1Bar{
  
  width: 97.5%;
  height: 24px;
  
}
#chordChart1{
    width: 97.5%;
    height: 250px;
    margin-bottom: 20px;
    background-color:rgba(255,255,255,0.1);
    
    z-index: 700;
    
}
</style>
