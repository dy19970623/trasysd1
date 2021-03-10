<template>
  <div id="rightdomain">
    <div id="domain"></div>
    <div id="domain2"></div>
    <div id="domain3"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {request} from "../../../network/request";
import {graphic} from "echarts/lib/export";
export default {
  name: "rightdomain",
  data(){
    return{

    }
  },
  methods:{
    //方法：接收主组件传递过来的后台数据
    getchartdata(res){
      console.log("get!")
      //console.log(res)
      this.drawchart1(res)
      this.drawchart2(res)
      this.drawchart3(res)
    },
    //方法:右边第一个echarts
    drawchart1(data1){
      let e=data1;
      //console.log(res.msg)
      let PRBicycle_BikeTimeData=[];
      let a0=[];
      let a1=[];
      let a2=[];
      let a3=[];
      let a4=[];
      let a5=[];
      let a6=[];
      let a7=[];
      let a8=[];
      let a9=[];
      for(let i=0;i<e.msg.length;i++){
        PRBicycle_BikeTimeData[i]=e.msg[i].biketime;
      }
      for(let i=0;i<PRBicycle_BikeTimeData.length;i++){

        switch (Math.floor(PRBicycle_BikeTimeData[i]/10)){
          case 0:a0.push(PRBicycle_BikeTimeData[i]);
            break;
          case 1:a1.push(PRBicycle_BikeTimeData[i]);
            break;
          case 2:a2.push(PRBicycle_BikeTimeData[i]);
            break;
          case 3:a3.push(PRBicycle_BikeTimeData[i]);
            break;
          case 4:a4.push(PRBicycle_BikeTimeData[i]);
            break;
          case 5:a5.push(PRBicycle_BikeTimeData[i]);
            break;
          case 6:a6.push(PRBicycle_BikeTimeData[i]);
            break;
          case 7:a7.push(PRBicycle_BikeTimeData[i]);
            break;
          case 8:a8.push(PRBicycle_BikeTimeData[i]);
            break;
          default:a9.push(PRBicycle_BikeTimeData[i]);
            break;
        }
      }
      //获取不同骑行时间的骑车人数
      let data=[];
      data.push(a0.length,a1.length,a2.length,a3.length,a4.length,a5.length,a6.length,a7.length,a8.length,a9.length);
      //骑行时长范围分布制表
      let PRBicycleShared_myChart = echarts.init(document.getElementById('domain'));
      let option1 = {
       /* backgroundColor:' rgba(255,255,255,0.1)',*/
        color: new graphic.LinearGradient(0, 1, 0,0 , [{
          offset: 0,
          color: '#990000'
        }, {
          offset: 1,
          color: '#FF9999'
        }]),
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },

        title: {
          x:'center',
          y:10,
          text: '骑行时长分布柱状图',

          textStyle:{
            fontSize:15,color:'#FFFFFF'
          }
//  		        left: 'center'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [{
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
          type : 'category',
          data : ['0-10分钟', '10-20分钟', '20-30分钟', '30-40分钟', '40-50分钟', '50-60分钟', '60-70分钟','70-80分钟','80-90分钟','90-max'],
          axisTick: {
            alignWithLabel: true
          }

        }
        ],
        yAxis : [{
          name :'骑行人数',
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },

          type : 'value'
        }
        ],
        series : [
          {
            name:'骑行人数',
            type:'bar',
            barWidth: '60%',
            data:data,
            itemStyle:{
              normal:{
                barBorderRadius:[5, 5, 5, 5],
              }
            },
          }
        ]
      };
      PRBicycleShared_myChart.setOption(option1);
    },
    //方法：右边第二个echarts
    drawchart2(data2){
      let e =data2
      //单车公司占比饼图
      let company1=0;
      let company2=0;
      let company3=0;
      let company4=0;
      //console.log(e)
      for(let i=0;i<e.msg.length;i++){
        if(e.msg[i].enterprisecode==110001){
          company1++;
        }else if(e.msg[i].enterprisecode==110002){
          company2++;
        }else if(e.msg[i].enterprisecode==110003){
          company3++;
        }else if(e.msg[i].enterprisecode==110004){
          company4++;
        }
      }
      let PRBicycleShared_myChart2 = echarts.init(document.getElementById('domain2'));
      let option1 = {
        color: ['#FF6633','#00C6FF', '#8A00E1', '#CC9900'], //环形图每块的颜色
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          textStyle:{
            fontSize:12,color:'#FFFFFF'
          },
          x: 'left',
          y:50,
          data:['摩拜单车','小黄车','哈喽出行','优拜单车']
        },
        title: {
          x:'center',
          y:10,
          text: '单车公司占比饼图',
          textStyle:{
            fontSize:15,color:'#FFFFFF'
          }
//  		        left: 'center'
        },
        series: [
          {
            name:'单车公司',
            type:'pie',
            radius: ['50%', '70%'],
            center:['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:company1, name:'摩拜单车'},
              {value:company2, name:'小黄车'},
              {value:company3, name:'哈喽出行'},
              {value:company4, name:'优拜单车'},

            ]
          }
        ]
      };
      PRBicycleShared_myChart2.setOption(option1);
    },
    //方法：右边第三个echarts
    drawchart3(data3){
      let e=data3
      let Shared_Number=[];
      for(let i=0;i<e.msg.length;i++){
        Shared_Number[i]=Math.floor(e.msg[i].renttime*0.000001);
      }
      let daydata=[];
      for(let j=0;j<31;j++){
        daydata[j]=0;
        for(let i=0;i<Shared_Number.length;i++){
          if(Shared_Number[i]==(20180800+j+1)){
            daydata[j]++;
          }
        }
      }

      let dateList = [
        ['2018-8-1'],
        ['2018-8-2'],
        ['2018-8-3'],
        ['2018-8-4'],
        ['2018-8-5'],
        ['2018-8-6'],
        ['2018-8-7'],
        ['2018-8-8'],
        ['2018-8-9'],
        ['2018-8-10'],
        ['2018-8-11'],
        ['2018-8-12'],
        ['2018-8-13'],
        ['2018-8-14'],
        ['2018-8-15'],
        ['2018-8-16'],
        ['2018-8-17'],
        ['2018-8-18'],
        ['2018-8-19'],
        ['2018-8-20'],
        ['2018-8-21'],
        ['2018-8-22'],
        ['2018-8-23'],
        ['2018-8-24'],
        ['2018-8-25'],
        ['2018-8-26'],
        ['2018-8-27'],
        ['2018-8-28'],
        ['2018-8-29'],
        ['2018-8-30'],
        ['2018-8-31'],

      ];

      let heatmapData = [];
      let lunarData = [];
      for (let i = 0; i < dateList.length; i++) {
        heatmapData.push([
          dateList[i][0],
          daydata[i]//每日租车数量
        ]);
        lunarData.push([
          dateList[i][0],
          1,
        ]);
      }

      let PRBicycleShared_myChart3 = echarts.init(document.getElementById('domain3'));
      let option3 = {
        tooltip: {
          formatter: function (params) {
            return '租车数量: ' + params.value[1].toFixed(0);
          }
        },
        title: {
          x:'center',
          y:5,
          text: '8月租车数量日历图',

          textStyle:{
            fontSize:15,color:'#FFFFFF'
          },
        },
        graphic: [
          {
            type: 'group',
            left: 15,
            bottom:150,
            children: [

              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#FFFFFF',

                  text: [
                    '租车数量(辆)',

                  ].join('\n'),
                  font: '14px Microsoft YaHei',

                }
              }
            ]
          }
        ],
        visualMap: {
          show: false,
          min: 3503,
          max: 10472,
          calculable: true,
          seriesIndex: [2],
          orient: 'horizontal',
          left: 'center',
          bottom: 10,
          inRange: {
            color: ['#e0ffff', '#006edd'],
            opacity: 0.7
          },
          controller: {
            inRange: {
              opacity: 0.8
            }
          }
        },

        calendar: [{
          left: 'center',
          top: 30,
          cellSize: [40, 40],
          yearLabel: {
            margin:'70'
          },
          orient: 'vertical',
          dayLabel: {
            firstDay: 1,
            nameMap: []
          },
          monthLabel: {
            show: false
          },
          range: '2018-08'
        }],

        series: [{
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                let d = echarts.number.parseDate(params.value[0]);
                return d.getDate();
              },
              textStyle: {
                color: '#000'
              }
            }
          },
          data: lunarData
        }, {
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 1,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return '\n' ;
              },
              textStyle: {
                fontSize: 10,
                fontWeight: 700,
                color: '#a00'
              }
            }
          },
          data: lunarData
        }, {
          name: '租车数量',
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: heatmapData
        }]
      };
      PRBicycleShared_myChart3.setOption(option3);
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
#rightdomain{
  position: absolute;
  top:0.1%;
  width: 28%;
  height:100%;
  z-index:600;
  background-color: rgba(0,0,0,0.7);
}
#domain{
  height:30%;
  width:90%;
  left:0.7%;
  top:1%;
  border:15px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 20 stretch;
}
#domain2{
  height:25%;
  width:90%;
  top:4%;
  left:0.7%;
  border:15px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 20 stretch;
}
#domain3{
  height:27%;
  width:90%;
  top:6%;
  left:0.7%;
  border:15px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 20 stretch;
}
</style>
