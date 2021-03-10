<!--创建日期：2021.3.1-->
<!--姓名：高翔森-->
<!--功能：停车流量分析-->
<template>
  <div id="parkflow" style="height: 100%;width: 100%" >
    <div id="map" style="height:100%; width: 100%"></div>
    <RightBox/>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import '../../assets/css/ParkAnalysis/icon.css'
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import 'leaflet.markercluster';
  import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap';
  //*********************  导入数据  *********************************************
  import pp1 from '../../assets/image/ParkAnalysis/pp1.png'
  import pp2 from '../../assets/image/ParkAnalysis/pp2.png'
  import pp3 from '../../assets/image/ParkAnalysis/pp3.png'
  import marker2x from '../../assets/image/ParkAnalysis/marker2x.png'
  import marker2xyellow from '../../assets/image/ParkAnalysis/marker2xyellow.png'
  import marker2xred from '../../assets/image/ParkAnalysis/marker2xred.png'
  import subway from '../../assets/image/ParkAnalysis/subway.png'
  import {data} from '../../assets/js/ParkAnalysis/data3'
  import {screen1,screen2,screen3} from "../../assets/js/ParkAnalysis/ParkScreen"
  import {data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20,data21,data22,data94,data95,data96,data97,data98,data99} from "../../assets/js/ParkAnalysis/data99";
  import RightBox from "./child/RightBox";
  export default {
    data(){
      return {}
    },
    mounted() {
      this.init()
    },
    components:{RightBox},
    methods:{
      init(){
        //创建底图
        let map = L.map("map", {
          minZoom: 3,
          maxZoom: 18,
          center: [39.91, 116.35],
          zoom: 12,
          zoomControl: false,
          attributionControl: false,
          crs: L.CRS.EPSG3857,
          //layers: [ cities, Screen1,Screen2,Screen3]
        });
        this.map = map; //data上需要挂载
        window.map = map;
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/litaizeng/ckh4sgqak0i9319mywoay9rkv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ"
        ).addTo(map);

        //leaflet部分
        //添加点位
        //一级诱导屏图片
        let myIcon_1 = L.icon({
          iconUrl: pp1,
          iconSize: [25, 25],
          popupAnchor: [0, 0],
        });
        //二级诱导屏图片
        let myIcon_2 = L.icon({
          iconUrl: pp2,
          iconSize: [25, 25],
          popupAnchor: [0, 0],
        });
        //三级诱导屏图片
        let myIcon_3 = L.icon({
          iconUrl: pp3,
          iconSize: [25, 25],
          popupAnchor: [0, 0],
        });
        //不同大小图片展示不同车位空余量
        let myIcon1 = L.icon({
          iconUrl:marker2x,
          iconSize: [25, 41],
          popupAnchor: [0, 0],
        });
        //不同大小图片展示不同车位空余量
        let myIcon2 = L.icon({
          iconUrl: marker2xyellow,
          iconSize: [25,41],
          popupAnchor: [0, 0],
        });
        //不同大小图片展示不同车位空余量
        let myIcon3 = L.icon({
          iconUrl: marker2xred,
          iconSize: [25, 41],
          popupAnchor: [0, 0],
        });


        /*停车场坐标管理*/
        // ************************     Screen1     ******************************
        let Screen1 = L.layerGroup();
        let Screen1_test = [];
        for(let i=0;i<screen1.length;i++){
          Screen1_test.push(L.marker([screen1[i].lat,screen1[i].lng],{icon: myIcon_1})
            .on('mouseover',function(e){
              //e.target.setIcon(myIcon);
            }).on('mouseout',function(e){
              //e.target.setIcon(myIcon2);
            }).addTo(Screen1));
        };
        //点击图片展示此处空余车位等详细信息
        L.featureGroup(Screen1_test).on('mouseover', function(place){

          let th = "<th><td>停车场</td><td>空余车位</td></th>";
          let tr = "";
          let screen_test1 = "";
          let content;
          for(let i=0;i<screen1.length;i++){
            //如果横纵坐标相同则展示此处详细信息
            if(place.latlng.lat==screen1[i].lat&&place.latlng.lng==screen1[i].lng){
              for(var j=0;j<screen1[i].INFO.length;j++){
                screen_test1 = screen_test1 + screen1[i].INFO[j].abbrname+':'+screen1[i].INFO[j].num+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
              }

              content = '<div style="font-size:14px"><strong>'+screen1[i].屏号+'诱导屏</strong></div><hr><br />屏号：'+screen1[i].屏号+'<br />屏类别：'+screen1[i].屏类别+'<br />安装位置：'+screen1[i].安装位置+'<br>显示内容：'+screen_test1+'<br>';
            }
          }
          let screen1_click = place.propagatedFrom;
          screen1_click.bindPopup(content, {});
          screen1_click.on('popupopen', function(e) {});
        });
        map.addLayer(Screen1);

        // ****************************    Screen2     ******************************
        let Screen2 = L.layerGroup();
        let Screen2_test = [];
        for(let i=0;i<screen2.length;i++){
          Screen2_test.push(L.marker([screen2[i].lat,screen2[i].lng],{icon: myIcon_2})
            .on('mouseover',function(e){
            }).on('mouseout',function(e){
            }).addTo(Screen2));
        };
        //点击图片展示此处空余车位等详细信息
        L.featureGroup(Screen2_test).on('mouseover', function(place){

          let th = "<th><td>停车场</td><td>空余车位</td></th>";
          let tr = "";
          let screen_test2 = "";
          let content;
          for(let i=0;i<screen2.length;i++){
            //如果横纵坐标相同则展示此处详细信息
            if(place.latlng.lat==screen2[i].lat&&place.latlng.lng==screen2[i].lng){
              for(let j=0;j<screen2[i].INFO.length;j++){
                screen_test2 = screen_test2 + screen2[i].INFO[j].abbrname+':'+screen2[i].INFO[j].num+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
              }

              content = '<div style="font-size:14px"><strong>'+screen2[i].屏号+'诱导屏</strong></div><hr><br />屏号：'+screen2[i].屏号+'<br />屏类别：'+screen2[i].屏类别+'<br />安装位置：'+screen2[i].安装位置+'<br>显示内容：'+screen_test2+'<br>';
            }
          }
          let screen2_click = place.propagatedFrom;
          screen2_click.bindPopup(content, {});
          screen2_click.on('popupopen', function(e) {});
        });
        map.addLayer(Screen2);

        // *****************************     Screen3     ******************************
        let Screen3 = L.layerGroup();
        let Screen3_test = [];
        for(let i=0;i<screen3.length;i++){
          Screen3_test.push(L.marker([screen3[i].lat,screen3[i].lng],{icon: myIcon_3})
            .on('mouseover',function(e){
            }).on('mouseout',function(e){
            }).addTo(Screen3));
        };
        //点击图片展示此处空余车位等详细信息
        L.featureGroup(Screen3_test).on('mouseover', function(place){

          let th = "<th><td>停车场</td><td>空余车位</td></th>";
          let tr = "";
          let screen_test3 = "";
          let content;
          for(let i=0;i<screen3.length;i++){
            //如果横纵坐标相同则展示此处详细信息
            if(place.latlng.lat==screen3[i].lat&&place.latlng.lng==screen3[i].lng){
              for(let j=0;j<screen3[i].INFO.length;j++){
                screen_test3 = screen_test3 + screen3[i].INFO[j].abbrname+':'+screen3[i].INFO[j].num+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
              }
              content = '<div style="font-size:14px"><strong>'+screen3[i].屏号+'诱导屏</strong></div><hr><br />屏号：'+screen3[i].屏号+'<br />屏类别：'+screen3[i].屏类别+'<br />安装位置：'+screen3[i].安装位置+'<br>显示内容：'+screen_test3+'<br>';
            }
          }
          let screen3_click = place.propagatedFrom;
          screen3_click.bindPopup(content, {});
          screen3_click.on('popupopen', function(e) {});
        });
        map.addLayer(Screen3);

        // *****************************     cities     ******************************

        let cities = new L.markerClusterGroup(
          {

            disableClusteringAtZoom:16,
            iconCreateFunction: function (cluster) {
              return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' ,className: 'mycluster',iconSize: L.point(50, 50) });
            }
          }
        );
        let test_click =[];
        for(let i=0;i<data.length;i++){
          let free = parseFloat(data[i][8]);
          if(free>0&&free<20){
            test_click.push(L.marker([data[i][20],data[i][21]],{icon: myIcon3}).addTo(cities)
              .on('mouseover',function(e){
              }).on('mouseout',function(e){
              }));

          }else if(free>=20&&free<40){
            test_click.push(L.marker([data[i][20],data[i][21]],{icon: myIcon2}).addTo(cities)
              .on('mouseover',function(e){
              }).on('mouseout',function(e){
              }));
          }else{
            test_click.push(L.marker([data[i][20],data[i][21]],{icon: myIcon1}).addTo(cities)
              .on('mouseover',function(e){
              }).on('mouseout',function(e){
              }));
          }
        };
        //表示质疑????
        L.featureGroup(test_click).on('mouseover', function(place){
          for(let i = 0; i<data.length; i++){
            if(data[i][20] ==place.latlng.lat &&data[i][21] ==place.latlng.lng){
              var placeName =data[i][4];
              var placeAddress =data[i][5];
              var buliderCompany =data[i][6];
              var allNumber =data[i][13];3
              var contactPerson =data[i][17];
              var freeParking=data[i][8];
              var parkId = data[i][0];
            }
          }
          let  poi_click = place.propagatedFrom;
          // var markerguomao = L.marker([place.latlng.lat, place.latlng.lng], {icon: myIcon1});
          let content = '<div style="font-size:14px"><strong>'+ placeName +'</strong></div><hr><br />停车场地址：'+placeAddress+'<br />停车场管理公司：'+buliderCompany+'<br />停车场车位总数：'+allNumber+'<br>联系人：'+contactPerson+'<br>空余车位：'+freeParking+'<br><hr><div style="width: 250px; height: 220px;" id="markerguomao'+parkId+'"></div>';
          poi_click.bindPopup(content, {});

          poi_click.on('popupopen', function(e) {
            // 基于准备好的dom，初始化echarts实例
            let  a_num = e.popup._latlng.lat +e.popup._latlng.lng;
            let echarts =require('echarts')
            let mychart1
            eval("var myChart" +  a_num.toFixed(0) + "= echarts.init(document.getElementById('markerguomao"+ parkId+"\'));mychart1=myChart"+a_num.toFixed(0));
            //eval("const myChart" +  a_num.toFixed(0) + "= echarts.init(document.getElementById('markerguomao"+ parkId+"\'))");
            // 指定图表的配置项和数据
            let option = {
              textStyle:{
                color:'black'
              },
              tooltip: {
                trigger: 'axis'
              },
              xAxis: [{
                axisLine: {
                  lineStyle: {
                    color: "black"
                  }
                },
                type: 'category',
                name: '时间',
                data: ["7:00:00", "8:00:00", "9:00:00", "10:00:00", "11:00:00","12:00:00"]
              }],

              yAxis : [{
                axisLine: {
                  lineStyle: {
                    color: "black"
                  }
                },
                type : 'value',
                name: '车位',
              }],

              grid:{
                x:55,
                x2:40
              },
              series: [{
                data: [35, 45, 60, 54, 71,80]
                ,type: 'line',
                smooth: true
              }]
            };
            // 使用刚指定的配置项和数据显示图表。
            eval("mychart1.setOption(option)");
            //eval("myChart"+a_num.toFixed(0)+".setOption(option)");
          });
        });
        map.addLayer(cities);




        //不知道这是干什么用的，视图看起来很别扭
        // let shownLayer, polygon;
        // function removePolygon() {
        //   if (shownLayer) {
        //     shownLayer.setOpacity(1);
        //     shownLayer = null;
        //   }
        //   if (polygon) {
        //     mymap.removeLayer(polygon);
        //     polygon = null;
        //   }
        // };
        //
        // cities.on('clustermouseover', function (a) {
        //   removePolygon();
        //   a.layer.setOpacity(0.2);
        //   shownLayer = a.layer;
        //   polygon = L.polygon(a.layer.getConvexHull());
        //   map.addLayer(polygon);
        // });
        // cities.on('clustermouseout', removePolygon);
        // map.on('zoomend', removePolygon);

        //添加热力图
        let heatArray = [];
        for(let i=0;i<data.length;i++){
          heatArray.push([data[i][20],data[i][21],parseFloat(data[i][13])/100]);
        };

        let cfg = {
          'radius': 0.005,
          'maxOpacity': 0.8,
          'scaleRadius': true,
          'useLocalExtrema': true,
          latField: '0',
          lngField: '1',
          valueField: '2',
          gradient:{'0.6': '#9287e7',
            '0.7': '#5bc49f',
            '0.8': '#FFFF00',
            '0.9':'darkorange',
            '1':'#CC0000'},
        }
        // 数据
        let testData = {
          max: 1000,
          data: heatArray
        }

        let heat = this.heatmapLayer = new HeatmapOverlay(cfg)
        this.heatmapLayer.addTo(map)
        this.heatmapLayer.setData(testData)


        let baseLayers = {
          "底图": map
        };
        let overlays = {
          "停车热力图" : heat,
          "停车场点位": cities,
          "一级诱导屏":Screen1,
          "二级诱导屏":Screen2,
          "三级诱导屏":Screen3,
        };
        L.control.zoom({zoomInTitle:'放大', zoomOutTitle:'缩小',position: 'topright',}).addTo(map);
        L.control.layers(baseLayers,overlays, {
          // position: 'topright',
          collapsed: true
        }).addTo(map);






      },




    }

  }
</script>

<style>

</style>
