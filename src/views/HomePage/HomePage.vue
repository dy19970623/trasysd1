<template>
    <div class="homepage">
      <div id="cesiumContainer"></div>
      <div id="selectNamenbox">
        <el-select v-model="value" placeholder="" @change="selectIndex" popper-class="selectFrom" id="selectbox1" class="selectbox" :popper-append-to-body="false" style="background-color: #19344bb3">
          <el-option
            v-for="item in selectName"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div id="LayerControl">
        <p class="LayerControltitle">图层控制</p>
        <div style="width: 50px;height: 50px;float:left;" @click="selectMainRoad()"  v-model="maindis" id="mainbox">
          <img class="imagelabel" src="../../assets/image/HomePage/1.png" v-show="mainIcon">
          <img  class="imagelabel" src="../../assets/image/HomePage/0.png"  v-show="!mainIcon">
        </div>
        <div style="width: 50px;height: 50px;float:left" @click="selectSecondRoad()"  v-model="seconddis" id="secondbox">
          <img  class="imagelabel" src="../../assets/image/HomePage/2.png" v-show="secondIcon">
          <img  class="imagelabel" src="../../assets/image/HomePage/0.png"  v-show="!secondIcon">
        </div>
        <div style="width: 50px;height: 50px;float:left" @click="selectFreeWay()"  v-model="freedis" id="freebox">
          <img  class="imagelabel" src="../../assets/image/HomePage/3.png" v-show="freeIcon">
          <img  class="imagelabel" src="../../assets/image/HomePage/0.png"  v-show="!freeIcon">
        </div>
        <div style="width: 50px;height: 50px;float:left" @click="selectAccessRoad()"  v-model="accessdis" id="accessbox">
          <img  class="imagelabel" src="../../assets/image/HomePage/4.png" v-show="accessIcon">
          <img  class="imagelabel" src="../../assets/image/HomePage/0.png"  v-show="!accessIcon">
        </div>
      </div>
      <div id="leftBox">
        <div   class="grid-table">
          <p class="homepage_font" style="left: 41%">地铁客流总量</p>
          <div id="subwayChart"></div>
        </div>
        <div   class="grid-table">
          <p class="homepage_font" style="left: 38%">城区公交OD对比</p>
          <div id="busChart"></div>
        </div>
        <div  class="grid-table">
          <p class="homepage_font" style="left: 40%">自行车租还情况</p>
          <div id="bikeChart" ></div>
        </div>
      </div>
      <div id="rightBox">
        <div class="grid-table">
          <p class="homepage_font" style="left: 40%">停车场类型分布</p>
          <div id="parkChart"></div>
        </div>
        <div class="grid-table">
          <p class="homepage_font" style="left: 39%">出租车运行情况</p>
          <div id="taxiChart"></div>
        </div>
        <div  class="grid-table">
          <p class="homepage_font" style="left: 38%">出行方式耗时对比</p>
          <div id="busAndTaxiChart"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import {stationflow} from "../../assets/js/BusAnalysis/Station_Flow"
  import  homepageG from '../../assets/js/HomePage/homepagedata'
  import { graphic } from 'echarts/lib/export'
  let viewer,Cesium
export default {
   name: "HomePage",
  data() {
    return {
      selectName: [{
        value: '北京市白盒模型',
        label: '北京市白盒模型'
      }, {
        value: '鄂尔多斯三维',
        label: '鄂尔多斯三维'
      }, {
        value: '故宫三维影像',
        label: '故宫三维影像'
      }, {
        value: '杭州倾斜影像',
        label: '杭州倾斜影像'
      }],
      value:{},
      taxi_msg:{},
      mainRoadEntity:{},
      maindis:true,
      seconddis:true,
      freedis:true,
      accessdis:true,
      mainIcon:true,
      secondIcon:true,
      freeIcon:true,
      accessIcon:true
    }
  },
  methods:{
    selectIndex(value) {
      let select
      this.item = this.selectName.find((item) => {
        if (value=="北京市白盒模型") {let bbb =1;this.selectindex(bbb);}
        if (value=="鄂尔多斯三维") {let bbb =2;this.selectindex(bbb);}
        if (value=="故宫三维影像") {let bbb =3;this.selectindex(bbb);}
        if (value=="杭州倾斜影像") {let bbb =4;this.selectindex(bbb);}
      })
      return  homepageG.selectNameIndex
    },
    selectindex(a){
      if (a==1)
      {
        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(116.3732, 39.9470,500),
          orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-25.0),
            roll : 0.0
          }
        });
      }
      if (a==2)
      {
        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(109.8448, 39.6596,100),
          orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-5),
            roll : 0.0
          }})
      }
      if (a==3)
      {
        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(116.3866, 39.9112,500),
          orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-25.0),
            roll : 0.0
          }
        });
      }
      if (a==4)
      {
        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(119.9494, 29.336,500),
          orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-25.0),
            roll : 0.0
          }
        });
      }
    },
    selectMainRoad()
    {
      this.mainIcon = !this.mainIcon
      if (!this.maindis)
      {
        for(var i=0;i<homepageG.mainRoadEntity.length;i++){
          homepageG.mainRoadEntity[i].show=true;
          this.maindis=true;
        }
      }
      else {
        for(var i=0;i<homepageG.mainRoadEntity.length;i++){
          homepageG.mainRoadEntity[i].show=false;
          this.maindis=false;
        }
      }
    },
    selectSecondRoad()
    {
      this.secondIcon = !this.secondIcon
      if(!this.seconddis)
      {
        homepageG.SecondRoadDataSource.show=true;
        this.seconddis=true;
      }
      else{
        homepageG.SecondRoadDataSource.show=false;
        this.seconddis=false;
      }
    },
    selectFreeWay()
    {
      this.freeIcon = !this.freeIcon
      if(!this.freedis)
      {
        homepageG.FreeWayDataSource.show=true;
        this.freedis=true;
      }
      else{
        homepageG.FreeWayDataSource.show=false;
        this.freedis=false;
      }
    },
    selectAccessRoad(){
      this.accessIcon = !this.accessIcon
      if(!this.accessdis)
      {
        homepageG.AccessRoadDataSource.show=true;
        this.accessdis=true;
      }
      else{
        homepageG.AccessRoadDataSource.show=false;
        this.accessdis=false;
      }
    },
    Cesium() {
      /**
       * 本系统用到的相关代码
       */
      let that=this
      function addWFSLayer(url,options={},callback=null){ //加载geoserve数据函数
        const defaultOptions= {
          service: 'WFS',
          version: '1.0.0',
          request: 'GetFeature',
          outputFormat: 'application/json'
        }
        if(!options['typeName']){
          alert('typeName参数必须提供')
          return
        }
        for(let key in options){
          defaultOptions[key]=options[key]
        }
        let urlString=url+'?'
        for(let key in defaultOptions){
          urlString+=`&${key}=${defaultOptions[key]}`
        }
        that.axios.get(urlString).then((res)=>{
          if(res.status==200){
            if(callback){
              callback(res.data)
            }
          }
        }).catch((e)=>{
          //console.log(e)
        })
      }
      Cesium = this.cesium
      Cesium.Camera.DEFAULT_VIEW_FACTOR=-0.25//摄像机视口远近参数，可设置地球大小
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90, 0, 110, 90);//西南东北，默认显示中国
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjYzZDU2YS04OTYwLTQ5MzUtYjVjNC04NGJjOWFiZTc1ZTkiLCJpZCI6MzUzOTUsImlhdCI6MTYxNDIzMjU4OX0.MIdsd58Fto7ZMGcYdN7Diq643oSflOlj94qpvEFNmtA'
      viewer = new Cesium.Viewer('cesiumContainer',{
        baseLayerPicker:false,
        fullscreenButton:false,						//全屏按钮
        vrButton:false,
        geocoder:false,								//地理编码搜索框
        homeButton:true,							//HOME按钮
        infoBox:true,								//信息窗口
        sceneModePicker:true,
        selectionIndicator:false,					//选择要素窗口关闭
        navigationHelpButton:true,
        timeline:true,                             //时间轴
        animation:true,
        shouldAnimate: true,
        imageryProvider : new Cesium.MapboxStyleImageryProvider({
          url:'https://api.mapbox.com/styles/v1',
          username:'litaizeng',
          styleId: 'cklrhlip10ib717qkkr26fm1t',
          accessToken: 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',
          scaleFactor:true,

        }),
      });
      viewer._cesiumWidget._creditContainer.style.display = "none";// 隐藏版权
      viewer.animation.container.style.visibility='hidden';
      viewer.timeline.container.style.visibility='hidden';
      // 设置初始化
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(116.3654, 39.9043,19830000),
        orientation: {
          heading : Cesium.Math.toRadians(0),
          pitch : Cesium.Math.toRadians(-90),
          roll : Cesium.Math.toRadians(0)
        }
      });
      setTimeout(function(){
        viewer.camera.flyTo({
          destination : Cesium.Cartesian3.fromDegrees(116.3654, 39.9043,100),
        });
      },5000);
      //加载北京市建筑物百白盒模型
      let tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url : 'http://10.100.54.135:8080/BJTiles/tileset.json'
      }));
      tileset.readyPromise.then(function(tileset) {
        // tile.properties is not defined until readyPromise resolves.
        let properties = tileset.properties;
        if (Cesium.defined(properties)) {
          for (let name in properties) {
            //console.log(properties[name]);
          }
        }
      });
      //故宫3DMax影像
      var x = 380;
      var y = -660;
      var z = 910;
      var step = 10;
// var x = 0;
// var y = 0;
// var z = 0;
      var m = Cesium.Matrix4.fromArray([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        x, y, z, 1.0
      ]);
      var gugongtileset = new Cesium.Cesium3DTileset({
        type:"3dtiles",
        url:'/api/guGongTile/tileset.json',
        modelMatrix: m  //方法一，动态修改modelMatrix
      });
      var fixGltf = function(gltf) {
        if (!gltf.extensionsUsed) {
          return;
        }
        var v = gltf.extensionsUsed.indexOf('KHR_technique_webgl');
        var t = gltf.extensionsRequired.indexOf('KHR_technique_webgl');
        if (v !== -1) {
          gltf.extensionsRequired.splice(t, 1, 'KHR_techniques_webgl');
          gltf.extensionsUsed.splice(v, 1, 'KHR_techniques_webgl');
          gltf.extensions = gltf.extensions || {};
          gltf.extensions['KHR_techniques_webgl'] = {};
          gltf.extensions['KHR_techniques_webgl'].programs = gltf.programs;
          gltf.extensions['KHR_techniques_webgl'].shaders = gltf.shaders;
          gltf.extensions['KHR_techniques_webgl'].techniques = gltf.techniques;
          var techniques = gltf.extensions['KHR_techniques_webgl'].techniques;
          gltf.materials.forEach(function (mat, index) {
            gltf.materials[index].extensions['KHR_technique_webgl'].values = gltf.materials[index].values;
            gltf.materials[index].extensions['KHR_techniques_webgl'] = gltf.materials[index].extensions['KHR_technique_webgl'];
            var vtxfMaterialExtension = gltf.materials[index].extensions['KHR_techniques_webgl'];
            for (var value in vtxfMaterialExtension.values) {
              var us = techniques[vtxfMaterialExtension.technique].uniforms;
              for (var key in us) {
                if (us[key] === value) {
                  vtxfMaterialExtension.values[key] = vtxfMaterialExtension.values[value];
                  delete vtxfMaterialExtension.values[value];
                  break;
                }
              }
            };
          });
          techniques.forEach(function (t) {
            for (var attribute in t.attributes) {
              var name = t.attributes[attribute];
              t.attributes[attribute] = t.parameters[name];
            };
            for (var uniform in t.uniforms) {
              var name = t.uniforms[uniform];
              t.uniforms[uniform] = t.parameters[name];
            };
          });
        }
      }
      Object.defineProperties(Cesium.Model.prototype, {
        _cachedGltf: {
          set: function (value) {
            this._vtxf_cachedGltf = value;
            if (this._vtxf_cachedGltf && this._vtxf_cachedGltf._gltf) {
              fixGltf(this._vtxf_cachedGltf._gltf);
            }
          },
          get: function () {
            return this._vtxf_cachedGltf;
          }
        }
      });
      //杭州小镇倾斜影像
      var hangzhoutileset = new Cesium.Cesium3DTileset({
        type:"3dtiles",
        url:'/api/hangZhouTile/tileset.json',
      });
      //鄂尔多斯3DMax影像
      var edstileset = new Cesium.Cesium3DTileset({
        type:"3dtiles",
        url:'/api/erdsTile/tileset.json',
        modelMatrix:Cesium.Matrix4.IDENTITY
      });
      viewer.scene.primitives.add(edstileset);
      viewer.scene.primitives.add(hangzhoutileset);
      hangzhoutileset.readyPromise.then(function(tileset) {
        // Set the camera to view the newly added tileset
        /*viewer.camera.viewBoundingSphere(hangzhoutileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));*/
        var heightOffset = -100;
        var boundingSphere = tileset.boundingSphere;
        var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
        var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
        var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
      });
      viewer.scene.primitives.add(gugongtileset);

      //设定了模拟时间的边界
      let start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
      let stop = Cesium.JulianDate.addSeconds(start, 45, new Cesium.JulianDate());
      function computeFlight(positionArray) {
        let property = new Cesium.SampledPositionProperty();
        for (let i = 0; i <positionArray.length; i ++) {
          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
          let position =new Cesium.Cartesian3.fromDegrees(positionArray[i][0],positionArray[i][1]);
          property.addSample(time, position);
        }
        return property;
      }
      //确保查看器处于预期的时间
      viewer.clock.startTime = start.clone();
      viewer.clock.stopTime = stop.clone();
      viewer.clock.currentTime = start.clone();
      viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //循环结束时
      // 时间变化来控制速度
      viewer.clock.multiplier = 5;
      //给时间线设置边界
      viewer.timeline.zoomTo(start, stop);
      //加载主干道
      //var mainRoadEntity=[];
      var TraSyS_GeoServer_Ip="http://10.100.54.135:8888";
      var TraSys_MainRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:mainroad84&maxFeatures=5000&outputFormat=application%2Fjson";
      addWFSLayer('http://10.100.54.135:8888/geoserver/cite/ows',{
        typeName:'cite%3Amainroad84'
      },(geojson) =>{
        var Station_features = geojson.features;
        for (var i = 0; i < Station_features.length; i++)
        {
          var alphaValue=Math.random();
          if(alphaValue<=0.2){
            alphaValue=0.2;
          }
          var dengjiValue="暂无";
          if(alphaValue<=0.2){
            dengjiValue="畅通";
          }
          else if(alphaValue>0.2&&alphaValue<=0.4){
            dengjiValue="基本畅通";
          }
          else if(alphaValue>0.4&&alphaValue<=0.6){
            dengjiValue="轻度拥堵";
          }
          else if(alphaValue>0.6&&alphaValue<=0.8){
            dengjiValue="中度拥堵";
          }
          else if(alphaValue>0.8&&alphaValue<=1.0){
            dengjiValue="严重拥堵";
          }
          var widthvalue=alphaValue*25;
          var ppposition=computeFlight(Station_features[i].geometry.coordinates["0"]);
          homepageG.mainRoadEntity[i] = viewer.entities.add({
            //Set the entity availability to the same interval as the simulation time.
            availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
              start : start,
              stop : stop
            })]),
            //Use our computed positions
            position : ppposition,
            //Automatically compute orientation based on position movement.
            orientation : new Cesium.VelocityOrientationProperty(ppposition),
            //Load the Cesium plane model to represent the entity
            model : {
              uri : 'model3D/GroundVehicle.glb',
              minimumP1ixelSize :50,
              scale:8,
              distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),
            },
            //Show the path as a pink line sampled in 1 second increments.
            path : {
              resolution : 1,
              material : new Cesium.PolylineGlowMaterialProperty({
                glowPower : 0.2,
                color : Cesium.Color.ORANGERED.withAlpha(alphaValue)
              }),
              width :widthvalue
            },
            name:"MainRoad",
            /*     description:'<table class="cesium-infoBox-defaultTable"><tbody>' +
                   '<tr><th>拥堵等级</th><td>' +dengjiValue+ '</td></tr>' +
                   '<tr><th>道路名称</th><td>' +Station_features[i]._properties._标准名称+ '</td></tr>' +
                   '<tr><th>道路类型</th><td>' +"主干道"+ '</td></tr>' +
                   '<tr><th>车道数</th><td>' +"暂无"+ '</td></tr>' +
                   '<tr><th>车道宽</th><td>' +"暂无"+ '</td></tr>' +
                   '<tr><th>里程</th><td>' +"暂无"+ '</td></tr>' +
                   '<tr><th>分类代码</th><td>' +Station_features[i]._properties._分类代码+ '</td></tr>' +
                   '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
                   '</tbody></table>'*/
          });
        }
      })
      //加载快速干道
      //var FreeWayDataSource;
      var TrasSys_FreeWay_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:freeway&maxFeatures=5000&outputFormat=application%2Fjson";
      var FreeWayPromise=Cesium.GeoJsonDataSource.load(TrasSys_FreeWay_GeoJson);
      FreeWayPromise.then(function(dataSource) {
        homepageG.FreeWayDataSource=dataSource;
        viewer.dataSources.add(dataSource);
        var entities = dataSource._entityCollection._entities._array; // 获取所有对象
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          var polyline = {
            positions:entity.polyline._positions,
//                        width:15,
//                        material:Cesium.Color.GRAY,
            //material:Cesium.Color.RED
            width:8,
            material:Cesium.Color.SLATEGRAY
          }
          entity.polyline=polyline;
          entity.name="FreeWay";
          entity.description='<table class="cesium-infoBox-defaultTable"><tbody>' +
            '<tr><th>道路名称</th><td>' +entity._properties._NAME+ '</td></tr>' +
            '<tr><th>道路类型</th><td>' +"快速干道"+ '</td></tr>' +
            '<tr><th>车道数</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>车道宽</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>里程</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>ORGTYPE</th><td>' +entity._properties._ORGTYPE+ '</td></tr>' +
            '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
            '</tbody></table>';
        }
      });
      //加载西城区次干道
      //var SecondRoadDataSource;
      var TrasSys_SecondRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:secondaryroad&maxFeatures=5000&outputFormat=application%2Fjson";
      var SecondRoadPromise=Cesium.GeoJsonDataSource.load(TrasSys_SecondRoad_GeoJson);
      SecondRoadPromise.then(function(dataSource) {
        homepageG.SecondRoadDataSource=dataSource;
        viewer.dataSources.add(dataSource);
        var entities = dataSource._entityCollection._entities._array; // 获取所有对象
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          var polyline = {
            positions:entity.polyline._positions,
//                        width:6,
//                        material:Cesium.Color.GRAY
            //material:Cesium.Color.MAGENTA
            width:4,
            material:Cesium.Color.SLATEGRAY
          }
          entity.polyline=polyline;
          entity.name="SecondRoad";
          entity.description='<table class="cesium-infoBox-defaultTable"><tbody>' +
            '<tr><th>道路名称</th><td>' +entity._properties.标准名称+ '</td></tr>' +
            '<tr><th>道路类型</th><td>' +"次干道"+ '</td></tr>' +
            '<tr><th>车道数</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>车道宽</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>里程</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>分类代码</th><td>' +entity._properties._分类代码+ '</td></tr>' +
            '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
            '</tbody></table>';
        }
      });
      //加载西城区支路及街道
      //var AccessRoadDataSource;
      var TrasSys_AccessRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:accessroad&maxFeatures=5000&outputFormat=application%2Fjson";
      var AccessRoadPromise=Cesium.GeoJsonDataSource.load(TrasSys_AccessRoad_GeoJson);
      AccessRoadPromise.then(function(dataSource) {
        homepageG.AccessRoadDataSource=dataSource;
        viewer.dataSources.add(dataSource);
        var entities = dataSource._entityCollection._entities._array; // 获取所有对象
        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          var polyline = {
            positions:entity.polyline._positions,
//                        width:4,
//                        material:Cesium.Color.GRAY
            width:3,
            material:Cesium.Color.SLATEGRAY
            //material:Cesium.Color.GREEN
          }
          entity.polyline=polyline;
          entity.name="SecondRoad";
          entity.description='<table class="cesium-infoBox-defaultTable"><tbody>' +
            '<tr><th>道路名称</th><td>' +entity._properties.道路名称+ '</td></tr>' +
            '<tr><th>道路类型</th><td>' +"支路及街坊路"+ '</td></tr>' +
            '<tr><th>车道数</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>车道宽</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>里程</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>分类代码</th><td>' +"暂无"+ '</td></tr>' +
            '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
            '</tbody></table>';
        }
      });
      let unquireData=[];
      unquireData.push(stationflow[0]);
      for(let i=1;i<stationflow.length;i++) {
        let flag=false;
        for(let j=0;j<unquireData.length;j++) {
          if(stationflow[i].stationname.toString()==unquireData[j].stationname.toString()){
            unquireData[j].countnum=(parseInt(unquireData[j].countnum)+parseInt(stationflow[i].countnum)).toString();
            flag=true;
          }
        };
        if(!flag){
          unquireData.push(stationflow[i]);
        }
      };
      for(let i=0;i<unquireData.length;i++){
        let pcolor = 2;
        if(unquireData[i].countnum<500){
          pcolor = 2;
        }else if(unquireData[i].countnum>500&&unquireData[i].countnum<2000){
          pcolor = 3;
        }else if(unquireData[i].countnum>2000&&unquireData[i].countnum<3500){
          pcolor = 4;
        }else if(unquireData[i].countnum>3500&&unquireData[i].countnum<5000){
          pcolor = 5;
        }else if(unquireData[i].countnum>5000&&unquireData[i].countnum<6500){
          pcolor = 6;
        }else if(unquireData[i].countnum>6500&&unquireData[i].countnum<8000){
          pcolor = 7;
        }else if(unquireData[i].countnum>8000&&unquireData[i].countnum<10000){
          pcolor = 8;
        }else if(unquireData[i].countnum>10000&&unquireData[i].countnum<15000){
          pcolor = 9;
        }else if(unquireData[i].countnum>15000&&unquireData[i].countnum<20000){
          pcolor = 10;
        }
        else{
          pcolor = 11;
        }
        let surfacePosition = Cesium.Cartesian3.fromDegrees(Number(unquireData[i].longitude), Number(unquireData[i].latitude), 0);
        let heightPosition = Cesium.Cartesian3.fromDegrees(Number(unquireData[i].longitude), Number(unquireData[i].latitude), Number(unquireData[i].countnum/10));
        let name = unquireData[i].stationname;

        //WebGL Globe only contains lines, so that's the only graphics we create.
        let polyline = new Cesium.PolylineGraphics();
//         polyline.material = new Cesium.ColorMaterialProperty(Cesium.Color.MEDIUMSEAGREEN);
        polyline.material = new Cesium.ColorMaterialProperty(Cesium.Color.ORANGE)
        polyline.width = new Cesium.ConstantProperty(pcolor);
        polyline.followSurface = new Cesium.ConstantProperty(false);
        polyline.positions = new Cesium.ConstantProperty([surfacePosition, heightPosition]);

        //The polyline instance itself needs to be on an entity.
        let entity = new Cesium.Entity({
          position:heightPosition,
          label: {
            text :'公交站位:'+unquireData[i].stationname.toString()+'\n'+'今日登量:'+unquireData[i].countnum+'人次',
            horizontalOrigin:Cesium.HorizontalOrigin.CENTER,
            backgroundColor : Cesium.Color.fromBytes(246,145,14),
            showBackground : true,
            backgroundPadding:new Cesium.Cartesian2(10,10),
            verticalOrigin :Cesium.VerticalOrigin.BOTTOM,
            pixelOffset :new Cesium.Cartesian2(0,-15),
            scaleBydistance:true,
            scaleByDistance : new Cesium.NearFarScalar(200,1, 2000,0.0),

          },
          polyline:polyline,

        });
        //entity.polyline.distanceDisplayCondition=new Cesium.DistanceDisplayCondition(10.0, 20000.0);
        viewer.entities.add(entity);
      }
    },
     TaxiChart(){
       let myChart = this.$echarts.init(document.getElementById('taxiChart'));
       let option={
         baseOption : {
           timeline: {
             axisType: 'category',
             autoPlay: true,
             playInterval: 2000,
             show:false,
             lineStyle:{
               color:'#6495ed',
               shadowColor:'#a9a9a9',
               labelColor:'#c0c0c0'
             },
             label:{
               normal:{color:"#6495ed"},
               emphasis:{color:"#6495ed"}
             },
             itemStyle:{
               normal:{
                 color:'#00008b',
                 shadowColor:'#a9a9a9',

               },
               emphasis:{
                 color:'#ffebcd'
               }
             },
             checkpointStyle:{
               color:'#6495ed',
               borderColor:'#ffebcd',
               borderWidth:1
             },
             controlStyle:{
               normal:{
                 color:'#6495ed',
                 borderColor:'#6495ed'
               },
               emphasis:{
                 color:'#4b0082',
                 borderColor:'#ffebcd'
               }
             },
             data: ['3:00-3:59', '4:00-4:59', '5:00-5:59', '6:00-6:59','7:00-7:59','8:00-8:59','9:00-9:59']
           },
           title:[{
             /* text: '出租车',*/
             top:'15px',
             right: '20px',
             //top: 26,
             textStyle: {
               fontSize: 18,
               color: '#fff',
               fontWeight:"normal",
             },

           }
           ],
           grid:{
             top:'20%',
             left: '8%',
             right: '8%',
             height:'70%',
             width:'80%',
             containLabel: true
           },
           roam: true,
           xAxis: [
             {//空载、满载、驻车、停运和其他情况
               type:'category',
               data:[
                 '空载','满载', '驻车','停运'
               ],
               axisLine: {
                 lineStyle: {
                   color: "#403a3a"
                 }
               },
               axisLabel:{
                 textStyle: {
                   color: '#fff'
                 }
               }
             }
           ],
           yAxis: [
             {
               type: 'value',
               name: '数量（辆）',
               max: 10000,
               nameTextStyle:{//y轴上方单位的颜色
                 color:'#fff'
               },
               axisLine: {
                 lineStyle: {
                   color: "#403a3a"
                 }
               },
               axisLabel:{
                 textStyle: {
                   color: '#fff'
                 }
               },
               splitLine: {
                 show: false
               } ,
               nameTextStyle:{
                 color:"white"
               },
               axisLine: {
                 lineStyle: {
                   color: "#403a3a"
                 }
               },
             },
           ],
           series: [
             {
               itemStyle:{
                 normal: {

                   color: function(params) {
                     let colorList = [
                       new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#ed5c5c'
                       }, {
                         offset: 1,
                         color: '#990000'
                       }]),
                       new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#00CCFF'
                       }, {
                         offset: 1,
                         color: '#40bdf2'
                       }]),
                       new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#9933FF'
                       }, {
                         offset: 1,
                         color: '#660033'
                       }]),
                       new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#FFFF66'
                       }, {
                         offset: 1,
                         color: '#FF6600'
                       }]),
                     ];
                     return colorList[params.dataIndex];
                   },
                   barBorderRadius:[5, 5, 0, 0],
                 },
               },
               barWidth:"35px",
               type: 'bar',
             }
           ]
         },
         options:
           [  		//各时段和数据
             {
               title: { text: '3:00-3:59'},
               series:[{data:[4056,206,7547,50]}]
             },
             {
               title: { text: '4:00-4:59'},
               series:[{data:[3580,177,8104,29]}]
             },
             {
               title: { text: '5:00-5:59'},
               series:[{data:[3664,203,8007,32]}]
             },
             {
               title: { text: '6:00-6:59'},
               series:[{data:[4181,459,7269,35]}]
             },
             {
               title: { text: '7:00-7:59'},
               series:[{data:[4706,1653,5578,45]}]
             },
             {
               title: { text: '8:00-8:59'},
               series:[{data:[4520,3444,4041,50]}]
             },
             {
               title: { text: '9:00-10:59'},
               series:[{data:[4520,3444,4041,50]}]
             }
           ]
       }
       myChart.setOption(option);
     },
     BikeChart(){
       let HomePage_bikeDay = new Array;
       let j = 0;
       let t = "2015-4-1";
       let myDate = new Date(t);
       let time11 = myDate.getTime();
       let myChart = this.$echarts.init(document.getElementById('bikeChart'));
       //清空数组，重新赋值
       HomePage_bikeDay.splice(0, HomePage_bikeDay.length);
       for (let i = 0; i < 7; i++) {
         HomePage_bikeDay[i] = timestampToTime(time11+86400000*i);
       }
       HomePage_bike(myChart);
       //setInterval("remove_line()",10000);
       function remove_line(){
         j=j+2;
         HomePage_bike(myChart);
       }
       function timestampToTime(timestamp) {
         let date = new Date(timestamp /** 1000*/);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
         let Y = date.getFullYear() + '-';
         let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
         let D = date.getDate() /*+ ' '*/;
         let h = date.getHours() + ':';
         let m = date.getMinutes() + ':';
         let s = date.getSeconds();
         return Y+M+D;
       }
       //echarts图表
       function HomePage_bike(a){
         let xAxisData = [];
         let data1 = [3*20*148/1000,5*20*148/1000,8*20*148/1000,6*20*148/1000,2*20*148/1000,7*20*148/1000,[3*20*148+j*parseInt(Math.random()*1+3)]/1000];
         let data2 = [-3*20*148/1000,-2*20*148/1000,-7*20*148/1000,-2*18*148/1000,-2*20*148/1000,-9*20*148/1000,[-2*20*148-j*parseInt(Math.random()*1+2)]/1000];
         for (let i = 0; i < HomePage_bikeDay.length; i++) {
           xAxisData.push(HomePage_bikeDay[i]);
         }
         let option4 = {
           legend: {
             data: ['租', '还'],
             top:"10%",
             left:"65%",
             // bottom:"bottom",
             textStyle:{
               color:'#FFF',
               fontSize: 12
             },
           },
           grid: {
             top:'20%',
             left: '8%',
             right: '8%',
             height:'70%',
             width:'80%',
             containLabel: true
           },
           tooltip: {formatter: '{a}<br>{b}:{c}千辆'},
           xAxis: {
             data: xAxisData,
             silent: false,
             axisLine: {
               lineStyle: {
                 color: "#403a3a"
               }
             },
             axisLabel:{
               textStyle: {
                 color: '#fff'
               }
             }
           },
           yAxis: {
             type: 'value',
             name: '数量（千辆）',
             nameTextStyle:{//y轴上方单位的颜色
               color:'#fff'
             },
             axisLine: {
               lineStyle: {
                 color: "#403a3a"
               }
             },
             axisLabel:{
               textStyle: {
                 color: '#fff'
               }
             },
             splitLine: {
               show: false
             }
           },
           series: [{
             name: '租',
             type: 'bar',
             barMaxWidth:"55%",
             barGap: '-100%',
             data: data1,
             animationDelay: function (idx) {
               return idx * 10;
             },
             itemStyle: {
               normal: {
                 color: new graphic.LinearGradient(0, 0, 0, 1, [{
                   offset: 0,
                   color: '#4AB3DF'
                 }, {
                   offset: 1,
                   color: '#19344B'
                 }]),
                 barBorderRadius:[5, 5, 0, 0]
               }
             }
           }, {
             name: '还',
             type: 'bar',
             barMaxWidth:"55%",
             data: data2,
             animationDelay: function (idx) {
               return idx * 10 + 100;
             },
             itemStyle: {
               normal: {
                 color: new graphic.LinearGradient(0, 0, 0, 1, [{
                   offset: 0,
                   color: '#0c5649'
                 }, {
                   offset: 1,
                   color: '#1accac'
                 }]),
                 barBorderRadius:[0, 0, 5, 5]
               }
             }
           }],
           animationEasing: 'elasticOut',
           animationDelayUpdate: function (idx) {
             return idx * 5;
           },
         };
         a.setOption(option4);
       }
     },
     ParkChart()
     {
       let myChart = this.$echarts.init(document.getElementById('parkChart'));
       let option = {
         tooltip: {
           trigger: 'item',
           formatter: '{b} : {c}个'
         },
         legend: {
           orient: 'vertical',
           top:'22%',
           itemGap: 20,
           right:'10%',
           data:['单位大院','公建配建','居住小区','其他权属'],
           textStyle:{
             color:'#FFF',
             fontSize: 12
           }
         },
         series: [
           {
             name:'停车场类型分布',
             type:'pie',
             center:['40%','50%'],
             radius: ['35%', '55%'],
             avoidLabelOverlap: false,
             label: {
               normal: {
                 show: false,
                 position: 'center'
               },
               emphasis: {
                 show: true,
                 textStyle: {
                   fontSize: '30',
                   fontWeight: 'bold',

                 }
               }
             },
             labelLine: {
               normal: {
                 show: false
               }
             },
             data:[
               {value:7, name:'单位大院'},
               {value:3, name:'公建配建'},
               {value:4, name:'居住小区'},
               {value:2, name:'其他权属'},
             ]
           }
         ],
         color:['#0278E7','#00C6FF', '#af06fe', '#FF6633']
       };
       myChart.setOption(option);
     },
     SubwayChart(){
       let myChart = this.$echarts.init(document.getElementById('subwayChart'));
       let option = {
         tooltip: {
           trigger: 'axis',
           formatter:function(params)
           {
             var relVal = params[0].name;
             for (var i = 0, l = params.length; i < l; i++) {
               relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+"万人";//显示单位
             }
             return relVal;
           }
         },
         legend: {

           top:"11%",
           left:"35%",
           // bottom:"bottom",
           textStyle: {
               color:'#FFF',
               fontSize: 12
           }
         },


         grid: {
           top:'20%',
           left: '8%',
           right: '8%',
           height:'70%',
           width:'80%',
           containLabel: true
         },
         xAxis: {
           type: 'category',
           boundaryGap: false,
           data: ['2016-01-20','2016-01-21','2016-01-22','2016-01-23','2016-01-24'],
           axisLine: {
             lineStyle: {
               color: "#403a3a"
             }
           },
           axisLabel:{
             textStyle: {
               color: '#fff'
             }
           }
         },
         yAxis: {
           type: 'value',
           min: 40,
           max: 160,
           name: '客流（万人）',
           nameTextStyle:{//y轴上方单位的颜色
             color:'#fff'
           },
           axisLine: {
             lineStyle: {
               color: "#403a3a"
             }
           },
           axisLabel:{
             textStyle: {
               color: '#fff'
             }
           },
           splitLine: {
             show: false
           }
         },
         series: [
           {
             name:'出站进站总人数',
             type:'line',
             smooth: true,
             data:[124.5693, 125.3191, 125.4346, 74.9447, 75.7161],
             color:'#FF6633',
           },
           {
             name:'车站出站总人数',
             type:'line',
             smooth: true,
             data:[127.5356, 126.8165, 128.5662,75.8895,76.8680],
             color:'#00C6FF'
           }
         ]
       };
       myChart.setOption(option);
     },
     BusChart(){
       let myChart = this.$echarts.init(document.getElementById('busChart'));
       let option = {
         tooltip: {
           trigger: 'item',
           formatter: '{a} <br/>{b} : {c} ({d}%)'
         },
         legend: {
           left: 'center',
           bottom: '20px',
           textStyle:{
               color:'#FFF',
               fontSize: 12
           },
           Width:2,
           Height:2,
         },
         graphic: [ //为环形图中间添加文字
         {
           type:"text",
           left:"27%",
           top:"44%",
           style:{
           text:"登量",
             textAlign:"center",
             fill:"#fff",
             fontSize:14,
         }
       },
           {
             type: "text",
             left: "67%",
             top: "44%",
             style: {
               text: "降量",
               textAlign: "center",
               fill: "#fff",
               fontSize: 14,
             },
           },
         ],
         series: [
           {
             name: '登量',
             type: 'pie',
             radius: ['25%', '55%'],
             center: ['30%', '45%'],
             roseType: 'radius',
             itemStyle: {
               borderRadius: 5
             },
             label: {
               show: false
             },
             emphasis: {
               label: {
                 show: true
               }
             },
             data: [
               {value: 288631, name: '海淀'},
               {value: 287222, name: '朝阳'},
               {value: 217150, name: '西城'},
               {value: 169690, name: '东城'},
               {value: 205162, name: '丰台'},
               {value: 63162, name: '石景山'},
             ],
             color:['#FF6633','#00C6FF','#af06fe','#0278E7','#ffbf00','#00f8cc']
           },
           {
             name: '降量',
             type: 'pie',
             radius: ['25%', '55%'],
             center: ['70%', '45%'],
             roseType: 'radius',
             itemStyle: {
               borderRadius: 5
             },
             label: {
               show: false
             },
             emphasis: {
               label: {
                 show: true
               }
             },
             data: [
               {value: 289472, name: '海淀'},
               {value: 296288, name: '朝阳'},
               {value: 210907, name: '西城'},
               {value: 167827, name: '东城'},
               {value: 201802, name: '丰台'},
               {value: 66989, name: '石景山'},
             ]
           },
         ]
       };
       myChart.setOption(option);
     },
     busTaxiChart()
     {
       let myChart = this.$echarts.init(document.getElementById('busAndTaxiChart'));
       let option = {
         tooltip: {
           trigger: 'axis',
           formatter:function(params)
           {
             let relVal = params[0].name+'点出行平均耗时';
             for (let i = 0, l = params.length; i < l; i++) {
               relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value+'分钟';//显示单位
             }
             return relVal;
           }
         },
         legend:{
           data:['公交车','出租车'],
           top:'10%',
           right:'8%',
           textStyle:{
             color:'#FFF',
             fontSize: 12
           }
         },
         grid: {
           top:'20%',
           left: '8%',
           right: '8%',
           height:'70%',
           width:'80%',
           containLabel: true
         },
         xAxis: {
           type: 'category',
           data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00'
             , '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
             '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
           axisLine: {
             lineStyle: {
               color: "#403a3a"
             }
           },
           axisLabel:{
             textStyle: {
               color: '#fff'
             }
           }
         },
         yAxis: {
           type: 'value',
           show:true,
           nameTextStyle:{//y轴上方单位的颜色
             color:'#fff'
           },
           axisLine: {
             lineStyle: {
               color: "#403a3a"
             }
           },
           axisLabel:{
             textStyle: {
               color: '#fff'
             }
           },
           splitLine: {
             show: false
           }},
         series: [{
           data: [32, 30, 31, 32, 33, 26, 23,21,21,22,22,20,
             20,21,22,22,22,22,21,18,17,15,13,11],
           name:'公交车',
           color:'#FF6633',
           type: 'line',
           smooth: true

         },
           {
             data: [12, 12, 12, 13, 16,19,19,20,19,18,18,16,
               15,17,19,19,20,21,18,15,14,14,13,7],
             name:'出租车',
             color:'#00f8cc',
             type: 'line',
             smooth: true
           },
         ]
       };
       myChart.setOption(option);
     }
   },
  beforeMount() {
  },
  mounted() {
     this.SubwayChart();
     this.TaxiChart();
     this.BikeChart();
     this.ParkChart();
     this.BusChart();
     this.Cesium();
     this.busTaxiChart();
  }
}
</script>
<style>
/*  .el-input .el-input__inner {
    height: 28px;
    line-height: 28px;
    background-color: #19344bb3;
    color:#bcd4e8;
    border-color:#3d97f6;
  }
  .el-select .el-input__inner {
    cursor: pointer;
    padding-right: 35px;
    background-color: #19344bb3;
    color:#bcd4e8;
    border-color:#3d97f6;
  }*/
  .el-input--suffix .el-input__inner {
    padding-right: 30px;
    background-color: #19344bb3;
    color:#bcd4e8;
    border-color:#3d97f6;
  }
</style>
<style scoped>
.homepage{
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#selectNamenbox
{
  position: absolute;
  float: left;
  top:10px;
  left:600px;
}
#LayerContro
{
  float: right;
  display: block;
  position: absolute;
  top: 0.5em;
  right: 30%;
  z-index: 5;
  color: #FFF;
  border-radius: 0.25em;
  width: 50px;
  background-color: rgba(0,0,0,0.3
  );
}
.LayerControltitle
{
  margin: 0;
  font-size: 22px;
  float: left;
  height: 20%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
}
.LayerControlcontent
{
  margin: 0;
  font-size: 18px;
  float: left;
  width: 100%;
  text-align: left;
}
#MainRoadControl
{
  background: url("../../assets/image/TaxiAnalysis/xiache.png");
}
.imagelabel{
  width: 50px;
  height: 50px;
}
.selectbox
{
  background-color: black;
  color: white;
}
#selectbox1
{
  background-color:#19344bb3;
}
#leftBox{
  position: absolute;
  top:0px;
  float: left;
  left:0px;
  height: 100%;
  width:28%;
  background-color: rgba(0,0,0,0.7);
  /*background-image: linear-gradient(to right,#0D0715,#000033,#00093A,#0D0715,#000033,#000838,#000000)*/
}
#subwayChart
{
  width: 100%;
  height: 98%;
}
#bikeChart
{
  width: 100%;
  height: 98%;
}
#busChart
{
  width: 100%;
  height: 98%;
}
#rightBox{
  position: absolute;
  top:0px;
  float: right;
  right:0px;
  height: 100%;
  width:28%;
  background-color: rgba(0,0,0,0.7);
  /*background-image: linear-gradient(to right,#0D0715,#000033,#00093A,#0D0715,#000033,#000838,#000000)*/
}
#parkChart
{
  width: 98%;
  height: 100%;
}
#taxiChart
{
  width: 98%;
  height: 100%;
}
#busAndTaxiChart
{
  width: 98%;
  height: 100%;
}
.grid-table{
  width:100% ;
  height: 33%;
  background-image: url("../../assets/image/HomePage/Border2.png");
  background-size: 100% 100%;
}
.homepage_font{
  position: absolute;
  margin: 0;
  height: 4%;
  font-weight: bold;
  font-size: 18px;
  font-family: '微软雅黑';
  color: orange;
  /*background: linear-gradient(to left,#1a95be, #0be9f4);*/
  /*-webkit-background-clip: text;*/
  /*color: transparent;*/
}
</style>
