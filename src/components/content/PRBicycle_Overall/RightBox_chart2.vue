<template>
  <div class="Bar">
    <div class="Left_Top2"></div><div class="Right_Bottom2"></div>
    <div id="chordChart2Bar">
      <legend class="title">月平均锁位使用率</legend>
      <div id="chordChart2"></div> 
    </div>
    
  </div>
  
</template>

<script>
import echarts from 'echarts' 

export default {
  data() {
    return {}
  },
  components: {},
  mounted() {
    this.getmap()
  },
  methods: {
    getmap() {
      let PRBicycle_Overall_myChart3 = echarts.init(document.getElementById('chordChart2'));
      let colors = ['#91c7ae', '#6495ED', '#91c7ae'];
      let PRBicycle_Overall_option3 = {
        //backgroundColor: 'rgba(255,255,255,0.1)',
        color: colors,
        tooltip: { 
          
        },
        legend: {
          top: '2%',
          data:['2014 锁位使用率', '2015 锁位使用率'],
          textStyle: {
            fontWeight: 'normal',
            color: "white"
          },
        },
        grid: {
        top: '20%',
        left: 29,
        right:5,
        bottom: 30,
        //borderWidth: 1,
        },
        xAxis: [
        {
            type: 'category',
            axisLabel: {
              show: true,
              margin: 8,
              textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11,      //更改坐标轴文字大小
              bottom:20
              }
            },
            axisTick: {//设置地名分割线颜色
              show:false,          
              lineStyle: {
                color: '#A9A9A9'
              }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "rgba(105,105,105, 0.5)"
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '锁位使用率  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                },
                 color: "black"
            },
            data: [ "2015-01", "2015-02", "2015-03", "2015-04"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: "black"
                }
            },
            axisLabel: {
              show: true,
              margin: 2,
              textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11      //更改坐标轴文字大小
              }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "rgba(105,105,105, 0.5)",   
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '锁位使用率  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2014-01", "2014-02", "2014-03", "2014-04"]
        }
        ],
        yAxis: [
        {
            type: 'value',
            max:100,
            axisLabel: {
              show: true,
              textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 11      //更改坐标轴文字大小
              }
            },
            axisTick: {//设置地名分割线颜色
              show:false,          
              lineStyle: {
                color: '#A9A9A9'
              }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "rgba(105,105,105, 0.5)",
                    width: 1
                }
            },
            splitLine: {
              //show:true,
              lineStyle: {
              color: "rgba(105,105,105, 0.5)"
              }
            },
              
        }
        ],
        series: [
        {
            name:'2014 锁位使用率',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [ 35.0, 26.4, 28.7, 20.7]
        },
        {
            name:'2015 锁位使用率',
            type:'line',
            smooth: true,
            data: [ 23.1, 38.7, 28.3, 28.2]
        }
        ]
      };
      PRBicycle_Overall_myChart3.setOption(PRBicycle_Overall_option3);
    }
  }
}
</script>

<style>
.Bar{
  height: 33.5%;
  width: 100%;
}
#chordChart2Bar{
  float:right;
  position: absolute;
  width: 95%;
  height: 32%;
  margin-top: 2%;  
  margin-left: 2.5%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#chordChart2{
  width: 89%;
  height: 83%;
  margin-left: 5%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
    
}
#chordChart2:after{
  opacity: 0.5;
}
/*内边框左上角样式*/
.Left_Top2 {
  float:right;
  position: absolute;
  width: 95%;
  height: 32%;
  margin-top: 2.6%;  
  margin-left: 3%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop5.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 14% 20%;
}
/*内边框右下角样式*/
.Right_Bottom2{
  float:right;
  position: absolute;
  width: 95%;
  height: 32%;
  margin-top: 2.4%;  
  margin-left: 1.5%;
  background:url(../../../assets/image/PRBicycle_Overall/Bar_LeftTop5.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 12%;
  transform: rotate(180deg);
}
.title {
  height: 11%;
  left: 10%;
  font-size:125%;
  line-height: 200%;
  padding-left: 15%;
  color:rgb(44, 188, 255);
  
}
</style>
