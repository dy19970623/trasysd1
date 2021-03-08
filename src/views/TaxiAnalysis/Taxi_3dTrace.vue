<!--创建日期：2021年3月1日-->
<!--姓名：丁莹-->
<!--功能：出租车时空轨迹查询-->
<template>
  <div id="Taxi3dTrace" >
    <div id="Taxi3dTrace_Map" class="container" ></div>
    <div id='Taxi3dTrace_taxiQuery'>
      <div style="font-size:26px;margin-left: 5%;">出&nbsp;租&nbsp;车&nbsp;时&nbsp;空&nbsp;轨&nbsp;迹&nbsp;查&nbsp;询</div>
      &nbsp&nbsp&nbsp
      <select id="Taxi3dTrace_taxiID">
          <option value="13301104001" >13301104001</option>
          <option value="13301104002" class="taxi_Id">13301104002</option>
          <option value="13301104003" class="taxi_Id">13301104003</option>
          <option value="13301104004" class="taxi_Id">13301104004</option>
      </select>
      <input type="button" @click="Taxi3dTrace_addTrace" value="查询" />
      <input type="button" @click="Taxi3dTrace_removeTrace" value="清空" /><br><br>
      <div id='Taxi3dTrace_imageInfo'>
          <img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zaike.png">&nbsp;&nbsp;&nbsp;&nbsp;
          <img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_kongzai.png">&nbsp;&nbsp;&nbsp;&nbsp;
          <img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zhuche.png">&nbsp;&nbsp;&nbsp;&nbsp;
          <img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_kai.png">&nbsp;&nbsp;&nbsp;&nbsp;
          <img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_qita.png"><br>
      </div>
      <div id="Taxi3dTrace_text">
        <span>载客</span>&nbsp;&nbsp;&nbsp;
        <span>空载</span>&nbsp;&nbsp;&nbsp;
        <span>驻车</span>&nbsp;&nbsp;&nbsp;
        <span>上车</span>&nbsp;&nbsp;&nbsp;
        <span>其他</span>&nbsp;&nbsp;&nbsp;
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
                urlTemplate:'https://api.mapbox.com/styles/v1/litaizeng/cklt2ts8a21u318psl7vdmurq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',
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
                return color = "Yellow";
              };
              if (status == 1) {
                let color = status;
                return color = "OrangeRed";
              };
              if (status == 2) {
                let color = status;
                return color = "GhostWhite";
              };
              if (status == 3) {
                let color = status;
                return color = "Purple";
              };
              if (status == 4) {
                let color = status;
                return color = "SkyBlue";
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

#Taxi3dTrace_taxiQuery{
  position:absolute;
  top:26px;
  left:25px;
  z-index:100;
  font-size:20px;
  font-weight:700;
  color: white;
}
#TaxiTrace_imageInfo{
  position:absolute;
  top:15%;
  right:3%;
  z-index:100;
  color: #ffffff;
}
#Taxi3dTrace{width:100%;height:100%}

.container{width:100%;height:100%}
#Taxi3dTrace_taxiID{
  width: 159px;
  height: 33px;
  margin-top: 22px;
  color: white;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
}
.taxi_Id{
  width: 159px;
  height: 33px;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
}
input{
  width: 52px;
  height: 28px;
}
#Taxi3dTrace_imageInfo{

  margin-bottom: 3%;
}

#Taxi3dTrace_text{
  margin-top: 1px;

  font-size:16px;
}
</style>
