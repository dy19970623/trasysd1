<template>
  <div>
    <div id="chordChart3Bar">
      <legend style="float:left;color:white;font-size: 18px;border-bottom: 0px solid #e5e5e5;">自行车周内租还情况</legend>
    </div>
    <div id="chordChart3"></div> 
  </div>
  
</template>

<script>
import echarts from 'echarts' 
import PRBicycleOverall from '../../../assets/js/PRBicycleOverall/PRBicycleOverall'

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
      let xAxisData = [];
      let data1 = [3.2*20*148/1000,5*20*148/1000,4.7*20*148/1000,4.8*20*148/1000,3*20*148/1000,4.2*20*148/1000,[2*20*148+this.j*parseInt(Math.random()*1+9)]/1000];
      let data2 = [-3*20*148/1000,-3.2*20*148/1000,-4.8*20*148/1000,-3.9*18*148/1000,-3.5*20*148/1000,-4.3*20*148/1000,[-1*20*148-this.j*parseInt(Math.random()*1+8)]/1000];
      for (let i = 0; i < PRBicycleOverall.echart12_day.length; i++) {
          xAxisData.push(PRBicycleOverall.echart12_day[i]);
      }
      let PRBicycle_Overall_option4 = {
        backgroundColor: 'rgba(255,255,255,0.1)',
        legend: {
          data: ['租', '还'],
          align: 'left',
          textStyle: {
            fontSize: 18,
            fontWeight: 500,
            color: 'white'
          },
        },
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
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }, 
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
        },  
        yAxis: {
          type: 'value',
          name: '次数（千辆）',
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
        },
        series: [{
          name: '租',
          type: 'bar',
          barGap: '-100%',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10;
          }
        }, {
          name: '还',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        },
        color:['#6495ED','#91c7ae']
      };
      PRBicycle_Overall_myChart4.setOption(PRBicycle_Overall_option4);
    }
  }
}
</script>

<style>
#chordChart3Bar{
 
  width: 97.5%;
  height: 24px;
  padding-top:5px;
}
#chordChart3{
    width: 97.5%;
    height: 250px;
    padding: 0 0;
    background-color:rgba(255,255,255,0.1);
    
    z-index: 700;
    
}
</style>
