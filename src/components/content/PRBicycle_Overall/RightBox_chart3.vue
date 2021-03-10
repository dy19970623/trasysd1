<template>
  <div class="Bar_Bottom">
    <div id="chordChart3Bar">
      <legend class="title3">自行车周内租还情况</legend>
      <div id="chordChart3"></div> 
    </div>
    
  </div>
  
</template>

<script>
import echarts from 'echarts' 
import PRBicycleOverall from '../../../assets/js/PRBicycle_Overall/PRBicycle_Overall'

export default {
  data() {
    return {
      j:PRBicycleOverall.j
    }
  },
  components: {},
  mounted() {
    setInterval(this.remove_line,10000)
  },
  methods: {
    remove_line(){
    this.j = this.j+7;
    
    this.PRBicycle_Overall_echart12();
    },
    PRBicycle_Overall_echart12(){
      //请更改成html div名字
      let PRBicycle_Overall_myChart4 = echarts.init(document.getElementById('chordChart3'));
     
      let data1 = [3.2*20*148/1000,5*20*148/1000,4.7*20*148/1000,4.8*20*148/1000,3*20*148/1000,4.2*20*148/1000,[2*20*148+this.j*parseInt(Math.random()*1+9)]/1000];
      let data2 = [-3*20*148/1000,-3.2*20*148/1000,-4.8*20*148/1000,-3.9*18*148/1000,-3.5*20*148/1000,-4.3*20*148/1000,[-1*20*148-this.j*parseInt(Math.random()*1+8)]/1000];
    
      let PRBicycle_Overall_option4 = {
        //backgroundColor: 'rgba(255,255,255,0.1)',
        legend: {
          data: ['还','租'],
          align: 'left',
          padding:[10,0,0,0],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          textStyle: {
            fontSize: 15,
            fontWeight: 500,
            color: 'white',
            
          },
        },
        /* 
        toolbox: {
        // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },*/
        tooltip: {},
        grid: {
          show:'true',
          left: '3%',
          right:'3%',
          top:'15%',
          bottom:'10%',
          borderWidth:'0.5',
          borderColor:'rgba(105,105,105, 0.5)',
          containLabel: 'true'
        },
        xAxis: [{
          type: 'value',
          max:15, 
          //min:-20,        
          data: PRBicycleOverall.xAxisData,
          silent: false,
          splitLine: {
            show: false
          }, 
          axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11      //更改坐标轴文字大小
            }
          },
          axisTick: {//设置地名分割线颜色
            show:false,          
            lineStyle: {
              color: "rgba(105,105,105, 0.5)"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(105,105,105, 0.5)"
            }
          },
        }, ],  
        yAxis: [{
          name: ' ',
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11      //更改坐标轴文字大小
            }
          },
          splitLine: { 
            show: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
          axisTick: {//设置地名分割线颜色
            show:false,          
            lineStyle: {
              color: "rgba(105,105,105, 0.5)"
            }
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
          axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11,      //更改坐标轴文字大小
            }
          },
          data:[PRBicycleOverall.xAxisData[0],PRBicycleOverall.xAxisData[1],PRBicycleOverall.xAxisData[2],PRBicycleOverall.xAxisData[3],PRBicycleOverall.xAxisData[4],PRBicycleOverall.xAxisData[5],PRBicycleOverall.xAxisData[6]]
        }, {
          name: '次数（千辆）',
          type: 'category',
          nameTextStyle:{
            color:"white", 
            fontSize:12,  
            padding:[0,60,0,0]   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          },
          splitLine: { 
            show: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
          axisTick: {//设置地名分割线颜色
              show:false,          
              lineStyle: {
                color: "rgba(105,105,105, 0.5)"
              }
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
         },],
        series: [ 
          
          {
            name:'辅助',
            type:'bar',
            stack: 'total',
            itemStyle:{
              normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
              },
              emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
              }
            },
            data:[0.25,0.25,0.25,0.25,0.25,0.25,0.25]
          },{
            name:'辅助',
            type:'bar',
            stack: 'total',           
            itemStyle:{
              normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
              },
              emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
              }
            },
            data:[-0.25,-0.25,-0.25,-0.25,-0.25,-0.25,-0.25]
          },
          
          {
          name: '租',
          type: 'bar',
          stack: 'total',
          barGap: '-100%',
          barWidth: '55%',
          itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
              //柱形图圆角，初始化效果
              barBorderRadius:[4, 4, 4, 4],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#0c5649'
              },{
                offset: 0.5,
                color: '#1accac'
              }]),
              label: {
                  show: true, //是否显示
                  position: 'insideLeft',//显示在顶部
                  textStyle: {
                    color: 'white', //字体颜色
                    fontSize: 11, //字体大小
                    align: 'left'
                  }
                }
            }
          },
          data: data1,
          animationDelay: function (idx) {
            return idx * 10;
          }
        }, {
          name: '还',
          type: 'bar',
          stack: 'total',
          barWidth: '55%',
          itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
              //柱形图圆角，初始化效果
              barBorderRadius:[4, 4, 4, 4],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#40bdf2'
              },{
                offset: 0.9,
                color: '#19344B'
              }]),
               label: {
                  show: true, //是否显示
                  position: 'insideRight',//显示在顶部
                  textStyle: {
                    color: 'white', //字体颜色
                    fontSize: 11 //字体大小
                  }
                }
            }
          },
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        },
        //color:['#6495ED','#91c7ae']
      };
      PRBicycle_Overall_myChart4.setOption(PRBicycle_Overall_option4);
    }
  }
}
</script>

<style>
.Bar_Bottom{
  height: 39%;
  width: 100%;
}
#chordChart3Bar{
  float:right;
  position: absolute;
  width: 100%;
  height: 38%;
  margin-top: 1%;  
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#chordChart3{
  width: 89%;
  height: 83%;
  margin-left: 5%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
    
}
#chordChart3:after{
  opacity: 0.5;
}
.title3 {
  height: 12%;
  font-size:125%;
  line-height: 200%;
  color:rgb(44, 188, 255);
}
</style>
