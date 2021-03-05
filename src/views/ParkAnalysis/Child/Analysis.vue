<template>
  <div>
   <div  id="a1" >
     <div class="block" id="block1">
       <el-select v-model="value1" style="width:300px;height:30px;" placeholder="请选择">
         <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
       </el-select>
     </div>
     <div id="button1" >
      <el-button round style="height:32px" id="selecttime" @click="selectTop">查询</el-button>
     </div>
   </div>

   <div id="a2" >
     <div id="chart_1" ref="chart_1" >
     </div>
   </div>

   <div id="a3"  >
     <div style="height:40px;width: 230px">
     <el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
       <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
     </el-select>
     </div>
     <div class="block" id="block2">
       <el-select v-model="value3" style="width:300px;height:30px;" placeholder="请选择">
         <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
       </el-select>
     </div>
     <div id="button2"  >
       <el-button round style="height:32px" id="selectturnover" @click="GetInformation">查询</el-button>
     </div>
   </div>

   <div id="a4">
     <div id="chart_2" ref="chart_2" >
     </div>
   </div>

  </div>
</template>

<script>
  //import {request,dopost} from "../../network/request";
  import {data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data94,data95,data96,data97,data98,data99} from "../../../assets/js/ParkAnalysis/data99";
    export default {
        data(){
          return {
            options1:[{
              value:'2017-01-03 00:00:00 - 2017-01-06 00:00:00',
              label:'2017-01-03 00:00:00 - 2017-01-06 00:00:00'
             },
              {
                value:'2019-09-04 00:00:00 - 2019-09-07 00:00:00',
                label:'2019-09-04  00:00:00 - 2019-09-07 00:00:00'
              },
              {
                value:'2019-12-12 00:00:00 - 2019-12-14 00:00:00',
                label:'2019-12-12 00:00:00 - 2019-12-14 00:00:00'
              },
              {
                value:'2016-12-01 00:00:00 - 2016-12-03 00:00:00',
                label:'2016-12-01 00:00:00 - 2016-12-03 00:00:00'
              },

            ],
            options2:[{
              value: '北京青年宫停车场',
              label: '北京青年宫'
            }, {
              value: '人民医院停车场',
              label: '人民医院'
            }, {
              value: '北京北站停车场',
              label: '北京北站'
            }, {
              value: '成铭大厦停车场',
              label: '成铭大厦'
            }, {
              value: '西环广场停车场',
              label: '西环广场'
            }, {
              value: '华远企业中心停车场',
              label: '华远中心'
            }, {
              value: '世纪金贸大厦停车场',
              label: '金贸大厦'
            }, {
              value: '北京展览馆停车场',
              label: '北京展览馆'
            }, {
              value: '西外地下停车场',
              label: '西外地下'
            }, {
              value: '阳光大厦停车场',
              label: '阳光大厦'
            }, {
              value: '北京动物园停车场',
              label: '北京动物园'
            }, {
              value: '惠通永源停车场',
              label: '惠通永源'
            }, {
              value: '世纪天乐停车场',
              label: '世纪天乐'
            }, {
              value: '新大都饭店',
              label: '新大都饭店'
            }, {
              value: '物华大厦停车场',
              label: '物华大厦'
            }, {
              value: '中海国际中心停车场',
              label: '中海国际'
            }],
            value1:[],
            value2:[],
            value3:[],

          }

        },
      mounted() {
          this.init1()
      },
      components:{

      },
      methods:{
        init1(){
            //********************************    chart1默认渲染的echarts  *********************************
            //echarts表1内容
            //初始值
            let chart1 = this.$echarts.init(document.getElementById('chart_1'));
            let  builderJson={}; //这部分和下面是重复的   从这里到475行
            builderJson.charts={};
            builderJson.components={};
            for(let i=0;i<data10.value.length;i++){
              let Name = data10.value[i].name;//echarts图表名称从数据库提取
              builderJson.charts[Name] = data10.value[i].zhouzhuan;
            };
            for(let i=0;i<data11.value.length;i++){
              let Name2 = data11.value[i].name;//echarts图表名称从数据库提取
              builderJson.components[Name2] = data11.value[i].zhouzhuan;
            };
            //echarts图表定义内容
            let waterMarkText = 'ECHARTS';
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = canvas.height = 100;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.globalAlpha = 0.08;
            ctx.font = '20px Microsoft Yahei';
            ctx.translate(50, 50);
            ctx.rotate(-Math.PI / 4);
            ctx.fillText(waterMarkText, 0, 0);
            //此处为echarts图表
             let option1= {
              textStyle:{
                color:'#FFFFFF'
              },
              tooltip: {},
              title: [{
                text: '停车场流量最高TOP5',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }

              },{
                text: '停车场流量最低TOP5',
                fontSize:15,color:'#FFFFFF',
                y: '50%',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }

              }],
              grid: [{
                top: 35,
                width: '95%',
                bottom: '55%',
                left: 10,
                containLabel: true
              }, {
                top: '60%',
                width: '95%',
                bottom: 20,
                left: 10,
                containLabel: true
              }],
              xAxis: [{
                axisLabel: {
                  interval:0,
                  rotate:30
                },
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },
                type: 'value',
                max: builderJson.all,
                splitLine: {
                  show: false
                }
              }, {
                axisLabel: {
                  interval:0,
                  rotate:30
                },
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },
                type: 'value',
                max: builderJson.all,
                gridIndex: 1,
                splitLine: {
                  show: false
                }
              }],
              yAxis: [{
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },
                type: 'category',
                data: Object.keys(builderJson.charts),
                axisLabel: {
                  interval: 0,
                  rotate: 0
                },
                splitLine: {
                  show: false
                }
              }, {
                axisLine: {
                  lineStyle: {
                    color: "white"
                  }
                },
                gridIndex: 1,
                type: 'category',
                data: Object.keys(builderJson.components),
                axisLabel: {
                  interval: 0,
                  rotate: 0
                },
                splitLine: {
                  show: false
                }
              }],
              series: [{
                type: 'bar',
                stack: 'chart',
                z: 3,
                label: {
                  normal: {
                    show: true
                  }
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.charts[key];
                })
              }, {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                  normal: {
                    color: '#eee'
                  }
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.all - builderJson.charts[key];
                })
              }, {
                type: 'bar',
                stack: 'component',
                xAxisIndex: 1,
                yAxisIndex: 1,
                z: 3,
                label: {
                  normal: {

                    show: true
                  }
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.components[key];
                })
              }, {
                type: 'bar',
                stack: 'component',
                silent: true,
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                  normal: {
                    color: '#eee'
                  }
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.all - builderJson.components[key];
                })
              }] ,
               color:['#6495ED','#91c7ae']
            };
            chart1.setOption(option1); //到这里

            //********************************    chart2默认渲染的echarts  *********************************

            let chart2 = this.$echarts.init(document.getElementById('chart_2'));
            let  Parkingtime={};
            let  Parkingname={};
            let  Parkingzhouzhuan0={};
            let Parkingzhouzhuan1={};
            let  Parkingzhouzhuan2={};
            Parkingtime[0]=data12.value[0].time;
            let b=0;
            //查询数据中不同时间，放入数组中
            for(let i = 0; i<data12.value.length; i++){

              if(data12.value[i].time != Parkingtime[b]){
                b++;
                Parkingtime[b]=data12.value[i].time;
              }
            }
            let Parkingtimeput = [];
            for(let i=0;i<5;i++)
            { Parkingtimeput.push(Parkingtime[i]); }

            Parkingname[0]=data12.value[0].name;
            Parkingname[1]=data12.value[1].name;
            Parkingname[2]=data12.value[2].name;
            let Parkingnameput = [];
            for(let i=0;i<5;i++)
            { Parkingnameput.push(Parkingname[i]); }
            var c=0;
            for(let i = 0; i<data12.value.length; i++){
              if(data12.value[i].name === Parkingname[0]){
                Parkingzhouzhuan0[c]=data12.value[i].zhouzhuan;
                c++;
              }
            }
            let Parkingzhouzhuan0put = [];
            for(var i=0;i<5;i++)
            { Parkingzhouzhuan0put.push(Parkingzhouzhuan0[i]); }
            var c=0;
            for(let i = 0; i<data12.value.length; i++){
              if(data12.value[i].name === Parkingname[1]){
                Parkingzhouzhuan1[c]=data12.value[i].zhouzhuan;
                c++;
              }
            }
            let Parkingzhouzhuan1put = [];
            for(let i=0;i<5;i++)
            { Parkingzhouzhuan1put.push(Parkingzhouzhuan1[i]); }
            var c=0;
            for(let i = 0; i<data12.value.length; i++){
              if(data12.value[i].name === Parkingname[2]){
                Parkingzhouzhuan2[c]=data12.value[i].zhouzhuan;
                c++;
              }
            }
            let Parkingzhouzhuan2put = [];
            for(let i=0;i<5;i++)
            { Parkingzhouzhuan2put.push(Parkingzhouzhuan2[i]); }

           let option2 = {

              textStyle:{
                color:'#FFFFFF'
              },
              title: [{
                text: '停车场流量分析',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }
              }],
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                top: '10%',
                data:Parkingnameput
                ,textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                top: '25%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  axisLine: {
                    lineStyle: {
                      color: "white"
                    }
                  },
                  type : 'category',
                  data : Parkingtimeput
                }
              ],
              yAxis : [
                {
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
                  name:Parkingname[0],
                  type:'bar',
                  data:Parkingzhouzhuan0put
                },
                {
                  name:Parkingname[1],
                  type:'bar',
                  data:Parkingzhouzhuan1put
                },
                {
                  name:Parkingname[2],
                  type:'bar',
                  data:Parkingzhouzhuan2put
                }
              ]
              , color:['#91c7ae', '#61a0a8', '#6495ED']
            };
            chart2.setOption(option2);
          },

          //************************************** 第一个查询按钮实现的功能**********************************************
        selectTop(){
          let randomvalue =Math.floor(Math.random()*5);
          let datatestTOP = {};
          let datatestLOW = {};
          let datatestFREE = {};
          switch(randomvalue)
          {
            case 1:
              datatestTOP =data13;
              datatestLOW =data14;
              datatestFREE =data98;
              break;
            case 2:
              datatestTOP =data15;
              datatestLOW =data16;
              datatestFREE =data97;
              break;
            case 3:
              datatestTOP =data17;
              datatestLOW =data18;
              datatestFREE =data96;
              break;
            case 4:
              datatestTOP =data19;
              datatestLOW =data20;
              datatestFREE =data95;
              break;
            default:
              datatestTOP =data21;
              datatestLOW =data22;
              datatestFREE =data94;
          }

          let  builderJson={};
          builderJson.charts={};
          builderJson.components={};
          for(let i=0;i<datatestTOP.value.length;i++){
            let TOPname=datatestTOP.value[i].name;
            builderJson.charts[TOPname] = datatestTOP.value[i].zhouzhuan;
          };
          for(let i=0;i<datatestLOW.value.length;i++){
            let LOWname=datatestLOW.value[i].name;
            builderJson.components[LOWname] = datatestLOW.value[i].zhouzhuan;
          };

          let waterMarkText = 'ECHARTS';
          let chart11 =this.$echarts.init(document.getElementById('chart_1'));
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          canvas.width = canvas.height = 100;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.globalAlpha = 0.08;
          ctx.font = '20px Microsoft Yahei';
          ctx.translate(50, 50);
          ctx.rotate(-Math.PI / 4);
          ctx.fillText(waterMarkText, 0, 0);

          let option11 = {

            textStyle:{
              color:'#FFFFFF'
            },
            tooltip: {},
            title: [{
              text: '停车场流量最高TOP5',
              textStyle:{
                fontSize:15,color:'#FFFFFF'
              }
              //textAlign: 'center'
            }/*, {
        		        text: '停车场类型分布',
        		        fontSize:15,color:'#FFFFFF',
        		        x: '50%',
        		        textStyle:{
        		            fontSize:15,color:'#FFFFFF'
        		        }
        		        //textAlign: 'center'
        		    }*/, {
              text: '停车场流量最低TOP5',
              y: '50%',
              textStyle:{
                fontSize:15,color:'#FFFFFF'
              }
              //textAlign: 'center'
            }],
            grid: [{
              top: 35,
              width: '95%',
              bottom: '55%',
              left: 10,
              containLabel: true
            }, {
              top: '60%',
              width: '95%',
              bottom: 20,
              left: 10,
              containLabel: true
            }],
            xAxis: [{
              axisLabel: {
                interval:0,
                rotate:30
              },
              axisLine: {
                lineStyle: {
                  color: "white"
                }
              },
              type: 'value',
              max: builderJson.all,
              splitLine: {
                show: false
              }
            }, {
              axisLabel: {
                interval:0,
                rotate:30
              },
              axisLine: {
                lineStyle: {
                  color: "white"
                }
              },
              type: 'value',
              max: builderJson.all,
              gridIndex: 1,
              splitLine: {
                show: false
              }
            }],
            yAxis: [{
              axisLine: {
                lineStyle: {
                  color: "white"
                }
              },
              type: 'category',
              data: Object.keys(builderJson.charts),
              axisLabel: {
                interval: 0,
                rotate: 0
              },
              splitLine: {
                show: false
              }
            }, {
              axisLine: {
                lineStyle: {
                  color: "white"
                }
              },
              gridIndex: 1,
              type: 'category',
              data: Object.keys(builderJson.components),
              axisLabel: {
                interval: 0,
                rotate: 0
              },
              splitLine: {
                show: false
              }
            }],
            series: [{
              type: 'bar',
              stack: 'chart',
              z: 3,
              label: {
                normal: {

                  show: true
                }
              },
              data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.charts[key];
              })
            }, {
              type: 'bar',
              stack: 'chart',
              silent: true,
              itemStyle: {
                normal: {
                  color: '#eee'
                }
              },
              data: Object.keys(builderJson.charts).map(function (key) {
                return builderJson.all - builderJson.charts[key];
              })
            }, {
              type: 'bar',
              stack: 'component',
              xAxisIndex: 1,
              yAxisIndex: 1,
              z: 3,
              label: {
                normal: {

                  show: true
                }
              },
              data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.components[key];
              })
            }, {
              type: 'bar',
              stack: 'component',
              silent: true,
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: '#eee'
                }
              },
              data: Object.keys(builderJson.components).map(function (key) {
                return builderJson.all - builderJson.components[key];
              })
            }]
            , color:['#6495ED','#91c7ae']
          };
          chart11.setOption(option11,true);
        },
        //******************************************  第二个查询按钮实现  **********************************************
          GetInformation(){
           // request({
           //   url:'/park/findBynameanddate',
           // }).then(res =>{
           //   console.log(res)
           //   this.selectAna(res)
           // }).catch(err => {
           //   console.log(err);
           // });

           dopost({
             url: '/park/findBynameanddate',
             data:''
           }).then(res => {
             console.log(res)
             this.selectAna(res)
           })
          },

        selectAna(e){
          let chart22 = this.$echarts.init(document.getElementById('chart_2'));
          let parkPlace = {};
          parkPlace =this.value2;
          let turnoverratetime=this.value3;
          let turnoverratetimeMINDATE=turnoverratetime.substring(0,20);
          let turnoverratetimeMAXDATE=turnoverratetime.substring(22);
          //分别针对不同情况将不同需求的值插入value中
          let value = {};
          value.MINDATE=turnoverratetimeMINDATE;
          value.MAXDATE=turnoverratetimeMAXDATE;
          if(parkPlace.length == 1){
            value.FULLNAME=parkPlace[0];
          }else if(parkPlace.length == 2){
            value.FULLNAME=parkPlace[0];
            value.FULLNAME1=parkPlace[1];
          }else{
            value.FULLNAME=parkPlace[0];
            value.FULLNAME1=parkPlace[1];
            value.FULLNAME2=parkPlace[2];
          }
          for(let i = 0; i<e.msg.length; i++){
            let toTurntime = new Date(e.msg[i].DATETIME);
            let Y = toTurntime.getFullYear() + '-';
            let M = (toTurntime.getMonth()+1 < 10 ? '0'+(toTurntime.getMonth()+1) : toTurntime.getMonth()+1) + '-';
            let D = toTurntime.getDate() + ' ';
            e.msg[i].DATETIME=Y+M+D;
          }
          //坐标横轴
          let  Parkingtime=[];
          for(let i = 0; i < e.msg.length; i++){
            if(i==0){
              Parkingtime[0]=e.msg[0].DATETIME;
            }else{
              let a = 0;
              for(let j = 0; j < Parkingtime.length; j++){
                if(e.msg[i].DATETIME == Parkingtime[j]){
                  break;
                }else{
                  a=1;
                }
                if(a==1&&j== Parkingtime.length-1){
                  if(e.msg[i].DATETIME != Parkingtime[j]){
                    Parkingtime.push(e.msg[i].DATETIME);
                  }
                }
              }
            }
          }
          Parkingtime.sort(function (a, b) {
            return a>b?1:-1;
          });

          let Parkingtimeput = [];
          for(let i=0;i<Parkingtime.length;i++)
          { Parkingtimeput.push(Parkingtime[i]); }
          //纵轴
          let Parkingnameput = [];
          for(let i=0;i<parkPlace.length;i++)
          {
            let strPlace=parkPlace[i].split('停')
            Parkingnameput.push(strPlace[0]);
          }

          //数据
          let TURNOVERALL=[];
          for(let i=0;i<Parkingtime.length;i++){
            TURNOVERALL.push(0);
          }

          if(Parkingnameput.length == 1) {
            for(let i=0;i<e.msg.length;i++){
              switch(e.msg[i].DATETIME){
                case Parkingtime[0]:
                  TURNOVERALL[0]= TURNOVERALL[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                case Parkingtime[1]:
                  TURNOVERALL[1]= TURNOVERALL[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                case Parkingtime[2]:
                  TURNOVERALL[2]= TURNOVERALL[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                case Parkingtime[3]:
                  TURNOVERALL[3]= TURNOVERALL[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                case Parkingtime[4]:
                  TURNOVERALL[4]= TURNOVERALL[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                case Parkingtime[5]:
                  TURNOVERALL[5]= TURNOVERALL[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                  break;
                default:
                  TURNOVERALL[6]= TURNOVERALL[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
              }
            }

            let Parkingzhouzhuan0put=[];
            Parkingzhouzhuan0put =TURNOVERALL;
            let option22 = {

              textStyle:{
                color:'#FFFFFF'
              },
              title: [{
                text: '停车场流量分析',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }
              }],
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                top: '10%',
                data:Parkingnameput
                ,textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                top: '25%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  axisLine: {
                    lineStyle: {
                      color: "white"
                    }
                  },
                  type : 'category',
                  data : Parkingtimeput
                }
              ],
              yAxis : [
                {
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
                  name:Parkingnameput[0],
                  type:'bar',
                  data:Parkingzhouzhuan0put
                }
              ]
              , color:['#91c7ae', '#61a0a8', '#6495ED']
            };
            chart22.setOption(option22,true);
           }
         else if(Parkingnameput.length == 2){
            let TURNOVERALL1=[];
            let TURNOVERALL2=[];
            for(let i=0;i<Parkingtime.length;i++){
              TURNOVERALL1.push(0);
              TURNOVERALL2.push(0);
            }
            for(let i=0;i<e.msg.length;i++){
              if(Parkingnameput[0] == e.msg[i].ABBRNAME){
                switch(e.msg[i].DATETIME){
                  case Parkingtime[0]:
                    TURNOVERALL1[0]= TURNOVERALL1[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[1]:
                    TURNOVERALL1[1]= TURNOVERALL1[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[2]:
                    TURNOVERALL1[2]= TURNOVERALL1[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[3]:
                    TURNOVERALL1[3]= TURNOVERALL1[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[4]:
                    TURNOVERALL1[4]= TURNOVERALL1[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[5]:
                    TURNOVERALL1[5]= TURNOVERALL1[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  default:
                    TURNOVERALL1[6]= TURNOVERALL1[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                }
              }else if(Parkingnameput[1] ==e.msg[i].ABBRNAME){
                switch(e.msg[i].DATETIME){
                  case Parkingtime[0]:
                    TURNOVERALL2[0]= TURNOVERALL2[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[1]:
                    TURNOVERALL2[1]= TURNOVERALL2[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[2]:
                    TURNOVERALL2[2]= TURNOVERALL2[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[3]:
                    TURNOVERALL2[3]= TURNOVERALL2[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[4]:
                    TURNOVERALL2[4]= TURNOVERALL2[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[5]:
                    TURNOVERALL2[5]= TURNOVERALL2[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  default:
                    TURNOVERALL2[6]= TURNOVERALL2[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                }
              }
            }
            let Parkingzhouzhuan0put=[];
            Parkingzhouzhuan0put =TURNOVERALL1;
            let Parkingzhouzhuan1put=[];
            Parkingzhouzhuan1put =TURNOVERALL2;
            let option23 = {

              textStyle:{
                color:'#FFFFFF'
              },
              title: [{
                text: '停车场流量分析',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }
              }],
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                top: '10%',
                data:Parkingnameput
                ,textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                top: '25%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  axisLine: {
                    lineStyle: {
                      color: "white"
                    }
                  },
                  type : 'category',
                  data : Parkingtimeput
                }
              ],
              yAxis : [
                {
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
                  name:Parkingnameput[0],
                  type:'bar',
                  data:Parkingzhouzhuan0put
                },{
                  name:Parkingnameput[1],
                  type:'bar',
                  data:Parkingzhouzhuan1put
                }
              ]
              , color:['#91c7ae', '#61a0a8', '#6495ED']
            };
            chart22.setOption(option23,true);
          }
         else{
            let TURNOVERALL1=[];
            let TURNOVERALL2=[];
            let TURNOVERALL3=[];
            for(let i=0;i<Parkingtime.length;i++){
              TURNOVERALL1.push(0);
              TURNOVERALL2.push(0);
              TURNOVERALL3.push(0);
            }
            for(let i=0;i<e.msg.length;i++){
              if(Parkingnameput[0] == e.msg[i].ABBRNAME){
                switch(e.msg[i].DATETIME){
                  case Parkingtime[0]:
                    TURNOVERALL1[0]= TURNOVERALL1[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[1]:
                    TURNOVERALL1[1]= TURNOVERALL1[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[2]:
                    TURNOVERALL1[2]= TURNOVERALL1[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[3]:
                    TURNOVERALL1[3]= TURNOVERALL1[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[4]:
                    TURNOVERALL1[4]= TURNOVERALL1[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[5]:
                    TURNOVERALL1[5]= TURNOVERALL1[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  default:
                    TURNOVERALL1[6]= TURNOVERALL1[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                }
              }else if(Parkingnameput[1] ==e.msg[i].ABBRNAME){
                switch(e.msg[i].DATETIME){
                  case Parkingtime[0]:
                    TURNOVERALL2[0]= TURNOVERALL2[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[1]:
                    TURNOVERALL2[1]= TURNOVERALL2[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[2]:
                    TURNOVERALL2[2]= TURNOVERALL2[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[3]:
                    TURNOVERALL2[3]= TURNOVERALL2[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[4]:
                    TURNOVERALL2[4]= TURNOVERALL2[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[5]:
                    TURNOVERALL2[5]= TURNOVERALL2[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  default:
                    TURNOVERALL2[6]= TURNOVERALL2[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                }
              }else if(Parkingnameput[2] ==e.msg[i].ABBRNAME){
                switch(e.msg[i].DATETIME){
                  case Parkingtime[0]:
                    TURNOVERALL3[0]= TURNOVERALL3[0]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[1]:
                    TURNOVERALL3[1]= TURNOVERALL3[1]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[2]:
                    TURNOVERALL3[2]= TURNOVERALL3[2]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[3]:
                    TURNOVERALL3[3]= TURNOVERALL3[3]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[4]:
                    TURNOVERALL3[4]= TURNOVERALL3[4]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  case Parkingtime[5]:
                    TURNOVERALL3[5]= TURNOVERALL3[5]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                    break;
                  default:
                    TURNOVERALL3[6]= TURNOVERALL3[6]+parseFloat(e.msg[i].INNUM) +parseFloat(e.msg[i].OUTNUM);
                }
              }
            }
            let Parkingzhouzhuan0put=[];
            Parkingzhouzhuan0put =TURNOVERALL1;
            let Parkingzhouzhuan1put=[];
            Parkingzhouzhuan1put =TURNOVERALL2;
            let Parkingzhouzhuan2put=[];
            Parkingzhouzhuan2put =TURNOVERALL3;
            let option24 = {

              textStyle:{
                color:'#FFFFFF'
              },
              title: [{
                text: '停车场流量分析',
                textStyle:{
                  fontSize:15,color:'#FFFFFF'
                }
              }],
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                top: '10%',
                data:Parkingnameput
                ,textStyle:{
                  color:'#FFFFFF'
                }
              },
              grid: {
                top: '25%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  axisLine: {
                    lineStyle: {
                      color: "white"
                    }
                  },
                  type : 'category',
                  data : Parkingtimeput
                }
              ],
              yAxis : [
                {
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
                  name:Parkingnameput[0],
                  type:'bar',
                  data:Parkingzhouzhuan0put
                },{
                  name:Parkingnameput[1],
                  type:'bar',
                  data:Parkingzhouzhuan1put
                },{
                  name:Parkingnameput[2],
                  type:'bar',
                  data:Parkingzhouzhuan2put
                }
              ]
              , color:['#91c7ae', '#61a0a8', '#6495ED']
            };
            chart22.setOption(option24,true);
          }
        },




      },


    }
</script>

<style>
  #a1 {
   margin-top:0;
   height:40px;
 }
  .block {
    margin-top:0px;
    height:35px;
    width:300px;
    float:left;
  }
  #button1 {
    margin-top:0px;
    height:35px;
    width:100px;
    float:right;
  }
  #button2 {
    margin-top:0px;
    height:35px;
    width:100px;
    float:right;
  }
  #chart_1 {
    width: 435px;
    height:330px;
  }
  #a3 {
    width:435px;
    height:100px
  }
  #chart_2 {
    width: 435px;height:200px
  }
</style>
