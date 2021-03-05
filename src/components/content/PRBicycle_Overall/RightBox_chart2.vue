<template>
  <div>
    <div id="chordChart2Bar">
      <legend style="float:left;color:white;font-size: 18px;border-bottom: 0px solid #e5e5e5;">月平均锁位使用率</legend>
    </div>
    <div id="chordChart2"></div> 
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
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: colors,
        tooltip: { 

        },
        legend: {
        data:['2014 锁位使用率', '2015 锁位使用率'],
        textStyle: {
          fontWeight: 'normal',
          color: "white"
      },
        },
        grid: {
        top: 70,
        bottom: 50
        },
        xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "white"
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
            data: [ "2015-1", "2015-2", "2015-3", "2015-4"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: "black"
                }
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "white"
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
            data: ["2014-1", "2014-2", "2014-3", "2014-4"]
        }
        ],
        yAxis: [
        {
            type: 'value',
            max:100,
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "white"
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
#chordChart2Bar{
  
  width: 97.5%;
  height: 24px;
  padding-top:5px;
}
#chordChart2{
    width: 97.5%;
    height: 250px;
    padding: 0 0;
    margin-bottom: 20px;
    background-color:rgba(255,255,255,0.1);
    
    z-index: 700;
    
}
</style>
