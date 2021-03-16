<template>
  <div class="Bar">
    <div id="chordChart2Bar">
      <legend class="title2">月平均锁位使用率</legend>
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
      let colors = ['#00f8cc', '#FF6633'];
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
            fontSize: 12,
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
            max:50,
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
  height: 35%;
  width: 100%;
}
#chordChart2Bar{
  float:right;
  position: absolute;
  width: 100%;
  height: 34%;
  margin-top: 1%;  
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
.title2 {
  width: 99.4%;
  height: 13%;
  font-size:125%;
  line-height: 250%;
  text-align:center;
  color:rgb(44, 188, 255);
  font-weight:bold;

  width: 97.6%;
  margin-left: 0.5%;
}
</style>
