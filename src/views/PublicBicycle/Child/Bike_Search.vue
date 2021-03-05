<template>
  <div>
    <div>
      <legend id="bikename1" style="margin-bottom:0px;color:white;" v-model="station">{{station}}基本情况</legend>
      <p style="color:white;font-size: 12px;position: absolute;left: 218px;top: 59px;">2015年4月7日数据</p>
    </div>
    <div id="stationChart"></div>
    <div>
      <div id="dateMid" style="color:white; font-size: 17px;">车站名称：</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" @click="this.find">查询</el-button>
    </div>
    <div> <legend id="bikename2" style="margin-bottom:0px;margin-top:20px;color:white;"v-model="station">{{station}}历史情况</legend></div>
    <div id="stationChart2"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import bikesitedata from "../../../assets/js/PRBicycle_OD/PRBicycle_siteData.js"
export default {
  name: "Bike_Search",
  data() {
    return {
      station:"百万庄大街站",
      echart_freebike1:"6",
      echart_locknumber1:"30",
      echart_usernumber1 :"5",
      input: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
        backgroundColor: 'rgba(255,255,255,0.1)',
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
          bottom: 60,
          left: 63,
          text: '闲置车辆',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "rgba(241,192,73,1.0)"
          },
        }, {
          x: "20%",
          bottom: 60,
          left: 171,
          text: '锁位数量',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: "rgba(48,230,142,1.0)"
          },
        }, {
          x: "60%",
          bottom: 60,
          left: 275,
          text: '流动情况',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
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
          radius: ['25%', '30%'],
          center: ['25%', '50%'],
          data: [{
            value: echart_freebike,
            name: '当前闲置车辆',
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
          center: ['25%', '50%'], //饼图的中心（圆心）坐标
          radius: ['0%', '25%'],
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
          radius: ['25%', '30%'],
          center: ['51%', '50%'],
          data: [{
            value: echart_locknumber,
            name: '车站锁位数量',
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
          center: ['51%', '50%'], //饼图的中心（圆心）坐标
          radius: ['0%', '25%'],
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
          radius: ['25%', '30%'],
          center: ['77%', '50%'],
          data: [{
            value: echart_usernumber,
            name: '车辆流动情况',
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
          radius: ['0%', '25%'],
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
      let starttime = this.value1[0];
      let endtime = this.value1[1];
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

<style scoped>
#stationChart {
  width: 400px;
  height: 265px;
  padding: 0 0;
  color: #ddd;
  z-index: 700;
  right: 0px;
  margin-top: 5px;
}
#stationChart2 {
  top: 0px;
  width: 400px;
  height: 330px;
  padding: 0 0;
  color: #ddd;
  z-index: 700;
  right: 0px;
  margin-top: 5px;
}

</style>
