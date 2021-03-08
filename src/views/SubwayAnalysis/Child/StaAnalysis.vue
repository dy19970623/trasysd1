<template>
  <div>
    <div id="MutiStation" class="MutiStation">
      <div id="biaodan1">
        <div id="m1" class="m1">
          <el-select   v-model="station_value1"  :multiple-limit="3" multiple placeholder="请选择站点" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="m2" class="m2">
          <el-select  v-model="a1"   placeholder="请选择时间段" >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="button1">
          <el-button type="primary" @click="chart1change">查询</el-button>
        </div>

      </div>
      <div id="Subway_Flow_chart1" style="margin-left: 18px;width: 395px;height:275px ;"></div>
    </div>
    <div id="SimpleStation" class="SimpleStation">
      <div id="biaodan2">
        <div id="s1" class="s1">
          <el-select v-model="station_value2" placeholder="请选择站点">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div id="s2" class="s2">
          <el-select  v-model="a2"  placeholder="请选择时间段" >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div id="button2">
          <el-button type="primary" @click="chart2change">查询</el-button>
        </div>
      </div>
      <div id="Subway_Flow_chart2" style="margin-left: 18px;width: 395px;height:275px"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"
import axios from "axios"
import {request} from "../../../network/request";
import {graphic} from "echarts/lib/export";

export default {
  name: "leftPane",
  data(){
    return{
      //站点选择控件数据
      options: [
        {
        value: '东单',
        label: '东单'
      }, {
        value: '西单',
        label: '西单'
      }, {
        value: '五棵松',
        label: '五棵松'
      }, {
        value: '五道口',
        label: '五道口'
      }, {
        value: '建国门',
        label: '建国门'
      },
      {
        value: '宣武门',
        label: '宣武门'
      }, {
        value: '公主坟',
        label: '公主坟'
      }, {
        value: '上地',
        label: '上地'
      }, {
        value: '军事博物馆',
        label: '军事博物馆'
      }, {
        value: '北宫门',
        label: '北宫门'
      },
      {
        value: '中关村',
        label: '中关村'
      }, {
        value: '海淀黄庄',
        label: '海淀黄庄'
      }, {
        value: '复兴门',
        label: '复兴门'
      }, {
        value: '国家图书馆',
        label: '国家图书馆'
      }, {
        value: '慈寿寺',
        label: '慈寿寺'
      },
      {
        value: '动物园',
        label: '动物园'
      }, {
        value: '白石桥南',
        label: '白石桥南'
      }, {
        value: '西直门',
        label: '西直门'
      }, {
        value: '车公庄',
        label: '车公庄'
      }, {
        value: '平安里',
        label: '平安里'
      },
      {
        value: '鼓楼大街',
        label: '鼓楼大街'
      }, {
        value: '雍和宫',
        label: '雍和宫'
      }, {
        value: '东直门',
        label: '东直门'
      }, {
        value: '朝阳门',
        label: '朝阳门'
      }, {
        value: '东四',
        label: '东四'
      },
      {
        value: '北京站',
        label: '北京站'
      }, {
        value: '崇文门',
        label: '崇文门'
      }
      ],
      options1:[
        {
          value: '2016-03-02 00:00:00~2016-03-08 00:00:00',
          label: '2016年3月2日~8日'
        }, {
          value: '2016-03-09 00:00:00~2016-03-15 00:00:00',
          label: '2016年3月9日~15日'
        }, {
          value: '2016-03-16 00:00:00~2016-03-25 00:00:00',
          label: '2016年3月16日~25日'
        },
      ],
      options2:[
        {
          value: '2016-03-02 00:00:00~2016-03-07 00:00:00',
          label: '2016年3月2日~7日'
        }, {
          value: '2016-03-03 00:00:00~2016-03-08 00:00:00',
          label: '2016年3月3日~8日'
        }, {
          value: '2016-03-04 00:00:00~2016-03-09 00:00:00',
          label: '2016年3月4日~9日'
        },
      ],
      station_value1: '',
      station_value2: '',
      a1:'',
      a2:'',
    }
  },
  methods:{
    //方法：初始化图表1
    initdrawchart1(){
      let Subway_Flow_chart2 = echarts.init(document.getElementById('Subway_Flow_chart1'));
      let Subway_Flow_option2 = {
        textStyle:{
          color:'#FFFFFF'
        },
        title: [{
          text: '多站点分析',
          textStyle:{
            fontSize:21,
            color:'#FFFFFF'
          }
        }],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '12%',
          data:['东单','五道口'],
          textStyle:{
            color:'#FFFFFF'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
        },
        xAxis: {
          axisLabel: {
            interval:0,
            rotate:30
          },
          axisLine: {
            show:true,
            lineStyle: {
              color: "white"
              ,color:'#FFFFFF'
            }
          },

          type: 'category',
          boundaryGap: false,
          data: ['2018-09-01','2018-09-02','2018-09-03']
        },
        yAxis: {
          axisLine: {
            show:false,
            lineStyle: {
              color: "white"
            }
          },
          type: 'value'
          ,splitLine: {
            show: false
          }
        },
        series: [
          {
            name:'东单',
            type:'line',
            stack: '总量',
            data:[25641, 16584,21298]
          },
          {
            name:'五道口',
            type:'line',
            stack: '总量',
            data:[16749, 18126, 23357]
          }
        ]
        , color:['#ff0033', '#0c8c9a']
      };
      Subway_Flow_chart2.setOption(Subway_Flow_option2);
    },
    //方法：初始化图表2
    initdrawchart2(){
      let Subway_Flow_chart1 = echarts.init(document.getElementById('Subway_Flow_chart2'));
      let Subway_Flow_option1 = {
        textStyle:{

          color:'#FFFFFF'
        },
        title: [{
          text: '单站点分析',
          textStyle:{
            color:'#FFFFFF',
            fontSize:21

          }
        }],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: '12%',
          data:['进站人数', '出站人数', '总人数'],
          textStyle:{
            color:'#FFFFFF'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            axisLine: {
              show:true,
              lineStyle: {
                color: "white"
              }
            },
            type : 'value'
          }
        ],
        yAxis : [
          {
            axisLine: {
              lineStyle: {
                color: "white"
              }
            },

            type : 'category',
            axisTick : {show: false},
            //data : ['2018-09-1','2018-09-2','2018-09-3','2018-09-4']
          }
        ],
        series : [
          {
            name:'进站人数',
            type:'bar',
            stack: '总量',
            color: new graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#689EA9'
            }, {
              offset: 1,
              color: '#92C5B0'
            }]),
            label: {
              normal: {
                show: true
              }
            },
            data:[85745, 68974, 78954, 86877]
          },
          {
            name:'出站人数',
            type:'bar',
            stack: '总量',
            color: new graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#4AB3DF'
            }, {
              offset: 1,
              color: '#19344B'
            }]),
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data:[-37587, -49673, -65872, -57698]
          },
        ]
        ,
      };
      Subway_Flow_chart1.setOption(Subway_Flow_option1);
    },
    //方法：后台查询多站数据
    chart1change(){
      //处理控件数据
      let time1=this.a1
      console.log(time1.substring(0,19))
      console.log(time1.substring(20))
      let turnoverRatetimeMINDATE=time1.substring(0,19)
      let turnoverRatetimeMAXDATE=time1.substring(20)
      let stationPlace = this.station_value1;
      let value2 = {};
      value2.MINDATE=turnoverRatetimeMINDATE;
      value2.MAXDATE=turnoverRatetimeMAXDATE;
      if(stationPlace.length == 1){
        value2.STATIONNAME=stationPlace[0];
      }else if(stationPlace.length == 2){
        value2.STATIONNAME=stationPlace[0];
        value2.STATIONNAME1=stationPlace[1];
      }else{
        value2.STATIONNAME=stationPlace[0];
        value2.STATIONNAME1=stationPlace[1];
        value2.STATIONNAME2=stationPlace[2];
      }
      //axios后台返回数据
      axios.post('http://10.100.54.135:8080/TraSysC/subway/findBynameanddate',value2)
        .then(res=>{
          let e=JSON.parse(JSON.stringify(res.data))
          console.log(e)

          for(let i = 0; i<e.msg.length; i++){
            let toTurntime = new Date(e.msg[i].STARTTIME);
            let Y = toTurntime.getFullYear() + '-';
            let M = (toTurntime.getMonth()+1 < 10 ? '0'+(toTurntime.getMonth()+1) : toTurntime.getMonth()+1) + '-';
            let D = toTurntime.getDate() + ' ';
            e.msg[i].STARTTIME=Y+M+D;
          }
          let  stationtime=[];
          for(let i = 0; i < e.msg.length; i++){
            if(i==0){
              stationtime[0]=e.msg[0].STARTTIME;
            }else{
              let a = 0;
              for(let j = 0; j < stationtime.length; j++){
                if(e.msg[i].STARTTIME == stationtime[j]){
                  break;
                }else{
                  a=1;
                }
                if(a==1&&j== stationtime.length-1){
                  if(e.msg[i].STARTTIME != stationtime[j]){
                    stationtime.push(e.msg[i].STARTTIME);
                  }
                }
              }
            }
          }
          stationtime.sort(function (a, b) {
            return a>b?1:-1;
          });

          let stationtimeput = [];
          for(let i=0;i<stationtime.length;i++)
          { stationtimeput.push(stationtime[i]); }
          //分类数据，站点是1个的进行展示
          if(stationPlace.length == 1){
            let residuePeople1=[];
            for(let i=0;i<stationtime.length;i++){
              residuePeople1.push(0);
            }
            for(let i=0;i<e.msg.length;i++){
              switch(e.msg[i].STARTTIME){
                case stationtime[0]:
                  residuePeople1[0]=residuePeople1[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                  break;
                case stationtime[1]:
                  residuePeople1[1]=residuePeople1[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                  break;
                case stationtime[2]:
                  residuePeople1[2]=residuePeople1[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                  break;
                case stationtime[3]:
                  residuePeople1[3]=residuePeople1[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))

                  break;
                case stationtime[4]:
                  residuePeople1[4]=residuePeople1[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                  break;
                case stationtime[5]:
                  residuePeople1[5]=residuePeople1[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                  break;
                default:
                  residuePeople1[6]=residuePeople1[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
              }
            }
            let Subway_Flow_chart2 = echarts.init(document.getElementById('Subway_Flow_chart1'));
            let Subway_Flow_option2 = {
              textStyle:{

                color:'#FFFFFF'
              },
              title: [{
                text: '多站点分析',
                textStyle:{
                  fontSize:21
                  ,color:'#FFFFFF'
                }
              }
              ],
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                top: '12%',
                data:stationPlace,
                textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
              },
              xAxis: {
                axisLabel: {
                  interval:0,
                  rotate:30
                },
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'category',
                boundaryGap: false,
                data: stationtimeput
              },
              yAxis: { axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'value'
                ,splitLine: {
                  show: false
                }
              },
              series: [
                {
                  name:stationPlace[0],
                  type:'line',
                  stack: '总量',
                  data:residuePeople1
                }
              ]
              , color:['#ff0033', '#0c8c9a', '#FF6633']
            };


            Subway_Flow_chart2.setOption(Subway_Flow_option2,true);
          }else if(stationPlace.length == 2){
            //分类数据，站点是2个的进行展示
            let residuePeople1=[];
            let residuePeople2=[];
            for(let i=0;i<stationtime.length;i++){
              residuePeople1.push(0);
              residuePeople2.push(0);
            }
            for(let i=0;i<e.msg.length;i++){
              if(e.msg[i].STATIONNAME == stationPlace[0]){
                switch(e.msg[i].STARTTIME){
                  case stationtime[0]:
                    residuePeople1[0]=residuePeople1[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[1]:
                    residuePeople1[1]=residuePeople1[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[2]:
                    residuePeople1[2]=residuePeople1[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[3]:
                    residuePeople1[3]=residuePeople1[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[4]:
                    residuePeople1[4]=residuePeople1[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[5]:
                    residuePeople1[5]=residuePeople1[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  default:
                    residuePeople1[6]=residuePeople1[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                }
              }else{
                switch(e.msg[i].STARTTIME){
                  case stationtime[0]:
                    residuePeople2[0]=residuePeople2[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[1]:
                    residuePeople2[1]=residuePeople2[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[2]:
                    residuePeople2[2]=residuePeople2[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[3]:
                    residuePeople2[3]=residuePeople2[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[4]:
                    residuePeople2[4]=residuePeople2[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  case stationtime[5]:
                    residuePeople2[5]=residuePeople2[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                    break;
                  default:
                    residuePeople2[6]=residuePeople2[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                }
              }

            }
            let Subway_Flow_chart2 = echarts.init(document.getElementById('Subway_Flow_chart1'));
            let Subway_Flow_option2 = {
              textStyle:{

                color:'#FFFFFF'
              },
              title: [{
                text: '多站点分析',
                textStyle:{
                  fontSize:15
                  ,color:'#FFFFFF'
                }
              }],
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                top: '12%',
                data:stationPlace
                ,
                textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
              },
              xAxis: {
                axisLabel: {
                  interval:0,
                  rotate:30
                },
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'category',
                boundaryGap: false,
                data: stationtimeput
              },
              yAxis: { axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'value'
                ,splitLine: {
                  show: false
                }
              },
              series: [
                {
                  name:stationPlace[0],
                  type:'line',
                  stack: '总量',
                  data:residuePeople1
                },
                {
                  name:stationPlace[1],
                  type:'line',
                  stack: '总量',
                  data:residuePeople2
                }
              ]
              , color:['#ff0033', '#0c8c9a', '#e81e87']
            };
            Subway_Flow_chart2.setOption(Subway_Flow_option2,true);
          }else{
            //分类数据，站点是3个的进行展示
            let residuePeople1=[];
            let residuePeople2=[];
            let residuePeople3=[];
            for(let i=0;i<stationtime.length;i++){
              residuePeople1.push(0);
              residuePeople2.push(0);
              residuePeople3.push(0);
            }
            for(let i=0;i<e.msg.length;i++){
              if(e.msg[i].STATIONNAME == stationPlace[0]){
                switch(e.msg[i].STARTTIME){
                  case stationtime[0]:
                    residuePeople1[0]=residuePeople1[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[1]:
                    residuePeople1[1]=residuePeople1[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[2]:
                    residuePeople1[2]=residuePeople1[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[3]:
                    residuePeople1[3]=residuePeople1[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[4]:
                    residuePeople1[4]=residuePeople1[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[5]:
                    residuePeople1[5]=residuePeople1[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  default:
                    residuePeople1[6]=residuePeople1[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                }
              }else if(e.msg[i].STATIONNAME == stationPlace[1]){
                switch(e.msg[i].STARTTIME){
                  case stationtime[0]:
                    residuePeople2[0]=residuePeople2[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[1]:
                    residuePeople2[1]=residuePeople2[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[2]:
                    residuePeople2[2]=residuePeople2[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[3]:
                    residuePeople2[3]=residuePeople2[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[4]:
                    residuePeople2[4]=residuePeople2[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[5]:
                    residuePeople2[5]=residuePeople2[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  default:
                    residuePeople2[6]=residuePeople2[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                }
              }else{
                switch(e.msg[i].STARTTIME){
                  case stationtime[0]:
                    residuePeople3[0]=residuePeople3[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[1]:
                    residuePeople3[1]=residuePeople3[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[2]:
                    residuePeople3[2]=residuePeople3[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[3]:
                    residuePeople3[3]=residuePeople3[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[4]:
                    residuePeople3[4]=residuePeople3[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  case stationtime[5]:
                    residuePeople3[5]=residuePeople3[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                    break;
                  default:
                    residuePeople3[6]=residuePeople3[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                }

              }

            }
            let Subway_Flow_chart2 = echarts.init(document.getElementById('Subway_Flow_chart1'));
            let Subway_Flow_option2 = {
              textStyle:{

                color:'#FFFFFF'
              },
              title: [{
                text: '多站点分析',
                textStyle:{
                  fontSize:21
                  ,color:'#FFFFFF'
                }
              }],
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                top: '12%',
                data:stationPlace,
                textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
              },
              xAxis: {
                axisLabel: {
                  interval:0,
                  rotate:30
                },
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'category',
                boundaryGap: false,
                data: stationtimeput
              },
              yAxis: { axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type: 'value'
                ,splitLine: {
                  show: false
                }
              },
              series: [
                {
                  name:stationPlace[0],
                  type:'line',
                  stack: '总量',
                  data:residuePeople1
                },
                {
                  name:stationPlace[1],
                  type:'line',
                  stack: '总量',
                  data:residuePeople2
                },
                {
                  name:stationPlace[2],
                  type:'line',
                  stack: '总量',
                  data:residuePeople3
                }
              ]
              , color:['#ff0033', '#0c8c9a', '#FF6633']
            };


            Subway_Flow_chart2.setOption(Subway_Flow_option2,true);
          }


        })


    },
    //方法：后台查询单站数据
    chart2change(){
      let time1=this.a2
      console.log(time1.substring(0,19))
      console.log(time1.substring(20))
      let turnoverRatetimeMINDATE=time1.substring(0,19)
      let turnoverRatetimeMAXDATE=time1.substring(20)
      let stationPlace = this.station_value2;
      let value1 = {
        STATIONNAME : stationPlace,
        MINDATE : turnoverRatetimeMINDATE,
        MAXDATE : turnoverRatetimeMAXDATE
      };
      //let value=JSON.stringify(value1)
      axios.post('http://10.100.54.135:8080/TraSysC/subway/findBynameanddate',value1)
        .then(res=>{
          let e=JSON.parse(JSON.stringify(res.data))
          console.log(e)
          for(let i = 0; i<e.msg.length; i++){
            let toTurntime1 = new Date(e.msg[i].STARTTIME);
            let Y = toTurntime1.getFullYear() + '-';
            let M = (toTurntime1.getMonth()+1 < 10 ? '0'+(toTurntime1.getMonth()+1) : toTurntime1.getMonth()+1) + '-';
            let D = toTurntime1.getDate() + ' ';
            e.msg[i].STARTTIME=Y+M+D;
            let toTurntime2 = new Date(e.msg[i].ENDTIME);
            let Y1 = toTurntime2.getFullYear() + '-';
            let M1 = (toTurntime2.getMonth()+1 < 10 ? '0'+(toTurntime2.getMonth()+1) : toTurntime2.getMonth()+1) + '-';
            let D1 = toTurntime2.getDate() + ' ';
            e.msg[i].ENDTIME=Y1+M1+D1;
          }
          //把时间进行排序，同时删除重复时间
          let  stationtime=[];
          for(let i = 0; i < e.msg.length; i++){
            if(i==0){
              stationtime[0]=e.msg[0].STARTTIME;
            }else{
              let a = 0;
              for(let j = 0; j < stationtime.length; j++){
                if(e.msg[i].STARTTIME == stationtime[j]){
                  break;
                }else{
                  a=1;
                }
                if(a==1&&j== stationtime.length-1){
                  if(e.msg[i].STARTTIME != stationtime[j]){
                    stationtime.push(e.msg[i].STARTTIME);
                  }
                }
              }
            }
          }
          stationtime.sort(function (a, b) {
            return a>b?1:-1;
          });
          //提取时间值
          let stationTimeput = [];
          for(let i=0;i<stationtime.length;i++){
            stationTimeput.push(stationtime[i]);
          }

          //数据
          let entryPeople=[];   //进站人数
          let exitPeople=[];    //出站人数
          let residuePeople=[]; //剩余人数
          for(let i=0;i<stationtime.length;i++){
            entryPeople.push(0);
            exitPeople.push(0);
            residuePeople.push(0);
          }

          for(let i=0;i<e.msg.length;i++){
            //把相同时间的进、出站人数相加
            switch(e.msg[i].STARTTIME){
              case stationtime[0]:
                entryPeople[0]= entryPeople[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[0]= exitPeople[0]+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                residuePeople[0]=residuePeople[0]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                break;
              case stationtime[1]:
                entryPeople[1]= entryPeople[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[1]= exitPeople[1]+parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[1]=residuePeople[1]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                break;
              case stationtime[2]:
                entryPeople[2]= entryPeople[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[2]= exitPeople[2]+parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[2]=residuePeople[2]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                break;
              case stationtime[3]:
                entryPeople[3]= entryPeople[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[3]= exitPeople[3]+parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[3]=residuePeople[3]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                break;
              case stationtime[4]:
                entryPeople[4]= entryPeople[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[4]= exitPeople[4]+parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[4]=residuePeople[4]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
                break;
              case stationtime[5]:
                TentryPeople[5]=TentryPeople[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[5]=exitPeople[5]+ parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[5]=residuePeople[5]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT))
                break;
              default:
                entryPeople[6]= entryPeople[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT);
                exitPeople[6]= exitPeople[6]+parseFloat(e.msg[i].TOTALEXITCOUNT);
                residuePeople[6]=residuePeople[6]+parseFloat(e.msg[i].TOTALENTRYCOUNT)+parseFloat(parseFloat(e.msg[i].TOTALEXITCOUNT));
            }
          }
          //echarts表内容
          for(let i=0;i<exitPeople.length;i++){
            exitPeople[i]=0-exitPeople[i];
          }
          let Subway_Flow_chart1 = echarts.init(document.getElementById('Subway_Flow_chart2'));
          let Subway_Flow_option1 = {
            textStyle:{

              color:'#FFFFFF'
            },
            title: [{
              text: '单站点分析',
              textStyle:{
                color:'#FFFFFF',
                fontSize:21
              }
            }],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              textStyle:{
                color:'#FFFFFF'
              },
              top: '12%',
              data:['进站人数', '出站人数', '总人数']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              { axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type : 'value'
              }
            ],
            yAxis : [
              { axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },

                type : 'category',
                axisTick : {show: false},
                data : stationTimeput
              }
            ],
            series : [
              {
                name:'进站人数',
                type:'bar',
                stack: '总量',
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#689EA9'
                }, {
                  offset: 1,
                  color: '#92C5B0'
                }]),
                label: {
                  normal: {
                    show: true
                  }
                },
                data:entryPeople
              },
              {
                name:'出站人数',
                type:'bar',
                stack: '总量',
                color: new graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#4AB3DF'
                }, {
                  offset: 1,
                  color: '#19344B'
                }]),
                label: {
                  normal: {
                    show: true,
                    position: 'inside'
                  }
                },
                data:exitPeople
              }
            ]
          };
          Subway_Flow_chart1.setOption(Subway_Flow_option1,true);
      })


    }
  },
  mounted() {
    this.initdrawchart1()
    this.initdrawchart2()
  }
}
</script>

<style>
#MutiStation{
  position: absolute;
  height: 40%;
  width:80%;
  top:1%;
  left:5%;
  border:40px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border2.png") 45 stretch;
}
#SimpleStation{
  height: 40%;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 5%;
  border:40px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border2.png") 45 stretch;
}
#biaodan1{
  position: relative;
  top:0.1%;
  height:40%;
  width: 100%;
}
#biaodan2{
  position: relative;
  top:0.1%;
  height:40%;
  width: 100%;
}
#m1{
  position: relative;
  width: 100%;
}
.m1 .el-select{
  width:100%
}
#m2{
  position: relative;
  width: 80%;
  top: 5%;
}
.m2 .el-select{
  width: 100%;
}
#s1{
  position: relative;
  width: 100%;
}
.s1 .el-select{
  width:100%
}

#s2{
  position: relative;
  width: 80%;
  top: 5%;
}
.s2 .el-select{
  width: 100%;
}

#button1{
  position: relative;
  margin-top:-7%;
  left:82%;
  width: 10%;
}
#button2{
  position: relative;
  margin-top:-7%;
  left:82%;
  width: 10%;
}
#Subway_Flow_chart1{
  position: relative;
  margin-top:-7%;
  height: 40%;
  width: 100%;
}
#Subway_Flow_chart2{
  position: relative;
  margin-top:-7%;
  height: 40%;
  width: 100%;
}

.MutiStation .el-button--primary{
  color: #303133;
  background-color: #fff;
  border:0px;
  box-shadow: 2px 2px 5px rgba(153, 153, 153, 1);
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  font-size: 17px;
}
.MutiStation .el-input__inner{
  border-radius: 4px;
  border: 2px solid #409eff;
  padding-right: 47%;
  background-color: #606266;
  color: #fff;
  width:100%
}
.SimpleStation .el-button--primary{
  color: #303133;
  background-color: #fff;
  border:0px;
  box-shadow: 2px 2px 5px rgba(153, 153, 153, 1);
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  font-size: 17px;
}
.SimpleStation .el-input__inner{
  border-radius: 4px;
  border: 2px solid #409eff;
  padding-right: 47%;
  background-color: #606266;
  color: #fff;
  width:100%
}
.MutiStation .el-scrollbar__wrap{
  background-color: #606266
}


</style>
