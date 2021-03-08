<!--
组件：公租自行车站位分析
作者：李江川
时间：2021/3/1
-->
<template>
  <div>
    <div id="mapBox">
      <RightBox ref="RightBox"></RightBox>
      <bikelegend></bikelegend>
    </div>
  </div>
</template>

<script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  //import axios from "axios";
  import RightBox from "./Child/RightBox";
  import bikelegend from "./Child/bikelegend";
  import {request, requist} from "../../network/request"
  import bikesitedata from "../../assets/js/Bike_Search/PRBicycle_siteData.js"
  import iconred from "../../assets/image/PublicBicycle/u2026.png"
  import iconblue_1 from "../../assets/image/PublicBicycle/u2064.png"
  import iconpurple_1 from "../../assets/image/PublicBicycle/u2020.png"


  let bike_station=[]
  //let usenumberdata=[]//这俩变量先留着，后续稳定了再封装

  export default {
    name: "PRBicycle_OD",
    data() {
      return {
        use:'',
        echarts11data:[]//图表1的数据
      }
    },
    components: {//子组件：右侧边框和图例
      RightBox,bikelegend
    },
    methods: {
      //方法：时间处理
      usenumberchange(usenumberdata){
        let bikeusenumber=[1104,1325,995,1243,1402,1076,0];
        let usenumber = 0;
        let myDate = new Date();
        let Hour = myDate.getHours();
        let Minute = myDate.getMinutes();
        let Second = myDate.getSeconds();
        if(Minute<10){
          Minute="0"+Minute;
        }
        if(Hour<10){
          Hour="0"+Hour;
        }
        if(Second<10){
          Second="0"+Second;
        }
        let nowtime = "2015/7/15 "+Hour+":"+Minute+":"+Second;
        for(let i=0;i<1266;i++){
          if(usenumberdata[i].LASTUPTIME<nowtime)
          {
            usenumber = usenumber+1;
          }
        }
        bikeusenumber[6]=usenumber;
        console.log("cccccccccccccccccccccc")
        /*this.$nextTick(()=>{
          this.$refs.RightBox.trans2()
        })*/

        //echart32();
      },
      //方法：实现经纬度转换后绘制图层
      draw(map) {
        //shujuchuli
        bike_station = bikesitedata.bikesitedata
        console.log(bike_station[0].LATITUDE)
        for (let i = 0; i < bike_station.length; i++) {
          bike_station[i].LATITUDE = parseFloat(bike_station[i].LATITUDE) - 0.0075;
          bike_station[i].LONGITUDE = parseFloat(bike_station[i].LONGITUDE) - 0.012;
        }
        this.drawsite(map);

      },
      //方法：绘制各个图层并产生各类事件
      drawsite(map) {
        let self=this
        //图标
        let marker_group = []
        let markerwidth;
        let markerlength;
        let markerurl;
        let markertext;
        let markertext2;
        let markertext3;
        let markertext4;

        let echart_freebike = 0;
        let echart_locknumber = 0;
        let echart_usernumber = 0;
        let echart21_data = new Array(20);//top5数组
        echart21_data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let echart22_data = new Array(20);//bottom数组
        echart22_data=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let echart12_day = new Array;
        echart12_day=[1,2,3,4,5,6,7,8,9,10];
        let bikeusenumber=[1104,1325,995,1243,1402,1076,0];
        //判断查询结果是否一致
        let findname=0;
        let findstarttime=0;
        let findendtime=0;
        let findnumber = 0;
        //top5排序
        let site_PERCENT2 = new Array;
        let site_NUMBER2  = new Array;
        let site_NAME2 = new Array;
        let site_NOWNUMBER2  = new Array;
        let site_LOCKNUMBER2 = new Array;
        //bottom排序
        let site_PERCENT3 = new Array;
        let site_NUMBER3  = new Array;
        let site_NAME3 = new Array;
        let site_NOWNUMBER3  = new Array;
        let site_LOCKNUMBER3 = new Array;

        //排序与计算
        for (let i = 0; i < bike_station.length; i++) {
          site_PERCENT2[i] = (bike_station[i].LOCKNUM - bike_station[i].FREESPACES) / bike_station[i].LOCKNUM;
          site_NUMBER2[i] = i;
          site_NAME2[i] = bike_station[i].SITENAME;
          site_NOWNUMBER2[i] = bike_station[i].LOCKNUM - bike_station[i].FREESPACES;
          site_LOCKNUMBER2[i] = bike_station[i].LOCKNUM;
        }
        //冒泡排序选出前五
        for (let i = 1; i < bike_station.length; i++) {
          for (let j = 1; j < bike_station.length - 1; j++) {
            if (site_PERCENT2[j] > site_PERCENT2[j - 1]) {
              let test_PERCENT;
              let test_NUMBER;
              let test_NAME;
              let test_LOCKNUMBER;
              let test_NOWNUMBER;
              test_PERCENT = site_PERCENT2[j - 1];
              site_PERCENT2[j - 1] = site_PERCENT2[j];
              site_PERCENT2[j] = test_PERCENT;
              test_NUMBER = site_NUMBER2[j - 1];
              site_NUMBER2[j - 1] = site_NUMBER2[j];
              site_NUMBER2[j] = test_NUMBER;
              test_NAME = site_NAME2[j - 1];
              site_NAME2[j - 1] = site_NAME2[j];
              site_NAME2[j] = test_NAME;
              test_LOCKNUMBER = site_LOCKNUMBER2[j - 1];
              site_LOCKNUMBER2[j - 1] = site_LOCKNUMBER2[j];
              site_LOCKNUMBER2[j] = test_LOCKNUMBER;
              test_NOWNUMBER = site_NOWNUMBER2[j - 1];
              site_NOWNUMBER2[j - 1] = site_NOWNUMBER2[j];
              site_NOWNUMBER2[j] = test_NOWNUMBER;
            }
          }
        }
        echart21_data[0] = site_NAME2[0];//站名			第一
        echart21_data[1] = site_LOCKNUMBER2[0];//锁位数
        echart21_data[2] = site_NOWNUMBER2[0];//正在使用数
        echart21_data[3] = site_PERCENT2[0];//百分比

        echart21_data[4] = site_NAME2[1];//站名			第二
        echart21_data[5] = site_LOCKNUMBER2[1];//锁位数
        echart21_data[6] = site_NOWNUMBER2[1];//正在使用数
        echart21_data[7] = site_PERCENT2[1];//百分比

        echart21_data[8] = site_NAME2[2];//站名			第三
        echart21_data[9] = site_LOCKNUMBER2[2];//锁位数
        echart21_data[10] = site_NOWNUMBER2[2];//正在使用数
        echart21_data[11] = site_PERCENT2[2];//百分比

        echart21_data[12] = site_NAME2[3];//站名			第四
        echart21_data[13] = site_LOCKNUMBER2[3];//锁位数
        echart21_data[14] = site_NOWNUMBER2[3];//正在使用数
        echart21_data[15] = site_PERCENT2[3];//百分比

        echart21_data[16] = site_NAME2[4];//站名			第五
        echart21_data[17] = site_LOCKNUMBER2[4];//锁位数
        echart21_data[18] = site_NOWNUMBER2[4];//正在使用数
        echart21_data[19] = site_PERCENT2[4];//百分比
        self.$nextTick(()=>{
          self.$refs.RightBox.trans2(echart21_data)
        })

        echart22_data[0] = site_NAME2[147];//站名			倒数第一
        echart22_data[1] = site_LOCKNUMBER2[147];//锁位数
        echart22_data[2] = site_NOWNUMBER2[147];//正在使用数
        echart22_data[3] = site_PERCENT2[147];//百分比

        echart22_data[4] = site_NAME2[146];//站名			倒数第二
        echart22_data[5] = site_LOCKNUMBER2[146];//锁位数
        echart22_data[6] = site_NOWNUMBER2[146];//正在使用数
        echart22_data[7] = site_PERCENT2[146];//百分比

        echart22_data[8] = site_NAME2[145];//站名			倒数第三
        echart22_data[9] = site_LOCKNUMBER2[145];//锁位数
        echart22_data[10] = site_NOWNUMBER2[145];//正在使用数
        echart22_data[11] = site_PERCENT2[145];//百分比

        echart22_data[12] = site_NAME2[144];//站名			倒数第四
        echart22_data[13] = site_LOCKNUMBER2[144];//锁位数
        echart22_data[14] = site_NOWNUMBER2[144];//正在使用数
        echart22_data[15] = site_PERCENT2[144];//百分比

        echart22_data[16] = site_NAME2[143];//站名			倒数第五
        echart22_data[17] = site_LOCKNUMBER2[143];//锁位数
        echart22_data[18] = site_NOWNUMBER2[143];//正在使用数
        echart22_data[19] = site_PERCENT2[143];//百分比

        self.$nextTick(()=>{
          self.$refs.RightBox.trans3(echart21_data)
        })

        let blueIcon = L.icon({
          iconUrl: iconred,
          iconSize: [20, 20],// size of the icon

          shadowAnchor: [0, 0],  // the same for the shadow
          popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
        let violetIcon = L.icon({
          iconUrl: iconblue_1,
          iconSize: [40, 40],/* // size of the icon
  	    iconAnchor:   [10, 10],*/ // point of the icon which will correspond to marker's location
          shadowAnchor: [0, 0],  // the same for the shadow
          popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
        let greenIcon = L.icon({
          iconUrl: iconpurple_1,
          iconSize: [40, 40],/* // size of the icon
    	    iconAnchor:   [10, 10],*/ // point of the icon which will correspond to marker's location
          shadowAnchor: [0, 0],  // the same for the shadow
          popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
        });
        for (let i = 0; i < bike_station.length; i++) {
          let site_LAT = bike_station[i].LATITUDE;
          let site_LON = bike_station[i].LONGITUDE;
          let site_NAME = bike_station[i].SITENAME;
          let site_NUMBER = bike_station[i].SITEID;
          let site_MAXBIKE = bike_station[i].LOCKNUM;
          let site_NOWBIKE = bike_station[i].LOCATION;
          let marker;
          if (site_NAME == echart21_data[0] || site_NAME == echart21_data[4] || site_NAME == echart21_data[8] || site_NAME == echart21_data[12] || site_NAME == echart21_data[16]) {
            marker = L.marker([site_LAT, site_LON], {icon: violetIcon, zIndexOffset: 100}).addTo(map);
            marker_group.push(marker);//黄点,表示前五名
          } else if (site_NAME == echart22_data[0] || site_NAME == echart22_data[4] || site_NAME == echart22_data[8] || site_NAME == echart22_data[12] || site_NAME == echart22_data[16]) {
            marker = L.marker([site_LAT, site_LON], {icon: greenIcon, zIndexOffset: 100}).addTo(map);
            marker_group.push(marker);//绿点，表示后五名
          } else {
            marker = L.marker([site_LAT, site_LON], {icon: blueIcon}).addTo(map);
            marker_group.push(marker);//其他点，用蓝色表示
          }
          //console.log(marker)
          marker.bindPopup("<b>车站名称：" + site_NAME + "</b><br>" + "<b>车站编号：" + site_NUMBER + "</b><br>" + "<b>车站地址：" + site_NOWBIKE + "</b><br><b>最大锁位：" + site_MAXBIKE + "辆</b>");
          //蓝点

          marker.on('mouseover', function(e) {
            markerurl=e.target.options.icon.options.iconUrl;
            if(markerurl=='../../image/PublicBicycle/iconred.png'){
              markerlength=e.target.options.icon.options.iconSize[0]+5;
              markerwidth=e.target.options.icon.options.iconSize[1]+5;
              var newIcon = L.icon({
                iconUrl: markerurl,
                iconSize:     [markerlength, markerwidth], // size of the icon
                iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
                shadowAnchor: [0, -8],  // the same for the shadow
                popupAnchor:  [0, -8] // point from which the popup should open relative to the iconAnchor
              });
              e.target.setIcon(newIcon);
            }
            else{
              markerlength=e.target.options.icon.options.iconSize[0]+5;
              markerwidth=e.target.options.icon.options.iconSize[1]+5;
              var newIcon = L.icon({
                iconUrl: markerurl,
                iconSize:     [markerlength, markerwidth], // size of the icon
                iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
                shadowAnchor: [0, -8],  // the same for the shadow
                popupAnchor:  [0, -8] // point from which the popup should open relative to the iconAnchor
              });
              e.target.setIcon(newIcon);
            }

          })
          //鼠标移出特效
          marker.on('mouseout', function (e) {
            markerurl = e.target.options.icon.options.iconUrl;
            if (markerurl == '../../image/PublicBicycle/iconred.png') {
              markerlength = e.target.options.icon.options.iconSize[0] - 5;
              markerwidth = e.target.options.icon.options.iconSize[1] - 5;
              let newIcon = L.icon({
                iconUrl: markerurl,
                iconSize: [markerlength, markerwidth], // size of the icon
                iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
                shadowAnchor: [0, -8],  // the same for the shadow
                popupAnchor: [0, -8] // point from which the popup should open relative to the iconAnchor
              });
              e.target.setIcon(newIcon);
            } else {
              markerlength = e.target.options.icon.options.iconSize[0] - 5;
              markerwidth = e.target.options.icon.options.iconSize[1] - 5;
              let newIcon = L.icon({
                iconUrl: markerurl,
                iconSize: [markerlength, markerwidth], // size of the icon
                iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
                shadowAnchor: [0, -8],  // the same for the shadow
                popupAnchor: [0, -8] // point from which the popup should open relative to the iconAnchor
              });
              e.target.setIcon(newIcon);
            }
          })
          marker.on('click', function(e) {
            /*openPopup();*/
            /*([39.925021, 116.357607], 13);*/
            let sitename_X = e.latlng.lat;
            let sitename_Y = e.latlng.lng;
            for (let i = 0; i < bike_station.length; i++) {
              let site_LAT = bike_station[i].LATITUDE;
              let site_LON = bike_station[i].LONGITUDE;
              let site_NAME = bike_station[i].SITENAME;
              let site_MAXBIKE = bike_station[i].LOCKNUM;
              let site_NOWBIKE = bike_station[i].LOCKNUM - bike_station[i].FREESPACES;
              let site_NUMBER = i;
              if(site_LAT==sitename_X&&site_LON==sitename_Y){
                /*document.getElementById('stationName').value=site_NAME;
                site_NAME = site_NAME+"基本情况";
                document.getElementById('bikename1').innerText=site_NAME;*/
                let namesite=site_NAME
                echart_freebike = site_NOWBIKE;
                echart_locknumber = site_MAXBIKE;
                echart_usernumber = site_NOWBIKE-11;
                //PRBicycle_OD_echart11();
                self.$nextTick(()=>{
                  self.$refs.RightBox.trans(site_NAME,echart_freebike,echart_locknumber,echart_usernumber)
                })

                break;
              }



            }

          })
          self.$nextTick(()=>{
            self.$refs.RightBox.transmap(map,marker_group,site_NAME2,site_NUMBER2)
          })

        }

      }

    },
    created() {
      let self1=this;
      console.log(self1)
      //后台数据
      return request({
        url: '/bike/findAllhistory'
      }).then(res => {
        console.log(res.msg);
        let a=res.msg;
        setTimeout(self1.usenumberchange(a),5000)
      }).catch(err => {
        console.log(err);
      })

    },

    mounted() {
      let self=this;

      //渲染地图
      let map1 = L.map('mapBox',{zoomControl:false}).setView([39.925021, 116.357607], 13);
      let tilelayer = L.tileLayer('https://api.mapbox.com/styles/v1/litaizeng/cklt2ts8a21u318psl7vdmurq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ', {
        maxZoom: 18,
        foo: 'far',
      }).addTo(map1);
      //绘制站点
      self.draw(map1);
      setTimeout(self.draw(map1), 2000)//2秒重复执行一次



      }

  }
</script>

<style scoped>
#mapBox{
  width:100%;
  height: 100vh;
}
</style>

