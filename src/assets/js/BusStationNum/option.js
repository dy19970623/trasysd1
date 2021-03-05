import echarts from 'echarts' 

var tips=echarts.init(document.getElementById('nums'));
var option = {
title: {
    text: "",
    left: "left",
    textStyle: {
          fontSize: 20,
          color: 'white',
          fontWeight:"normal",
        },
},
color: ['#3398DB'],
tooltip : {
  trigger: 'axis',
  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  }
},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
xAxis : [
     {
         type : 'category',
         name: '车次',
          data :[0,0,0,0,0],
        axisLabel:{
    interval:0,
    rotate:45
          },
         axisTick: {
             alignWithLabel: true
         },
           axisLine:{
             lineStyle:{
               color:"white",
             }
           }
     }
 ],
 yAxis : [
     {
         type : 'value',
         name: '人次',
       nameTextStyle:{
           color:"white"
           },
         axisLine: {
             lineStyle: {
                 color: "white"
               }  
         }
     }
 ],
series : [
  {
      name:'今日登量',
      type:'bar',
      barWidth: '50%',
      data:[0,0,0,0,0],
  }
]
}

export default{
  tips,
  option
}