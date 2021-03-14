<!--创建日期：2021年3月1日-->
<!--姓名：丁莹-->
<!--功能：出租车时空轨迹查询-->
<template>
  <div id="Taxi3dTrace" >
    <div id="Taxi3dTrace_Map" class="container" ></div>
    <div id='Taxi3dTrace_taxiQuery'>
      <div class="title" >出租车时空轨迹查询</div>
      &nbsp&nbsp&nbsp
      <select id="Taxi3dTrace_taxiID">
          <option value="13301104001" >13301104001</option>
          <option value="13301104002" class="taxi_Id">13301104002</option>
          <option value="13301104003" class="taxi_Id">13301104003</option>
          <option value="13301104004" class="taxi_Id">13301104004</option>
      </select>
      <input class="btus01" type="button" @click="Taxi3dTrace_addTrace" value="查询" />
      <input class="btus02" type="button" @click="Taxi3dTrace_removeTrace" value="清空" /><br><br>
      <div id='Taxi3dTrace_imageInfo'>
          <img class="tuli" align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zaike.png">
          <img class="tuli" align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_kongzai.png">
          <img class="tuli" align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zhuche.png">
          <img class="tuli" align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_xiache.png">
          <img class="tuli" align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_qita.png"><br>
      </div>
      <div id="Taxi3dTrace_text">
        <span class="span01">载客</span>
        <span class="span01">空载</span>
        <span class="span01">驻车</span>
        <span class="span01">下车</span>
        <span class="span01">其他</span>
      </div>


    </div>
  </div>
</template>

<script>
    import global from '../../assets/api/map'
    import 'maptalks/dist/maptalks.css';
    import * as THREE from 'three';
    import { ThreeLayer } from 'maptalks.three/dist/maptalks.three.js';
    import * as maptalks from "maptalks";
    import {msg1} from "../../assets/js/TaxiAnalysis/TraceData2";
      export default {
        name: "Taxi_3dTrace",
        mounted() {
          this.mapshow()
          this.Taxi3dTrace_addTrace()
        },
        methods:{
          //清除按钮
          mapshow(){
            global.map = new maptalks.Map('Taxi3dTrace_Map', {
              center: [116.409686, 39.99999999],
              zoom:11,
              pitch : 56, //俯视角
              bearing : 30,  // 旋转角
              dragRotatePitch: true,
              baseLayer: new maptalks.TileLayer('base', {
                urlTemplate:'https://api.mapbox.com/styles/v1/litaizeng/ckm398gud9bmz17rykd0lemst/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',
                subdomains: ['a','b','c','d'],
                attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
              })
            });
          },

          Taxi3dTrace_removeTrace(){
            global.times = 0;
            clearInterval(global.Taxi3dTrace_timePiece);
            global.map.removeLayer(global.Taxi3dTrace_rem);
          },
          //添加按钮
          Taxi3dTrace_addTrace(){

            function Taxi3dTrace_arrColor(status){
              if (status == 0) {
                let color = status;
                return color = "#ffc56e";
              };
              if (status == 1) {
                let color = status;
                return color = "#0092bc";
              };
              if (status == 2) {
                let color = status;
                return color = "#d0006f";
              };
              if (status == 3) {
                let color = status;
                return color = "Purple";
              };
              if (status == 4) {
                let color = status;
                return color = "#e6e6e6";
              };
            };
            function Taxi3dTrace_removeTrace(){
              global.times = 0;
              clearInterval(global.Taxi3dTrace_timePiece);
              global.map.removeLayer(global.Taxi3dTrace_rem);
            };
            Taxi3dTrace_removeTrace();
            global.Taxi3dTrace_rem = new maptalks.VectorLayer('vector', { enableAltitude : true }).addTo(global.map);
            global.map.addLayer(global.Taxi3dTrace_rem);
            global.Taxi3dTrace_timePiece = setInterval(function(){
              let ArrayPoints = [];
              ArrayPoints.push([parseFloat(global.Taxi3dTrace_arrLng[global.times]),parseFloat(global.Taxi3dTrace_arrLat[global.times])]);
              ArrayPoints.push([parseFloat(global.Taxi3dTrace_arrLng[global.times + 1]),parseFloat(global.Taxi3dTrace_arrLat[global.times + 1])]);
              let ArrayHeights = [];
              ArrayHeights.push(parseFloat(global.Taxi3dTrace_arrHeight[global.times]),parseFloat(global.Taxi3dTrace_arrHeight[global.times + 1]));

              new maptalks.LineString(ArrayPoints, {
                'properties' : {
                  'altitude' : ArrayHeights ,
                },
                'symbol': {
                  'lineColor' : Taxi3dTrace_arrColor(global.Taxi3dTrace_arrStatus[global.times]),
                  'lineWidth' : 2.5,
                  'textPlacement' : 'vertex'
                },

              }).addTo(global.Taxi3dTrace_rem);

              global.times+=1;

              if (global.times > msg1.length - 1) {
                clearInterval(global.Taxi3dTrace_timePiece);
              } //清除循环
            },30);//计时器时间间隔

          },
        },

      }
</script>

<style scoped>
#Taxi3dTrace{width:100%;height:100%}
.container{width:100%;height:100%}
#Taxi3dTrace_taxiQuery{
  position: absolute;
  top: 0;
  left: 0;
  width: 19%;
  height: 30%;
  z-index: 100;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: rgba(0,0,0,0.7);
  background-image: url("../../assets/image/TaxiAnalysis/chaxun.png");
  background-size: 100% 100%;
}

.title{
  position: absolute;
  left: 14%;
  margin-top: 10%;
  color: #02C1D7;
  /*font-weight: 300;*/
  font-size: 28px;
  font-family: '微软雅黑 Regular';
}

.btus01{
  position: absolute;
  left: 53%;
  top: 36%;
  width: 61px;
  height: 34px;
  text-align: center;
  font-size: 17px;
  border-radius: 6px;
}
.btus02{
  position: absolute;
  left: 71%;
  top: 36%;
  width: 61px;
  height: 34px;
  text-align: center;
  font-size: 17px;
  border-radius: 6px;
}
#Taxi3dTrace_taxiID{
  position: absolute;
  top: 36%;
  left: 11%;
  width: 145px;
  height: 35px;
  background-color: black;
  color: white;
  border-radius: 6px;
  background-color: #19344bb3;
}

#Taxi3dTrace_imageInfo{
  position: absolute;
  margin-top: 24%;
  margin-left: 14%;
  margin-bottom: 3%;
}

#Taxi3dTrace_text{
  position: absolute;
  top: 74%;
  margin-left: 13%;
  margin-top: 1px;
  font-size:16px;
}
.tuli{
  margin-right: 18px;
  margin-left: 4px;
}
.span01{
  font-size: 15px;
  font-weight: 500;
  margin-right: 11px;
  margin-left: 1px;
}
</style>
