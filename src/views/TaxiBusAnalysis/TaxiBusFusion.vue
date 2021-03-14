<template>
  <div class="content">
    <div id="leftbox">
      <div style="position: absolute;font-weight: 700;color:#02C1D7;font-size: 24px;z-index: 99;margin-left: 16%;margin-top: 0.5%;">出租车和公交车早高峰出行热点</div>
      <div id="zaomap"></div>
    </div>
    <div id="rightbox">
      <div style="position: absolute;font-weight: 700;color:#02C1D7;font-size: 24px;z-index: 99;margin-left: 15%;margin-top: 0.5%;">出租车和公交车晚高峰出行热点</div>
      <div id="wanmap"></div>
    </div>
   <div class="legend">
      <div id="bus">
        <div>公交车登量</div>
          <div id="lengendcolor">
              <div id="max"></div>
              <div id="middle"></div>
              <div id="little"></div>
          </div>
          <div id="lengendcontent">
              <div >&gt1500</div>
              <div style=" margin-top: 5px;">1000-1500</div>
              <div style=" margin-top: 5px;">0-1000</div>
          </div>
      </div>
      <div id="taxi">
        <div style="float: left">出租车和出行热点</div>
        <img src="../../assets/image/TaxiBusAnalysis/relitu.png" >
      </div>
    </div>
  </div>
</template>
<script>
  import 'maptalks/dist/maptalks.css';
  import * as maptalks from "maptalks";
  import { HeatLayer } from 'maptalks.heatmap';
  import {TaxizaoGaoFeng} from "../../assets/js/TaxiBusAnalysis/CarOdian-012579";
  import {BusZaoGaoFeng} from "../../assets/js/TaxiBusAnalysis/Bus-029-79";
  import {TaxiwanGaoFeng} from "../../assets/js/TaxiBusAnalysis/CarOdian-01251719";
  import {BusWanGaoFeng} from "../../assets/js/TaxiBusAnalysis/Bus-029-1719";
    export default {
        name: "TaxiBusFusion",
        mounted() {
          let that = this
          this.map = new maptalks.Map('zaomap', {
            center: [116.409686, 39.99999999],
            zoom:12,
            pitch : 56, //俯视角
            bearing : 30,  // 旋转角
            dragRotatePitch: true,
            baseLayer: new maptalks.TileLayer('base', {
              urlTemplate:'https://api.mapbox.com/styles/v1/litaizeng/ckh4sgqak0i9319mywoay9rkv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',
              subdomains: ['a','b','c','d'],
            }),
            attribution:false
          });
          this.map.setMinZoom(12).setMaxZoom(12);
          this.map2 = new maptalks.Map('wanmap', {
            center: [116.409686, 39.99999999],
            zoom:12,
            pitch : 56, //俯视角
            bearing : 30,  // 旋转角
            dragRotatePitch: true,
            baseLayer: new maptalks.TileLayer('base', {
              urlTemplate:'https://api.mapbox.com/styles/v1/litaizeng/ckh4sgqak0i9319mywoay9rkv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',
              subdomains: ['a','b','c','d'],
            }),
            attribution:false
          });
          this.map2.setMinZoom(12).setMaxZoom(12);
          let data = [];
          for(let i=0;i<TaxizaoGaoFeng.msg.length;i++){
            let unit=[];
            unit.push(TaxizaoGaoFeng.msg[i].lng);
            unit.push(TaxizaoGaoFeng.msg[i].lat);
            unit.push('0.0045');
            data.push(unit);
          }
          let wanData = [];
          for(let i=0;i<TaxiwanGaoFeng.msg.length;i++){
            let unit=[];
            unit.push(TaxiwanGaoFeng.msg[i].lng);
            unit.push(TaxiwanGaoFeng.msg[i].lat);
            unit.push('0.0045');
            wanData.push(unit);
          }
          let heatLayer = new HeatLayer('heat', data).addTo(this.map);
          heatLayer.config({
            'gradient' : {0.2:'blue',0.4: 'blue', 0.6: 'green',0.8:'yellow',1: 'red'},
          });
          let heatLayer1 = new HeatLayer('heat', wanData).addTo(this.map2);
          let lineArr=[];
          for(let i=0;i<BusZaoGaoFeng.msg.length;i++){
            if(BusZaoGaoFeng.msg[i].CHANGE_NUM>500){
              let textNamerr=BusZaoGaoFeng.msg[i].siteName+","+BusZaoGaoFeng.msg[i].CHANGE_NUM;
              let colorrr="";
              let widthrrr;
              if(BusZaoGaoFeng.msg[i].CHANGE_NUM>1500){
                colorrr='#FF0000';
                widthrrr =8;
              }else if(BusZaoGaoFeng.msg[i].CHANGE_NUM>1000){
                colorrr='#00FF00';
                widthrrr =6;
              }else{
                colorrr='#0000FF';
                widthrrr=4
              }
              let fff=2000+parseInt(BusZaoGaoFeng.msg[i].CHANGE_NUM);
              let poi1=[parseFloat(BusZaoGaoFeng.msg[i].lat), parseFloat(BusZaoGaoFeng.msg[i].lng)];
              let poii=[poi1,poi1];
              let unitLine = new maptalks.LineString(poii, {
                symbol: {
                  'lineColor': colorrr,
                  'lineWidth': widthrrr
                },
                properties: {
                  'altitude': [1000,fff] //altitude for all vertexes
                }
              });
              lineArr.push(unitLine);
            }
          }
          new maptalks.VectorLayer('vector', lineArr, {
            enableAltitude: true
          }).addTo(this.map);
          let wanlineArr=[];
          for(let i=0;i<BusWanGaoFeng.msg.length;i++){
            if(BusWanGaoFeng.msg[i].CHANGE_NUM>500){
              let textNamerr=BusWanGaoFeng.msg[i].siteName+","+BusWanGaoFeng.msg[i].CHANGE_NUM;
              let colorrr="";
              let widthrrr;
              if(BusWanGaoFeng.msg[i].CHANGE_NUM>1500){
                colorrr='#FF0000';
                widthrrr =8;
              }else if(BusWanGaoFeng.msg[i].CHANGE_NUM>1000){
                colorrr='#00FF00';
                widthrrr =6;
              }else{
                colorrr='#0000FF';
                widthrrr=4;
              }
              let fff=2000+parseInt(BusWanGaoFeng.msg[i].CHANGE_NUM);
              let poi1=[parseFloat(BusWanGaoFeng.msg[i].lat), parseFloat(BusWanGaoFeng.msg[i].lng)];
              let poii=[poi1,poi1];
              let unitLine = new maptalks.LineString(poii, {
                symbol: {
                  'lineColor': colorrr,
                  'lineWidth': widthrrr,
                },
                properties: {
                  'altitude': [1000,fff] //altitude for all vertexes
                }
              });
              wanlineArr.push(unitLine);
            }
          }
          new maptalks.VectorLayer('vector', wanlineArr, {
            enableAltitude: true
          }).addTo(this.map2);
          //地图联动
          //
          this.map.on('viewchange', function (param) {
             let a=that.map.getCenter()
             that.map2.setCenter(a)
             let b=that.map.getZoom()
             that.map2.setZoom(b)
            let c=that.map.getView()
            that.map2.setView(c)
          });
          this.map2.on('viewchange', function (param) {
            let a=that.map2.getCenter()
            that.map.setCenter(a)
            let b=that.map2.getZoom()
            that.map.setZoom(b)
            let c=that.map.getView()
            that.map2.setView(c)
          });
        }


    }
</script>
<style scoped>
  .content
  {
    width: 100%;
    height: 100%;
  }
  #leftbox
  {
    float: left;
    width: 50%;
    height: 100%;
    background-image: url("../../assets/image/TaxiBusAnalysis/border.png");
    background-size: 100% 100%;
  }
  #rightbox
  {

    float: left;
    width: 50%;
    height: 100%;
    background-image: url("../../assets/image/TaxiBusAnalysis/border.png");
    background-size: 100% 100%;
  }
#zaomap
{
  margin-top: 0.5%;
  margin-left: 0.5%;
  width: 99%;
  height: 99%;
}
#wanmap
 {
  margin-top: 0.5%;
  margin-left: 0.5%;
  width: 99%;
  height: 99%;
}

  .legend{
      border-width: 1px;
      border-style: solid;
      border-color: rgba(40, 176, 213, 1);
    color: white;
    position: absolute;
    bottom: 0px;
    float: right;
      width: 9%;
    right: 0px;
  }

  #lengendcolor{
      margin-right: 7px;
      float: left;
  }

    #max{
        width: 25px;
        height: 25px;
        background-color: #FF0000;
    }
   #middle{
      width: 25px;
      height: 25px;
      background-color: #00FF00;
  }
  #little{
      width: 25px;
      height: 25px;
      background-color: #0000FF;
  }

</style>
