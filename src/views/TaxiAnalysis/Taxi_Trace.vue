<!--创建日期：2021年3月1日-->
<!--姓名：曹中浩-->
<!--功能：出租车轨迹-->
<template>
  <div style="height: 100%;width: 100%">
    <div id="Taxi_mainMap">
      <div id="allmap"></div>
    </div>
    <div class="Taxi_Query">
      <p class="title">出租车轨迹查询</p>
      <el-select v-model="value" placeholder="13301104001" @change="select" class="shuru" size="mini">
        <el-option
          v-for="item in selectID"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="TaxiTrace_traceQuery()" class="butel01" size="mini" >查询</el-button>
      <el-button @click="TaxiTrace_traceClear()" class="butel02" size="mini">清空</el-button>
      <div id="TaxiTrace_imageInfo">
        <img class="image"  src="../../assets/image/TaxiAnalysis/qidian.png">
        <img class="image" src="../../assets/image/TaxiAnalysis/shangche.png">
        <img class="image" src="../../assets/image/TaxiAnalysis/xiache.png">
        <img class="image" src="../../assets/image/TaxiAnalysis/qita.png">
        <img class="image" src="../../assets/image/TaxiAnalysis/kongzai.png">
        <img class="image"  src="../../assets/image/TaxiAnalysis/zhongdian.png"><br>
        <span>起点</span><span>&nbsp;载客</span><span>&nbsp;空载</span><span>&nbsp;其他</span><span>&nbsp;驻车</span>
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
        let styleJson=[{
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#06021bff"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "color": "#114297ff"
    }
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "color": "#071738ff"
    }
}, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "manmade",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaystation",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medical",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medical",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainment",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estate",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shopping",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportation",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportation",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "playground",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "parkinglot",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "weight": "0.5"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "laneline",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "parkingspace",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "underpass",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "crosswalk",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "footbridge",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "roadarrow",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "vacationway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "universityway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspotsway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "0.3"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": "0.5"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "weight": "0.5"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "weight": "0.5"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": "0.1"
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "weight": "0.5"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d8841eff"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "airportlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "educationlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medicallabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medicallabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainmentlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "entertainmentlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estatelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "businesstowerlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "companylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "governmentlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "restaurantlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "hotellabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shoppinglabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "lifeservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "carservicelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportationlabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportationlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "financelabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "districtlabel",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "continent",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "country",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "district",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#abb6c8ff",
        "weight": "10"
    }
}, {
    "featureType": "town",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "village",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": "0.1"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}];
        map = new BMap.Map('allmap');
        map.centerAndZoom(new BMap.Point(116.403, 39.923), 12);  // 初始化地图,设置中心点坐标和地图级别
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
    top: 0%;
    left: 0;

    z-index: 100;
    font-size: 28px;
    font-weight: 700;
    color: #FFFFFF;

    background: #08080D;
    height: 33%;
    width: 20%;
  }
  #TaxiTrace_imageInfo{
     position: absolute;
     top: 55%;
     left: 9%;
     font-weight: 300;
     font-size: 15px;
     color: #FFFFFF;
  }
  .image{
    width: 25px;
    height: 25px;
  }
  .title{
      position: absolute;
      left: 9%;
  }
  .shuru{
    position: absolute;
    top: 35%;
    left: 9%;
    width: 120px;
    background-color: black;
    color: white;

  }
  .el-input--mini .el-input__inner {
    height: 28px;
    line-height: 28px;
    background-color: black;
    color:aliceblue;
}
  .butel01{
      position: absolute;
      top: 35%;
      left: 52%;
     padding-right: 10px;

      /* width: 50px;
      height: 25px; */
      font-weight: 300;
      font-size: 15px;

      color: #08080D;
      text-align: center;

  }

  .butel02{
      position: absolute;
      top: 35%;
      left: 69%;
      margin-right: 10px;

      /* width: 50px;
      height: 25px; */
      text-align: center;
      font-weight: 300;
      font-size: 15px;
      color: #08080D;
  }

  .anchorBL{
    display:none;
  }
  .BMap_cpyCtrl{
    display:none;
    }
</style>
