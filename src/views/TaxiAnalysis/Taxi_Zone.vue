<!--创建日期：2021年3月1日-->
<!--姓名：丁莹-->
<!--功能：出租车交通小区热力图-->
<template>
  <div id="TaxiZone">
    <div id="TaxiZone_MAP" class="container">
    </div>
  </div>
</template>
<script>
import {geo} from '../../assets/js/TaxiAnalysis/TaxiZone/geojson';
//import "./assets/css/mapbox-gl.css"
let map;
export default {

  name:'app',
  data(){
    return{
      strData:[],
      max:0,
      perNum:[12,266,63,100,509,156,437,774,94,511,1,1300,11,1494,1903,847,1896,1740,1657,1349,764,1376,320,1885,1244,1000,1758,462,834,1593,1758,1830,2324,1863,726,485,722,755,2985,2466,44,2150,104,74,306,260,1728,117,691,727,660,917,4779,146,5,329,277,169,303,109,398,20,76,28,5,78,27,32,28,556,1131,182,137,24,326,66,21,64,21,523,1086,408,18,374,29,132,777,414,83,35,8,20,98,173,205,21,4836,121,135,68,51,28,4390,7742,1124,2011,2258,296,565,139,216,22,9,101,3440,6889,3255,5498,4559,630,2073,1333,1362,516,4899,2741,4743,6597,2460,1385,1462,1712,5807,1114,12675,2084,3404,7890,1336,5055,1812,3491,2101,10519,5731,6783,2439,13633,13813,4531,4537,5873,5518,4793,6588,18199,13979,4342,4478,2353,3066,1885,1663,1504,2721,2264,1438,2988,3008,2233,1647,960,2163,4094,1436,3481,3660,1530,7143,1241,925,566,730,1504,368,194,29,154,200,138,558,1097,1479,230,1088,2911,61,138,43,14,49,49,178,124,15,352,92,280,702,280,1428,970,188,486,45,53,241,31,83,36,28,72,91,668,92,1792,30,390,153,1291,2738,799,150,56,19,2114,864,383,194,356,371,628,2192,1204,145,9],
    }
  },
  components:{

  },
  mounted:function() {
    let that = this
    this.max =  Math.max.apply(null, this.perNum);
    //console.log(this.max);
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ';
    map = new mapboxgl.Map({
      container: 'TaxiZone_MAP',
      style: 'mapbox://styles/litaizeng/cklrhlip10ib717qkkr26fm1t',
      center: [116.38027588,39.95429443],
      zoom: 9.8
    });//
    map.on('load',function () {
      //console.log(that)
      that.addToMap()
      that.daGeodata()
      map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": that.strData,
          }
        },
        "layout": {
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
          "text-size":12,

        },
        "paint":{
          "text-color":"#F8F8FF",
        }
      });
    })//
  },
  methods:{
    addToMap(){
      for (let i = 0;i < geo.features.length;i++){
        //console.log(geo.features[i])
        this.getGeo(i,geo.features[i])
      }
    },
    getGeo(index,item){
      let sou=item.geometry.coordinates[0];
      let c = this.getColorByNumber(this.perNum[index],this.max)
      //console.log(c)
      map.addLayer({
        'id':String('bj1'+index),
        'type':'fill',
        'source':{
          'type':'geojson',
          'data':{
            'type':'Feature',
            'geometry':{
              'type':'Polygon',
              'coordinates':sou
            }
          }
        },
        'layout':{},
        'paint':{
          'fill-color':c,
          'fill-opacity':0.8,
        }
      })
    },
    rgbaToHex(color) {//255,0,0 #ff00ff
      let values = color
        .replace(/rgba?\(/, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',');
      let a = parseFloat(values[3] || 1),
        r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
        g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
        b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);

      return "#" +
        ("0" + r.toString(16)).slice(-2) +
        ("0" + g.toString(16)).slice(-2) +
        ("0" + b.toString(16)).slice(-2);
    },
    getColorByNumber(n,max) {
      let halfMax = max / 12;
      let one = 255 / max;

      let r = 0,g = 0,b = 0;

      if(n<(max*0.05))          {r=130; g=57; b=53}; //砖红色，占得区域小
      if((max*0.05)<=n && n<(max*0.1))    { r=137 ;g = 190; b=178};
      if(n>=(max*0.1)&&n<=(max*0.2))   { r=201 ;g = 186; b=131};
      if(n>=(max*0.2)&&n<=(max*0.3))    { r=222 ;g = 156; b= 83};
      if(n>(max*0.3))           {r=222; g = 211 ;b = 140};

      r = parseInt(r);// 取整
      g = parseInt(g);// 取整
      b = parseInt(b);// 取整

      //console.log(r,g,b)
      return this.rgbaToHex("rgb(" + r + "," + g + "," + b + ")");
    },
    //处理地块文字信息
    daGeodata(){
      for(let i=0;i<geo.features.length;i++){
        let lngMin=geo.features[i].geometry.coordinates[0][0][0][0],
          lnMax=geo.features[i].geometry.coordinates[0][0][0][0],
          ltMin=geo.features[i].geometry.coordinates[0][0][0][1],
          latMax=geo.features[i].geometry.coordinates[0][0][0][1];
        for(let j=0;j<geo.features[i].geometry.coordinates[0][0].length;j++){
          let lng=geo.features[i].geometry.coordinates[0][0][j][0];
          let lat=geo.features[i].geometry.coordinates[0][0][j][1];
          if(lngMin>lng) lngMin=lng;
          if(lnMax<lng) lnMax=lng;
          if(ltMin>lat) ltMin=lat;
          if(latMax<lat) latMax=lat;
        }//获得经度纬度的最大最小值
        let avglng=(lngMin+lnMax)/2;
        let avglat=(ltMin+latMax)/2;

        //console.log("avglng"+avglng+"avglat"+avglat);//取经纬度的平均值
        let points=[];
        let lng1=avglng;
        let lat1=avglat;
        points.push(lng1);
        points.push(lat1);//将经纬度平均值放到数组中
        for (let j=0;j<geo.features[i].geometry.coordinates[0][0].length;j++){
          let arrName= geo.features[i].properties.Name;//获得地名数组
          let arrZb=geo.features[i].geometry.coordinates[0];//获得坐标数组
          let features={};
          let coord={};
          let NAME={};
          let points=[];
          let lng=geo.features[i].geometry.coordinates[0][0][j][0];
          let lat=geo.features[i].geometry.coordinates[0][0][j][1];
          let lng1=avglng;
          let lat1=avglat;
          points.push(lng1);
          points.push(lat1);
          features.type="Feature";
          features.geometry=coord;
          coord.type="Point";
          coord.coordinates=points;
          NAME.title=arrName+":"+this.perNum[i]+"";//获得地名和数量
          NAME.icon="monument";
          features.properties=NAME;
          this.strData.push(features);
        }
      }
    }
  }
}

</script>
<style>
#TaxiZone{width:100%;height:100%}
.container{width:100%;height:100%}
.mapboxgl-canvas{width: 100%;height:100%}
</style>
