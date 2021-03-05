<!--创建日期：2021年3月1日-->
<!--姓名：李江川-->
<!--功能：地铁客流分析-->
<template>
  <div>
    <div id="mapid">
      <RightBox></RightBox>
      <SubwayLegend></SubwayLegend>
    </div>
  </div>
</template>

<script>
import echarts  from 'echarts';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import RightBox from "./Child/RightBox";
import SubwayLegend from "./Child/SubwayLegend";

import transportPoint from "../../assets/js/SubwayAnalysis/dataResourse/Subway_Flow_transportPoint"
import linetransport from "../../assets/js/SubwayAnalysis/dataResourse/Subway_Flow_linetransportPoint"
import subwaypng from "../../assets/image/SubwayAnalysis/subway.png"
import subwaympng from "../../assets/image/SubwayAnalysis/subwaym.png"

export default {
  name: "SubwayAnalysis",
  data(){
    return{

    }
  },
  components:{
    RightBox,SubwayLegend
  },
  methods:{
    //方法：地铁站绘制
    drawSiteStaion(myMap){
      let sitestation=transportPoint.sitestation
      //展示地铁站人数多少所用图片size越大图片越大
      let myIcon = L.icon({
        iconUrl: subwaympng,
        iconSize: [32, 32],
        popupAnchor: [0, 0],
      });
      let myIcon4 = L.icon({
        iconUrl: subwaypng,
        iconSize: [29,29],
        popupAnchor: [0, 0],
      });

      let myIcon1 = L.icon({
        iconUrl: subwaypng,
        iconSize: [26, 26],
        popupAnchor: [0, 0],
      });
      let myIcon2 = L.icon({
        iconUrl: subwaypng,
        iconSize: [23, 23],
        popupAnchor: [0, 0],
      });
      let myIcon3 = L.icon({
        iconUrl: subwaypng,
        iconSize: [20, 20],
        popupAnchor: [0, 0],
      });
      //由于没有真实数据，展示为随机数
      for(let i = 0; i<sitestation.length; i++){
        let randomNum1=Math.floor(Math.random()*10000);
        sitestation[i].value = randomNum1;
      }
      let test_click =[];
      let myChart=[];
      let option = [];
      for(let i = 0; i<sitestation.length; i++){
        let site_LAT = sitestation[i].xsite;//获取地铁站经纬度
        let site_LON = sitestation[i].ysite;
        let site_NAME =sitestation[i].name;//获取地铁站名称
        //对人数进行分配，小于2500的地铁站所用图片
        if(sitestation[i].value<2500){
          test_click.push(L.marker([site_LAT, site_LON], {icon: myIcon3}).addTo(myMap)
            .on('mouseover',function(e){
              e.target.setIcon(myIcon);
            }).on('mouseout',function(e){
              e.target.setIcon(myIcon3);
            }));
          //对人数进行分配，小于5000的地铁站所用图片
        }else if(sitestation[i].value<5000){
          test_click.push(L.marker([site_LAT, site_LON], {icon: myIcon2}).addTo(myMap)
            .on('mouseover',function(e){
              e.target.setIcon(myIcon);
            }).on('mouseout',function(e){
              e.target.setIcon(myIcon2);
            }));
        }else if(sitestation[i].value<7500){//对人数进行分配，小于7500的地铁站所用图片
          test_click.push(L.marker([site_LAT, site_LON], {icon: myIcon1}).addTo(myMap)
            .on('mouseover',function(e){
              e.target.setIcon(myIcon);
            }).on('mouseout',function(e){
              e.target.setIcon(myIcon1);
            }));
        }else{//对人数进行分配，大于7500的地铁站所用图片
          test_click.push(L.marker([site_LAT, site_LON], {icon: myIcon4}).addTo(myMap)
            .on('mouseover',function(e){
              e.target.setIcon(myIcon);
            }).on('mouseout',function(e){
              e.target.setIcon(myIcon4);
            }));
        }
      }
      L.featureGroup(test_click).on('mouseover', function(place){
        //点击图片展示图表
        let placeName;
        for(let i = 0; i<sitestation.length; i++){
          if(sitestation[i].xsite ==place.latlng.lat &&sitestation[i].ysite ==place.latlng.lng){
             placeName =sitestation[i].name;
          }
        }
        let poi_click = place.propagatedFrom;
        let randomNumber1=Math.floor(Math.random()*30000);
        let randomNumber2=Math.floor(Math.random()*30000);
        // let markerguomao = L.marker([place.latlng.lat, place.latlng.lng], {icon: myIcon1});
        let	 content = '<div style="font-size:14px"><strong>'+placeName+'</strong></div><hr><br/>进站人数：'+randomNumber1+'<br/>出站人数：'+randomNumber2+'<hr><div style="width: 250px; height: 220px;" id="markerguomao'+placeName+'"></div>';
        poi_click.bindPopup(content, {});
        poi_click.on('popupopen', function(e) {
          let a_num = e.popup._latlng.lat +e.popup._latlng.lng;
          // 基于准备好的dom，初始化echarts实例(这块在vue里会报错显示echarts未定义，原因不明）
          eval("let myChart" +  a_num.toFixed(0) + "= echarts.init(document.getElementById('markerguomao"+ placeName+"\'))");
          // 指定图表的配置项和数据
          option = {
            textStyle:{

              color:'#FFFFFF'
            },
            tooltip: {
              trigger: 'axis'
            },
            xAxis: [{ axisLine: {
                lineStyle: {
                  color: "white"
                }
              },

              type: 'category',
              name: '时间',
              data: ["7:00:00", "8:00:00", "9:00:00", "10:00:00", "11:00:00","12:00:00"]
            }],

            yAxis : [{ axisLine: {
                lineStyle: {
                  color: "white"
                }
              },

              type : 'value',
              name: '人数',
            }],

            grid:{
              x:55,
              x2:40
            },
            series: [{
              data: [2544, 13788, 9025, 6264, 8349,13968]
              ,type: 'line',
              smooth: true
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          eval("myChart"+a_num.toFixed(0)+".setOption(option)");
        });
      });

    }
  },
  mounted() {
    console.log(transportPoint.sitestation)
    let myMap = L.map('mapid').setView([39.915925, 116.37929], 11);
    L.tileLayer('https://api.mapbox.com/styles/v1/mrmax/cjnn6bltn028r2rnvywtz4yoj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA', {
      maxZoom: 18,
      minZoom:11,
      foo:'far',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.light'
    }).addTo(myMap);
    this.drawSiteStaion(myMap)
    linetransport.drawlines(myMap)//绘制地铁线
  }

}
</script>

<style>
#mapid{
  width:100%;
  height: 100vh;
}
.leaflet-popup-content-wrapper, .leaflet-popup-tip {
  color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 14px;
  background: rgba(40, 49, 58, 0.9);
}
</style>
