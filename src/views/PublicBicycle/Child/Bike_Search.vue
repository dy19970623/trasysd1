<template>
  <div id="search">
    <div id="chart1">
      <div id="chartTitle1">
        <legend id="bikename1" style="margin-bottom:0px;color:white; font-size: 20px" v-model="station">{{station}}基本情况</legend>
        <p style="color:white;font-size: 12px;position: absolute;left:76%;top:52%;">2015年4月7日数据</p>
      </div>
      <div id="stationChart"></div>
    </div>
    <div id="chart2">
      <div id="chartTitle2" class="chartTitle2">
        <div id="dateMid" style="color:white; font-size: 20px;">车站名称：</div>
        <div id="stationName">
          <el-input v-model="input" placeholder="请输入车站名称"></el-input>
        </div>
        <div id="stationTime">
          <div id="startTime">
            <el-input v-model="value1" placeholder="请输入开始时间"></el-input>
          </div>
          <div id="endTime">
            <el-input v-model="value2" placeholder="请输入结束时间"></el-input>
          </div>
        </div>
        <div id="searchbutton">
          <el-button type="primary" @click="this.find">查询</el-button>
        </div>
      </div>
      <div id="bike2">
        <legend id="bikename2" style="margin-bottom:0px;margin-top:20px;color:white;font-size: 20px"v-model="station">{{station}}历史情况</legend>
      </div>
      <div id="stationChart2"></div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts';
import bikesitedata from "../../../assets/js/Bike_Search/PRBicycle_siteData.js"
export default {
  name: "Bike_Search",
  data() {
    return {
      station:"百万庄大街站",
      echart_freebike1:"6",
      echart_locknumber1:"30",
      echart_usernumber1 :"5",
      input: '',
      value1: '',
      value2: ''
    }
  },
  methods:{
    //方法：时间格式转换
    timestampToTime(timestamp) {
      let date = new Date(timestamp /** 1000*/);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      let D = date.getDate() /*+ ' '*/;
      let h = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      return Y+M+D;
    },
    //方法：Echarts1
    PRBicycle_OD_echart11(stationname,echart_freebike,echart_locknumber,echart_usernumber){
      this.station=stationname;
      this.input=this.station
      //console.log("发生了")
       //let echart_freebike=this.echart_freebike1;
       //let echart_locknumber=this.echart_locknumber1;
       //let echart_usernumber=this.echart_usernumber1
      let PRBicycle_OD_myChart3 = echarts.init(document.getElementById('stationChart'));
      let option3 = {
        title: {
          text: '白云路站使用情况',
          textStyle: {
            fontSize: 18,
            fontWeight: 500,
            color: 'white'
          },
        },
        title: [{
          x: "10%",
          bottom: 10,
          left: 25,
          text: '闲置车辆',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "#fff"
          },
        }, {
          x: "20%",
          bottom: 10,
          left: 165,
          text: '锁位数量',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "#fff"
          },
        }, {
          x: "60%",
          bottom: 10,
          left: 305,
          text: '流动情况',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "#fff"
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
          radius: ['40%', '45%'],
          center: ['15%', '50%'],
          data: [{
            value: echart_freebike,
            name: '当前闲置车辆',
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
          radius: ['47%', '51%'],
          center: ['15%', '50%'],
          data: [{
            value: echart_freebike,
            name: '当前闲置车辆',
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
          center: ['15%', '50%'], //饼图的中心（圆心）坐标
          radius: ['0%', '40%'],
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
              fontSize: 30,
              textStyle: {
                color: '#FFF',
              }
            }
          },
          data: [{
            value: echart_freebike
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
          radius: ['40%', '45%'],
          center: ['51%', '50%'],
          data: [{
            value: echart_locknumber,
            name: '车站锁位数量',
            itemStyle: {
              color: '#00C6FF'
            }
          }]
        },{
          type: 'pie',
          label: { //标签的位置
            normal: {
              show: false,
            }
          },
          clockwise: false,
          hoverAnimation: false,
          radius: ['47%', '51%'],
          center: ['51%', '50%'],
          data: [{
            value: echart_locknumber,
            name: '车站锁位数量',
            itemStyle: {
              color: '#00C6FF'
            }
          }]
        }, {
          name: '',
          type: 'pie',
          clockwise: false,
          silent: true,
          minAngle: 20, //最小的扇区角度（0 ~ 360）
          center: ['51%', '50%'], //饼图的中心（圆心）坐标
          radius: ['0%', '40%'],
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
              fontSize: 30,
              textStyle: {
                color: '#FFF',
              }
            }
          },
          data: [{
            value: echart_locknumber
          }]
        }, {
          type: 'pie',
          label: { //标签的位置
            normal: {
              show: false,
            }
          },
          clockwise: false,
          radius: ['40%', '45%'],
          center: ['87%', '50%'],
          data: [{
            value: echart_usernumber,
            name: '车辆流动情况',
            itemStyle: {
              color: '#FF6633'
            }
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
          radius: ['47%', '51%'],
          center: ['87%', '50%'],
          data: [{
            value: echart_usernumber,
            name: '车辆流动情况',
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
          center: ['87%', '50%'], //饼图的中心（圆心）坐标
          radius: ['0%', '40%'],
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
              fontSize: 30,
              textStyle: {
                color: '#FFF',
              }
            }
          },
          data: [{
            value: echart_usernumber
          }]
        }]
      };
      PRBicycle_OD_myChart3.setOption(option3);
    },
    //方法：Echarts2
    PRBicycle_OD_echart12(echart12_day){
      console.log(echart12_day)
      //let echart12_day = new Array;
      //echart12_day=[1,2,3,4,5,6,7,8,9,10];
      let PRBicycle_OD_myChart4 = echarts.init(document.getElementById('stationChart2'));
      let xAxisData = [];
      let data1 = [];
      let data2 = [];
      for (let i = 0; i < echart12_day.length; i++) {
        xAxisData.push(echart12_day[i]);
        data1.push(parseInt(Math.random()*20+1));
        data2.push(parseInt(-(Math.random()*20+1)));
      }

      let PRBicycle_OD_option4 = {
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
          name: '数量（辆）',
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
          itemStyle:{
            normal:{
              barBorderRadius:[5, 5, 5, 5],
            }
          },
          color: {
            type: 'linear', // 线性渐变
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#1accac' // 0%处的颜色为红色
            }, {
              offset: 1,
              color: '#0c5649' // 100%处的颜色为蓝
            }]
          },
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
          },
          itemStyle:{
            normal:{
              barBorderRadius:[5, 5, 5, 5],
            }
          },
          color: {
            type: 'linear', // 线性渐变
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#40bdf2' // 0%处的颜色为红色
            }, {
              offset: 1,
              color: '#19344B' // 100%处的颜色为蓝
            }]
          },
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        },
      };
      PRBicycle_OD_myChart4.setOption(PRBicycle_OD_option4);
    },
    //方法：按钮查询功能
    find(){
      let echart12_day = new Array;
      echart12_day=[1,2,3,4,5,6,7,8,9,10];
      let testnumber = 0;
      //判断查询结果是否一致
      let findname=0;
      let findstarttime=0;
      let findendtime=0;
      let findnumber = 0;
      console.log("啊啊啊")
      let starttime = this.value1;
      let endtime = this.value2;
      let testtime = "2018-09-30 00:00:00";
      let date1 = new Date(starttime);
      let date2 = new Date(endtime);
      let time1 = date1.getTime();
      let time2 = date2.getTime();
      if(time2<time1||starttime==""||endtime=="") {
        alert("请输入正确时间段！");
      }
      else{
        let daylength = parseInt((time2 - time1)/86400000)+1;
        let echarts_time1 = this.timestampToTime(time1);
        //清空数组，重新赋值
        echart12_day.splice(0, echart12_day.length);
        for (let i = 0; i < daylength; i++) {
          echart12_day[i] = this.timestampToTime(time1+86400000*i);
        }
        //console.log(echart12_day)
        if(findname==this.station&&findstarttime==this.value1[0]&&findendtime==value[1]){

        }
        else{
          console.log(echart12_day)
          this.PRBicycle_OD_echart12(echart12_day);

        }
        let bike_station=bikesitedata.bikesitedata;
        let site_name=this.input
        for (let i = 0; i < bike_station.length; i++) {
          let site_NAME = bike_station[i].SITENAME;
          let site_MAXBIKE = bike_station[i].LOCKNUM;
          let site_NOWBIKE = bike_station[i].LOCKNUM - bike_station[i].FREESPACES;
          let site_NUMBER = i;
          if(site_NAME==site_name){
            this.station=site_NAME;
            let echart_freebike = site_NOWBIKE;
            let echart_locknumber = site_MAXBIKE;
            let echart_usernumber = site_NOWBIKE-11;
            this.PRBicycle_OD_echart11(site_NAME,echart_freebike,echart_locknumber,echart_usernumber);
            testnumber = 1;
            break;
          }
        }

      }

      if(testnumber==0){
        alert("请输入正确车站名")
      }

    }
  },
  mounted() {
    this.input=this.station
    this.PRBicycle_OD_echart11(this.station,this.echart_freebike1,this.echart_locknumber1,this.echart_usernumber1)
    let myDate = new Date();
    let time11 = myDate.getTime();
    let echart12=new Array
    echart12=[1,2,3,4,5,6,7,8,9,10];
    echart12.splice(0, echart12.length);
    for (let i = 0; i < 7; i++) {
      echart12[i] = this.timestampToTime(time11+86400000*i);
    }
    console.log(echart12)
    this.PRBicycle_OD_echart12(echart12)
  }

}
</script>

<style>
#search{
  position: absolute;
  top:0.1%;
  left:0.1%;
  height:100%;
  width: 100%;
}
#chart1{
  position:absolute;
  top:7%;
  width: 82%;
  height: 20%;
  border:40px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 45 stretch;
}
#chart2{
  position: absolute;
  top: 39%;
  width: 83%;
  height: 49%;
  border: 40px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new1.png") 45 stretch;
}
#chartTitle1{
  position: relative;
  top: -8%;
  height: 15%;
  width: 100%;
}
#chartTitle2{
  position: relative;
  top: -3%;
  height: 10%;
  width: 116%;
  left: -4%;
}
#stationName{
  position: absolute;
  top: 4%;
  left: -2%;
  width: 113%;
}
#stationTime{
  position: relative;
  top: 44%;
  left: -12%;
  width: 98%;
  height: 10%;
}
#startTime{
  position: relative;
  margin-top: 2%;
  margin-left: 2%;
  width: 60%;
}
#endTime{
  position: relative;
  margin-top: -7.7%;
  margin-left: 33%;
  width: 60%;
}
#dateMid{
  position: relative;
  top: 13%;
  width: 24%;
  left: 5%;
}
#searchbutton{
  position: relative;
  top:37%;
  left:60%;
  width:30%
}
#stationChart {
  position: relative;
  top: -8%;
  width: 90%;
  height: 95%;
  padding: 0px 21px;
  color: #ddd;
  z-index: 700;
  margin-top: 5px;
}
#stationChart2 {
  position: relative;
  top: 8%;
  width: 101%;
  height: 79%;
  padding: 0 0;
  color: #ddd;
  z-index: 700;
  right: 0px;
  margin-top: 5px;
}
#bike2{
  position: relative;
  top: 7%;
  width: 50%;
  height: 10%;
}
.chartTitle2 .el-button--primary{
  color: #303133;
  background-color: #fff;
  border-color: #f5f7fa;
}
.chartTitle2 .el-input{
  width: 48%;
  left: 0%;
}
.chartTitle2 .el-input__inner{
  border-radius: 4px;
  border: 2px solid #3d97f6;
  padding-right: 5%;
  background: #19344b;
  opacity: 70%;
  color:#bcd4e8;
  width:100%
}




</style>
