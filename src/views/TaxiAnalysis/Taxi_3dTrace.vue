<!--创建日期：2021年3月1日-->
<!--姓名：丁莹-->
<!--功能：出租车时空轨迹查询-->
<template>
  <div id="Taxi3dTrace" >
    <div id="Taxi3dTrace_Map" class="container" ></div>
    <div id='Taxi3dTrace_taxiQuery'>
      <div>出租车时空轨迹查询</div>
      &nbsp&nbsp&nbsp<select id="Taxi3dTrace_taxiID">
      <option value="13301104001">13301104001</option>
      <option value="13301104002">13301104002</option>
      <option value="13301104003">13301104003</option>
      <option value="13301104004">13301104004</option>
    </select>
      &nbsp&nbsp&nbsp <div id='Taxi3dTrace_imageInfo'>
      &nbsp&nbsp&nbsp<img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zaike.png"> <span>载客</span><br>
      &nbsp&nbsp&nbsp<img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_kongzai.png"> <span>空载</span><br>
      &nbsp&nbsp&nbsp<img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_zhuche.png"> <span>驻车</span><br>
      &nbsp&nbsp&nbsp<img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_kai.png"> <span>上车</span><br>
      &nbsp&nbsp&nbsp<img align="middle" src="../../assets/image/TaxiAnalysis/Taxi3dTrace_qita.png"> <span>其他</span><br>
    </div>
      &nbsp&nbsp&nbsp<input type="button" @click="Taxi3dTrace_addTrace" value="查询" />
     &nbsp&nbsp&nbsp<input type="button" @click="Taxi3dTrace_removeTrace" value="清空" /><br><br>

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
                urlTemplate:'https://api.mapbox.com/styles/v1/mrmax/cjnn6bltn028r2rnvywtz4yoj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA',
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
              alert('来这了嘛？')
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
  right:15px;
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

</style>
