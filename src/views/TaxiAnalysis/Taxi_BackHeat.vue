<template>
  <div id="heatmap">
    <div id="normalHeat"></div>
    <div id="label1">普通热力图</div>
    <div id="backHeat"></div>
    <div id="label2">逆向热力图</div>
  </div>

</template>

<script>
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import {request} from '../../network/request';
  import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap'
  import {pt} from '../../assets/js/TaxiBackHeat/backheat';

  let zdmap;
  let zdmap1

  export default {
    name: "Taxi_BackHeat",
    data(){
      return{
        Taxi_Data:[],//请求数据
        addressPoints:[],//从获取的的数据中得到(lat,lng)信息
        //Canvaspixel:[],//画布像素
      }
    },
    methods:{
      addmap(){//添加右侧底图
        zdmap = L.map('backHeat').setView([39.9, 116.4],11);//添加地图
        L.tileLayer('https://api.mapbox.com/styles/v1/litaizeng/cklt2ts8a21u318psl7vdmurq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ', {
          maxZoom: 18,
          foo:'far'
        }).addTo(zdmap);
      },
      addmap1(){//添加左侧底图
        zdmap1 = L.map('normalHeat').setView([39.9, 116.4],11);//添加地图
        L.tileLayer('https://api.mapbox.com/styles/v1/litaizeng/cklt2ts8a21u318psl7vdmurq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ', {
          maxZoom: 18,
          foo:'far'
        }).addTo(zdmap1);
      },
      drawNormalHeatmap(Data){//绘制普通热力图
        let testData={
          max:0.1,
          data:Data,
        }
        let cfg = {//参数
          'radius': 0.025,
          'maxOpacity': 0.9,
          'minOpacity': 0.01,
          'scaleRadius': true,
          'useLocalExtrema': true,
          latField: 'lat',
          lngField: 'lng',
          valueField: 'count',
          "gradient": {//热力图色带
            "0.8": "rgba(255,0,0,1)",
            "0.6": "rgba(255,255,0,1)",
            "0.4": "rgba(0,255,0,1)",
            "0.3": "rgba(0,255,255,1)",
            "0": "rgba(0,0,255,1)"
          }
        }
        let heatmapLayer = new HeatmapOverlay(cfg)
        heatmapLayer.addTo(zdmap1)
        heatmapLayer.setData(testData)
      },
      doget(){//获取出租车数据并存储
        let that = this;
        request({
          url:'/Taxi/getHeat',
          method:'get'
        }).then(res=>{
          //console.log(res);
          let aiLength = res.data.msg.length;
          for(let i=0;i<aiLength;i++){
            that.Taxi_Data.push(res.data.msg[i]);
          }
          let addressdata=[];
          //console.log(that.Taxi_Data)
          for(let i=1;i<that.Taxi_Data.length;i++){
            let obj={
              lat:that.Taxi_Data[i].Y,
              lng:that.Taxi_Data[i].X,
              count:that.Taxi_Data[i].Z*80,
            }
            that.addressPoints.push([that.Taxi_Data[i].Y,that.Taxi_Data[i].X,that.Taxi_Data[i].Z*80]);
            addressdata.push(obj)
          }
          //console.log(addressdata)
          //console.log(that.addressPoints)
          this.drawNormalHeatmap(addressdata)//普通热力图
          //以下为逆向热力图部分
          pt();
          L.HeatLayer=(L.Layer?L.Layer:L.Class).extend({
            /*
                this._latlngs      (lat,lon,alt)
                this._heat
                this._map
                this._frame
                this._canvas
                this.options
            */
            initialize:function(t,i){
              this._latlngs=t,
                L.setOptions(this,i)
            },
            setLatLngs:function(t){
              return this._latlngs=t,
                this.redraw()
            },
            addLatLng:function(t){
              return this._latlngs.push(t),
                this.redraw()
            },
            setOptions:function(t){
              return L.setOptions(this,t),
              this._heat&&this._updateOptions(),
                this.redraw()
            },
            redraw:function(){
              return!this._heat||this._frame||this._map._animating||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this
            },
            onAdd:function(t){
              this._map=t,
              this._canvas||this._initCanvas(),
                t._panes.overlayPane.appendChild(this._canvas),
                t.on("moveend",this._reset,this),
              t.options.zoomAnimation&&L.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),
                this._reset()
            },
            onRemove:function(t){
              t.getPanes().overlayPane.removeChild(this._canvas),
                t.off("moveend",this._reset,this),
              t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)
            },
            addTo:function(t){
              return t.addLayer(this),
                this
            },
            _initCanvas:function(){
              let t=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer leaflet-layer"),
                i=L.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);
              t.style[i]="50% 50%";
              let a=this._map.getSize();
              t.width=a.x,
                t.height=a.y;
              let s=this._map.options.zoomAnimation&&L.Browser.any3d;
              L.DomUtil.addClass(t,"leaflet-zoom-"+(s?"animated":"hide")),
                this._heat=simpleheat(t),
                this._updateOptions()
            },
            _updateOptions:function(){
              this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),
              this.options.gradient&&this._heat.gradient(this.options.gradient),
              this.options.max&&this._heat.max(this.options.max)
            },
            _reset:function(){
              let t=this._map.containerPointToLayerPoint([0,0]);
              L.DomUtil.setPosition(this._canvas,t);
              let i=this._map.getSize();
              this._heat._width!==i.x&&(this._canvas.width=this._heat._width=i.x),
              this._heat._height!==i.y&&(this._canvas.height=this._heat._height=i.y),
                this._redraw()
            },
            _redraw:function(){
              var a,
                d=[],
                _=this._heat._r,
                l=this._map.getSize(),
                m=new L.Bounds(L.point([0,0]),l),
                testa = this._map.containerPointToLatLng(L.point([0,0])),
                testb = this._map.containerPointToLatLng(L.point([0,1])),
                w = this._map.distance(testa,testb),
                n = Math.floor(1500/w),
                Stations = this._latlngs,
                count = 0,
                f = Math.pow(2,Math.max(0,(this._map.getZoom()-12)));
              var Canvaspixel = [];
              var xlen=l.x,ylen=l.y;
              for(var ki=0;ki<xlen;ki++){
                Canvaspixel[ki] = new Array();
                for(var kj=0;kj<ylen;kj++){
                  Canvaspixel[ki][kj] = 0;
                }
              }
              var count=0;
              var nn=n*n;
              for(var t=0,i=Stations.length;i>t;t++){
                var sss=Stations[t];
                if(a=this._map.latLngToContainerPoint(sss),m.contains(a)){
                  var ax=a.x,ay=a.y;
                  if(n>0){
                    for(var j=-n;j<n;j++){
                      for(var k=-n;k<n;k++){
                        var dd = Math.sqrt(j*j+k*k);
                        if((ax+j) >= 0 && (ay+k) >= 0 && (ax+j)<xlen && (ay+k)<ylen && (j*j+k*k)<=nn){
                          if(j==0&&k==0) Canvaspixel[ax+j][ay+k] += sss[2]*f;
                          else{
                            if(dd<(2*n/3)) Canvaspixel[ax+j][ay+k] += (sss[2]/dd*f);
                            else Canvaspixel[ax+j][ay+k] += (9*sss[2]*(1-dd/n)/(2*n));
                          }
                          //count++;
                        }

                      }
                    }

                  }
                }
              }
              this._heat.data(Canvaspixel).draw(this.options.minOpacity),
                this._frame=null
            },
            _animateZoom:function(t){
              var i=this._map.getZoomScale(t.zoom),
                a=this._map._getCenterOffset(t.center)._multiplyBy(-i).subtract(this._map._getMapPanePos());
              L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,a,i):this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(a)+" scale("+i+")"
            }
          }),
            L.heatLayer=function(t,i){
              return new L.HeatLayer(t,i)
            };
          let heat = L.heatLayer(this.addressPoints, {maxZoom: 15,minOpacity:0.1,radius:40,max:3.0,blur:5}).addTo(zdmap);
        }).catch(err=>{
          console.log(err);
        })
      },

    },
    mounted() {
      //绘制地图
      this.addmap1();
      this.addmap();
      //地图禁止拖拽
      zdmap.dragging.disable();
      zdmap1.dragging.disable();//这个是左侧普通热力图地图也禁拖拽了，如果想取消注释即可
      //后台获取数据绘制热力图
      this.doget();
    }
  }
</script>

<style scoped>
  html, body,#heatmap{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  #normalHeat{
    position: absolute;
    height: 100%;
    left:0px;
    width: 50%;
    margin: 0;
    padding: 0;
  }
  #backHeat {
    position: absolute;
    height: 100%;
    left:50%;
    width: 50%;
    margin: 0;
    padding: 0;
  }
  #label1{
    position: absolute;
    height: 10%;
    width: 20%;
    top:3%;
    left:30%;
    z-index: 600;
    color: #D86018;
    font-size: 40px;
  }
  #label2{
    position: absolute;
    height: 10%;
    width: 20%;
    top:3%;
    left:80%;
    z-index: 600;
    color: #D86018;
    font-size: 40px;
  }
  .leaflet-control-zoom-in{
    display: none;
  }
   .leaflet-control{
    display: none;
  }
  .leaflet-bar {
    display: none;
  }
  .leaflet-control-zoom {
    display: none !important;
  }
  .leaflet-bottom {
    display: none;
  }
</style>
