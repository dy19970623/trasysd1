<!--创建日期：2021年3月1日-->
<!--姓名：曹中浩-->
<!--功能：出租车轨迹-->
<template>
  <div style="height: 100%;width: 100%">
    <div id="Taxi_mainMap">
      <div id="allmap"></div>
    </div>
    <div class="Taxi_Query">
      <p>出租车轨迹查询</p>
      <el-select v-model="value" placeholder="13301104001" @change="select">
        <el-option
          v-for="item in selectID"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="TaxiTrace_traceQuery()">查询</el-button>
      <el-button @click="TaxiTrace_traceClear()">清空</el-button>
      <div id="TaxiTrace_imageInfo">
        <img style="width: 25px; height: 25px" src="../../assets/image/TaxiAnalysis/qidian.png"><span>起点</span><br>
        <img src="../../assets/image/TaxiAnalysis/shangche.png"><span>载客</span><br>
        <img src="../../assets/image/TaxiAnalysis/xiache.png"><span>空载</span><br>
        <img src="../../assets/image/TaxiAnalysis/qita.png"><span>其他</span><br>
        <img src="../../assets/image/TaxiAnalysis/kongzai.png"><span>驻车</span><br>
        <img src="../../assets/image/TaxiAnalysis/zhongdian.png"><span>其他</span><br>
      </div>
    </div>

  </div>
</template>
<script>
  import BMap from 'BMap'
  import global from '../../assets/js/TaxiAnalysis/data'
  import {msg1} from "../../assets/js/TaxiAnalysis/TraceData2"
  import {msg2} from "../../assets/js/TaxiAnalysis/TraceData3"
  import {msg3} from "../../assets/js/TaxiAnalysis/TraceData4"
  import {msg4} from "../../assets/js/TaxiAnalysis/TraceData5"

  let map;
    export default {
        name: "Taxi_Trace",
      data() {
        return {
          selectID: [{
            value: '13301104001',
            label: '13301104001'
          }, {
            value: '13301104002',
            label: '13301104002'
          }, {
            value: '13301104003',
            label: '13301104003'
          }, {
            value: '13301104007',
            label: '13301104007'
          }],
          value:{},
          taxi_msg:{}
        }
      },
      methods:{
          select(value) {
            this.item = this.selectID.find((item) => {
              if (value=="13301104001") {global.select=1}
              if (value=="13301104002") {global.select=2}
              if (value=="13301104003") {global.select=3}
              if (value=="13301104007") {global.select=4}
          })
            global.carID=value
            return global.select
        },
          // 查询
          TaxiTrace_traceQuery(){
            let a=global.select
            if (a==1){this.TaxiTrace_dataTrans1(msg1)}
            if (a==2){this.TaxiTrace_dataTrans1(msg2)}
            if (a==3){this.TaxiTrace_dataTrans1(msg3)}
            if (a==4){this.TaxiTrace_dataTrans1(msg4)}
          },
          // 清除
          TaxiTrace_traceClear(){
            global.dataI=global.carLength-2;

            clearInterval(global.t);
            map.clearOverlays();
          },
          addMarker0:function(carID,point,i,length,carEvent){
          // 创建图标对象
          //事件字段EVENT的值 0、1、2、3、4 分别代表客人下车、客人上车、锁车门、开车门和其他情况，状态字段STATE的值 0、1、2、3、4 分别代表空载、满载、驻车、停运和其他情况
          let imageLu = (i == 0 && 'qidian')||(i == length-1 && 'zhongdian')||(carEvent == 0 && 'xiache')||(carEvent == 1 && 'shangche')||(carEvent == 2 && 'qita')||(carEvent == 10 && 'xiache')||(carEvent == 11 && 'shangche')||(carEvent == 12 && 'qita')||'kongzai';
          //if(i=0){imageLu='起点'};if(i=length){imageLu='终点'};if(carEvent=0) {imageLu='下车'};if(carEvent=1) {imageLu='上车'};if(carEvent=4) {imageLu='其他'};if(carState=0){imageLu='空载'}
            let myIcon = new BMap.Icon(require("../../assets/image/TaxiAnalysis/"+imageLu+".png"), new BMap.Size(25, 25), {
            // 指定定位位置。
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
            // 图标中央下端的尖角位置。
            anchor: new BMap.Size(5, 5),
            // 设置图片偏移。
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。
            imageOffset: new BMap.Size(0, 0)   // 设置图片偏移
          });
          let marker = new BMap.Marker(point, {icon: myIcon});
          //var marker = new BMap.Marker(point);
          map.addOverlay(marker);
          //***************点提示框*************//
/*          let info ="<p>出租车：" + carID + "</p><p>点号：" + i + "</p><p>事项：" + carEvent + "</p><p>状态 : "+carState+"</p>";
          let infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + info + "</p>");
          marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });*/

        },
          addLine(point0,point1){
              let polyline = new BMap.Polyline([point0,point1],{strokeColor:"#ffff00", strokeWeight:3, strokeOpacity:0.5});
              map.addOverlay(polyline);
          },
          TaxiTrace_dataTrans1(dataN) {
            global.carLength = dataN.length;
            global.dataI=0;
          let j=1;
          let that=this
            global.t=setInterval(function(){//使用setInterval逐一加点
          global.carSetLat[global.dataI]=parseFloat(dataN[global.dataI].lng)+0.0130;
          global.carSetLan[global.dataI]=parseFloat(dataN[global.dataI].lat)+0.0075;
          global.carEvent[global.dataI]=dataN[global.dataI].status;
          global.carTime[global.dataI]=dataN[global.dataI].time;
          global.point[global.dataI] = new BMap.Point(global.carSetLat[global.dataI], global.carSetLan[global.dataI]);
          if(global.dataI==0){
            //
            that.addMarker0(global.carID,global.point[global.dataI],global.dataI,global.carLength,global.carEvent[global.dataI])
            //this.addMarker0(global.carID,global.point[global.dataI],global.dataI,global.carLength,global.carEvent[global.dataI]);
          }
          if(global.dataI > 0){
            if (global.carEvent[global.dataI]==global.carEvent[global.dataI-1]) {that.addMarker0(global.carID,global.point[global.dataI],global.dataI,global.carLength,parseInt(global.carEvent[global.dataI])+10);};
            if (global.carEvent[global.dataI]!=global.carEvent[global.dataI-1]) {that.addMarker0(global.carID,global.point[global.dataI],global.dataI,global.carLength,global.carEvent[global.dataI]);};
            that.addLine(global.point[global.dataI-1],global.point[global.dataI]);
          };
            global.dataI+=1;
          if (global.dataI>global.carLength-1) {clearInterval(global.t)}//最后一项清除循环
            },3);//设置时间间隔
        },

      },
      mounted() {
        let styleJson=[];
        map = new BMap.Map('allmap')
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);  // 初始化地图,设置中心点坐标和地图级别
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.setMapStyle({styleJson:styleJson});
        //heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
      }
    }
</script>

<style>
  #Taxi_mainMap{
    width: 100%;
    height: 100%;
  }
  #allmap{
    width: 100%;
    height: 100%;
  }
  .map{
    width: 100%;
    height: 100%;
  }
  .Taxi_Query {
    position: absolute;
    top: 26px;
    right: 25px;
    z-index: 100;
    font-size: 30px;
    font-weight: 700;
    color: #feb64d;
  }
</style>
