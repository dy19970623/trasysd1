<template>
    <div class="homepage">
      <div id="cesiumContainer"></div>
      <div id="leftBox">
        <div   class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;left: 40%;">地铁客流总量</p>
          <div id="subwayChart"></div>
        </div>
        <div   class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;left: 37%;">城区公交OD对比</p>
          <div id="busChart"></div>
        </div>
        <div  class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;left: 38%;">自行车租还情况</p>
          <div id="bikeChart" ></div>
        </div>
      </div>
      <div id="rightBox">
        <div class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;right: 36%;">停车场类型分布</p>
          <div id="parkChart"></div>
        </div>
        <div class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;right: 36%;">出租车运行情况</p>
          <div id="taxiChart"></div>
        </div>
        <div  class="grid-table">
          <p style="color: white;margin: 0;height: 2%;position:absolute;right: 34%;">出行方式耗时对比</p>
          <div id="busAndTaxiChart"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import { graphic } from 'echarts/lib/export'
export default {
   name: "HomePage",
   methods:{
     Cesium() {
       /**
        * 本系统用到的相关代码
        */
/*
       let TraSys_Tomcat_Ip="http://10.100.54.135:8080";
       let TraSyS_GeoServer_Ip="http://10.100.54.135:8888";
//主干道
       let TrasSys_MainRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:mainroad84&maxFeatures=5000&outputFormat=application%2Fjson";
//快速干道
       let TrasSys_FreeWay_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:freeway&maxFeatures=5000&outputFormat=application%2Fjson";
//绿地
       let TrasSys_GreenLand_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:greenland&maxFeatures=5000&outputFormat=application%2Fjson";
//边界
       let TrasSys_Boundary_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:boundary&maxFeatures=5000&outputFormat=application%2Fjson";
//街道划分
       let TrasSys_StreetOffice_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:streetoffice&maxFeatures=5000&outputFormat=application%2Fjson";
//次干道
       let TrasSys_SecondRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:secondaryroad&maxFeatures=5000&outputFormat=application%2Fjson";
//水系
       let TrasSys_WaterMap_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:hyd&maxFeatures=5000&outputFormat=application%2Fjson";
//支路及街坊路
       let TrasSys_AccessRoad_GeoJson=TraSyS_GeoServer_Ip+"/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:accessroad&maxFeatures=5000&outputFormat=application%2Fjson";
*/

       let Cesium = this.cesium
       Cesium.Camera.DEFAULT_VIEW_FACTOR=-0.25//摄像机视口远近参数，可设置地球大小
       Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90, 0, 110, 90);//西南东北，默认显示中国
       Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjYzZDU2YS04OTYwLTQ5MzUtYjVjNC04NGJjOWFiZTc1ZTkiLCJpZCI6MzUzOTUsImlhdCI6MTYxNDIzMjU4OX0.MIdsd58Fto7ZMGcYdN7Diq643oSflOlj94qpvEFNmtA'

       let viewer = new Cesium.Viewer('cesiumContainer',{
         baseLayerPicker:false,
         fullscreenButton:false,						//全屏按钮
         vrButton:false,
         geocoder:false,								//地理编码搜索框
         homeButton:true,							//HOME按钮
         infoBox:true,								//信息窗口
         sceneModePicker:true,
         selectionIndicator:false,					//选择要素窗口关闭
         navigationHelpButton:true,
         timeline:false,                             //时间轴
         animation:false,
         shouldAnimate: true,
         imageryProvider : new Cesium.MapboxStyleImageryProvider({
           url:'https://api.mapbox.com/styles/v1',
           username:'litaizeng',
           styleId: 'cklt2ts8a21u318psl7vdmurq',
           // accessToken: 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNraDR1emlzdTAxemwzMm9idjVvYnp5bGkifQ.gZpF28lTXbMX7MbiFILcZw',
           accessToken: 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ',

           scaleFactor:true,



         }),
       });

      viewer._cesiumWidget._creditContainer.style.display = "none";// 隐藏版权
       setTimeout(function(){
         viewer.camera.flyTo({
           destination : Cesium.Cartesian3.fromDegrees(116.3654, 39.9043,10000),
         });
       },500);
  /*     let tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
         url : 'http://10.100.59.120:8081/BJC/tileset.json'
       }));
       tileset.readyPromise.then(function(tileset) {
         // tile.properties is not defined until readyPromise resolves.
         let properties = tileset.properties;
         if (Cesium.defined(properties)) {
           for (let name in properties) {
             console.log(properties[name]);
           }
         }
       });
       //设定了模拟时间的边界
       let start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
       let stop = Cesium.JulianDate.addSeconds(start, 30, new Cesium.JulianDate());
       //确保查看器处于预期的时间
       viewer.clock.startTime = start.clone();
       viewer.clock.stopTime = stop.clone();
       viewer.clock.currentTime = start.clone();
       viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //循环结束时
       // 时间变化来控制速度
       viewer.clock.multiplier = 5;
       //给时间线设置边界
       viewer.timeline.zoomTo(start, stop);
       function computeFlight(positionArray) {
         let property = new Cesium.SampledPositionProperty();
         for (let i = 0; i <positionArray.length; i ++) {
           let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
           let position =new Cesium.Cartesian3.fromDegrees(positionArray[i][0],positionArray[i][1]);
           property.addSample(time, position);
         }
         return property;
       }
       let mainRoadEntity=[];
       Cesium.loadJson(TrasSys_MainRoad_GeoJson).then(function(jsonData) {
         // Do something with the JSON object
         let Station_features = jsonData.features;


         for(let i=0;i<Station_features.length;i++){
           let alphaValue=Math.random();
           if(alphaValue<=0.2){
             alphaValue=0.2;
           }
           let dengjiValue="暂无";
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
           let widthvalue=alphaValue*25;
           let ppposition=computeFlight(Station_features[i].geometry.coordinates["0"]);
           mainRoadEntity[i] = viewer.entities.add({
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
               uri : 'htc.gltf',
               minimumPixelSize : 20,
               distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0)
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
             description:'<table class="cesium-infoBox-defaultTable"><tbody>' +
               '<tr><th>拥堵等级</th><td>' +dengjiValue+ '</td></tr>' +
               '<tr><th>道路名称</th><td>' +Station_features[i].properties.标准名称+ '</td></tr>' +
               '<tr><th>道路类型</th><td>' +"主干道"+ '</td></tr>' +
               '<tr><th>车道数</th><td>' +"暂无"+ '</td></tr>' +
               '<tr><th>车道宽</th><td>' +"暂无"+ '</td></tr>' +
               '<tr><th>里程</th><td>' +"暂无"+ '</td></tr>' +
               '<tr><th>分类代码</th><td>' +Station_features[i].properties.分类代码+ '</td></tr>' +
               '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
               '</tbody></table>'
           });

         }
       }).otherwise(function(error) {
         // an error occurred
       });
       let FreeWayDataSource;
       let FreeWayPromise=Cesium.GeoJsonDataSource.load(TrasSys_FreeWay_GeoJson);
       FreeWayPromise.then(function(dataSource) {
         FreeWayDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         for (let i = 0; i < entities.length; i++) {
           let entity = entities[i];
           let polyline = {
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
       let SecondRoadDataSource;
       let SecondRoadPromise=Cesium.GeoJsonDataSource.load(TrasSys_SecondRoad_GeoJson);
       SecondRoadPromise.then(function(dataSource) {
         SecondRoadDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         for (let i = 0; i < entities.length; i++) {
           let entity = entities[i];
           let polyline = {
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
       let AccessRoadDataSource;
       let AccessRoadPromise=Cesium.GeoJsonDataSource.load(TrasSys_AccessRoad_GeoJson);
       AccessRoadPromise.then(function(dataSource) {
         AccessRoadDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         for (let i = 0; i < entities.length; i++) {
           let entity = entities[i];
           let polyline = {
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
       let GreenLandDataSource;
       let GreenLandPromise=Cesium.GeoJsonDataSource.load(TrasSys_GreenLand_GeoJson);
       GreenLandPromise.then(function(dataSource) {
         GreenLandDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         for (let i = 0; i < entities.length; i++) {
           let entity = entities[i];
//    	entity.polygon.material ='./lvcao.jpg';
           entity.polygon.material=Cesium.Color.fromBytes(20,50,20);
//        entity.polygon.material=Cesium.Color.fromBytes(58,42,7);
           entity.polygon.outline = false;
           entity.polygon.extrudedHeight=0.4;
         }
       });

//加载西城区水系
       let WaterMapDataSource;
       let WaterMapPromise=Cesium.GeoJsonDataSource.load(TrasSys_WaterMap_GeoJson);
       WaterMapPromise.then(function(dataSource) {
         WaterMapDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         for (let i = 0; i < entities.length; i++) {
           let entity = entities[i];
//    	entity.polygon.material ='./hushui.jpg';
           entity.polygon.material =Cesium.Color.fromBytes(6,2,49);
           entity.polygon.outline = false;
           entity.polygon.extrudedHeight=0.5;
         }

       });
//西城区街道办边界
       let StreetOfficeDataSource;
       let StreetOfficePromise=Cesium.GeoJsonDataSource.load(TrasSys_StreetOffice_GeoJson);
       StreetOfficePromise.then(function(dataSource) {
         StreetOfficeDataSource=dataSource;
         viewer.dataSources.add(dataSource);
         let entities = dataSource._entityCollection._entities._array; // 获取所有对象
         let colorHash = {};
         for (let i = 0; i < entities.length; i++) {
           // 逐一遍历循环
           let entity = entities[i];
           let name = entity.properties.JDNAME;
           let color = colorHash[name];
           if (!color) {
             color = Cesium.Color.fromRandom({
               alpha : 0.7
             });
             colorHash[name] = color;
           }
           entity.name="StreetOffice";
           entity.polygon.material = Cesium.Color.GAINSBORO.withAlpha(0.5);
           entity.polygon.extrudedHeight=0.3;
           entity.description='<table class="cesium-infoBox-defaultTable"><tbody>' +
             '<tr><th>街道编号</th><td>' +entity._properties._JDCODE+ '</td></tr>' +
             '<tr><th>街道名称</th><td>' +entity._properties._JDNAME+ '</td></tr>' +
             '<tr><th>街道面积</th><td>' +entity._properties._Shape_Area+ '</td></tr>' +
             '<tr><th>所属区域</th><td>' +"北京市西城区"+ '</td></tr>' +
             '</tbody></table>';
         }
         StreetOfficeDataSource.show=false;
       });
       let unquireData=[];
       unquireData.push(datatest[0]);
       for(let i=1;i<datatest.length;i++) {
         let flag=false;
         for(let j=0;j<unquireData.length;j++) {
           if(datatest[i].stationname.toString()==unquireData[j].stationname.toString()){
             unquireData[j].countnum=(parseInt(unquireData[j].countnum)+parseInt(datatest[i].countnum)).toString();
             flag=true;
           }
         };
         if(!flag){
           unquireData.push(datatest[i]);
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

         let surfacePosition = Cesium.Cartesian3.fromDegrees(unquireData[i].longitude, unquireData[i].latitude, 0);
         let heightPosition = Cesium.Cartesian3.fromDegrees(unquireData[i].longitude, unquireData[i].latitude, unquireData[i].countnum/10);
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
       }*/
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
                 lineStyle: {
                   // 使用深浅的间隔色
                   color: "#403a3a"
                 }
               } ,
               nameTextStyle:{
                 color:"white"
               },
               axisLine: {
                 lineStyle: {
                   color: "white"
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
                         color: '#990000'
                       }, {
                         offset: 1,
                         color: '#FF9999'
                       }]),
                       new graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: '#00CCFF'
                       }, {
                         offset: 1,
                         color: '#845EC2'
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
             textStyle: {
               fontSize: 13,
               fontWeight: 500,
               color: 'white'
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
               lineStyle: {
                 // 使用深浅的间隔色
                 color: "#403a3a"
               }
             }
           },
           series: [{
             name: '租',
             type: 'bar',
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
             data: data2,
             animationDelay: function (idx) {
               return idx * 10 + 100;
             },
             itemStyle: {
               normal: {
                 color: new graphic.LinearGradient(0, 0, 0, 1, [{
                   offset: 0,
                   color: '#92C5B0'
                 }, {
                   offset: 1,
                   color: '#689EA9'
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
           orient: 'horizontal',
           bottom:'10%',
           data:['单位大院','公建配建','居住小区','其他权属'],
           textStyle: {
             color: 'white',
           }
         },
         series: [
           {
             name:'停车场类型分布',
             type:'pie',
             center:['50%','45%'],
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
         color:['#FF6633','#00C6FF', '#8A00E1', '#CC9900']
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
             color: 'white'
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
             lineStyle: {
               // 使用深浅的间隔色
               color: "#403a3a"
             }
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
             color:'#FFF'
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
             radius: ['20%', '60%'],
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
             color:['#FF6633','#00C6FF','#8A00E1','#0278E7','#CC9900','#92C5B0']
           },
           {
             name: '降量',
             type: 'pie',
             radius: ['20%', '60%'],
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
           top:'20px',
           right:'8%',
           textStyle:{
             color:'#FFF'
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
             lineStyle: {
               // 使用深浅的间隔色
               color: "#403a3a"
             }
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
             color:'#00C6FF',
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
#leftBox{
  position: absolute;
  top:0px;
  float: left;
  left:0px;
  height: 100%;
  width:28%;
  background-color: rgba(0,0,0,0.9);
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
  background-color: rgba(0,0,0,0.9);
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
</style>
