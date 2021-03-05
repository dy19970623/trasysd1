/**
  * 李泰增
  * 2021年3月3日
  * 
 */
<template>
  <div id="map">
    <div ref="map" style="height: 100vh; width: 100%">
      <div id='Taxi_RidingService_mapTitle'>出租车服务能力热力图</div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap'
axios({
  url: 'http://10.100.54.135:8080/TraSys/Taxi/getData',
}).then(e => {})

let target = 0 ;
let map
export default {
  data() {
    return {};
  },
  mounted() {
      this.initmap();
     
  },
  methods: {
    initmap(){
       map = L.map("map", {
        minZoom: 3,
        maxZoom: 14,
        center: [39.91, 116.4],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
        crs: L.CRS.EPSG3857,
      });
      this.map = map; //data上需要挂载
      window.map = map;
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/mrmax/cjnn6bltn028r2rnvywtz4yoj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA"
      ).addTo(map);
      //读取文件
      var Taxi_RidingService_data=[];
      var Taxi_RidingService_data1=[];
      var Taxi_RidingService_data2=[];
      var Taxi_RidingService_data3=[];
      var Taxi_RidingService_data4=[];
      var Taxi_RidingService_data5=[];
      var Taxi_RidingService_data6=[];
      var Taxi_RidingService_data7=[];
      var Taxi_RidingService_data8=[];

             for (var i=1;i<e.msg.length;i++) { //给数据赋值用来筛选
              if(e.msg[i-1].ID!=e.msg[i].ID)//获取每个id最后一条数据
              {
                          Taxi_RidingService_data.push(e.msg[i]);
              }
              }
                for (var j = 0; j < Taxi_RidingService_data.length; j++) {
                  var Taxitime =Taxi_RidingService_data[j].DATE;//获取时间用来以每15分钟分组
                  var timeLevel = parseInt(Taxitime.substring(8,14)); //获取8-14位进行比较分组
                if (timeLevel>=70000&&timeLevel<71500) { //7：00-7：15
                  Taxi_RidingService_data1.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=71500&&timeLevel<73000) {//7：15-7：30
                  Taxi_RidingService_data2.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=73000&&timeLevel<74500) {//7：30-7：45
                  Taxi_RidingService_data3.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=74500&&timeLevel<80000) {//7：45-8：00
                  Taxi_RidingService_data4.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=80000&&timeLevel<81500) {//8：00-8：15
                  Taxi_RidingService_data5.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=81500&&timeLevel<83000) {//8：15-8：30
                  Taxi_RidingService_data6.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=83000&&timeLevel<84500) {//8：30-8：45
                  Taxi_RidingService_data7.push(Taxi_RidingService_data[j]);
                }
                else if (timeLevel>=84500&&timeLevel<90000) {//8：45-9：00
                  Taxi_RidingService_data8.push(Taxi_RidingService_data[j]);
                }

              }
          var testData = {
          max: 1000,
          data: [Taxi_RidingService_data1,Taxi_RidingService_data2,Taxi_RidingService_data3,Taxi_RidingService_data4,Taxi_RidingService_data5,cTaxi_RidingService_data6,Taxi_RidingService_data7,Taxi_RidingService_data8]
          }

          // 配置
        var cfg = {
          'radius': 0.01,
          'maxOpacity': 0.8,
          'scaleRadius': true,
          'useLocalExtrema': true,
          latField: 'LAT',
          lngField: 'LNG',
          valueField: 0.5,
          gradient:{'0.6': '#9287e7', 
		    	    	'0.7': '#5bc49f',
		    	    	'0.8': '#FFFF00',
		    	    	'0.9':'darkorange',
		    	    	'1':'#CC0000'},
        }
      this.heatmapLayer = new HeatmapOverlay(cfg)
        this.heatmapLayer.addTo(map)
        this.heatmapLayer.setData(testData[0])

    },
    
  },
};
</script>

<style>
#Taxi_RidingService_mapTitle{position:absolute;top:26px;right:25px;z-index:100;font-size:30px;color: #feb64d;font-weight:700;}
</style>
