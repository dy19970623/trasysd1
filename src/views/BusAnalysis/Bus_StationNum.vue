/*
 * 邹瑞萌 2021-2-28
 * 公交车位置分布
 * */
<template>
  <div class="BusStationNum">
    <div id="BSNumLeftBox">
      <!--公交客流Top20-->
      <div class="BSNumLeftBox_Top">
        <legend class="BSNum_TopTitle">公交客流TOP20</legend>
        <div ref="BSN_Chart1" class="BSN_Chart1"></div>
      </div>
      <!--公交客流查询定位-->
      <div class="BSNumLeftBox_Bottom">
        <div id="searchBox" class="layui-inline">
          <!--输入-->
          <input id="stationName" class="input_inline" v-model="searchVal" type="text" name="word" autocomplete="off" maxlength="256" placeholder="请输入站位名称" style="" value="" >
          <button id="searchBtn" class="layui-btn" ref="searchBtn" @click="search">查询</button>
          <button id="recover" ref="recover" class="layui-btn" @click="recover">还原</button>
          <!--下拉菜单-->
          <div id="queryresult"><ul id="list" style="display:none;background-color:white;height:200px;overflow-y:auto;"></ul></div>
        </div>
        <!--表格  -->
        <div class="info_Table">
            <table class="layui-table">
              <thead><tr><th>公交站名</th><th>登量</th></tr></thead>
              <tbody><tr><td id="info_station">{{info_station}}</td><td id="info_num">{{info_num}}</td></tr></tbody>
            </table>
        </div>
        <div id="BSN_Chart2" ref="BSN_Chart2"></div>
        <div id="charts"> <div ref="nums" id="nums"></div> </div>
      </div>
    </div>
    <div ref="map" class="map"></div>

  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import BSNum from '../../assets/js/BusStationNum/Bus_StationNum'
import checi from '../../assets/js/BusStationNum/checi'
//import BSNumLeftBox from '../components/content/BusStationNum/BusStationNum_LeftBox'

export default {
  data() {
    return {
      searchVal: '',
      info_station: '无',
      info_num: '无',
      //echarts-gl 3d柱状图
      BusStationNum_option1:{
	      tooltip: {
	            // trigger: 'item',
	            transitionDuration: 0,
	            formatter: function(station) {
	              return station.name + ' : ' + station.value[2] +'人次';
	            }
	      },
	      visualMap: {
          //作为组件抽离
	        show: true, //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
	        type: 'piecewise',//定义为分段型
          calculable: true,//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
	        realtime: false,//拖拽时，是否实时更新
          inverse:true,  //是否反转 visualMap 组件
	        inRange: {
	           color: ['#E3CFA7', '#D97362', '#CCA56C ', '#E07072', '#C20B45']
	        },
	        max:8795,
          itemHeight:25,
          right:"2%",
          bottom:"10%",
          padding:5,
          borderColor: 'rgb(44, 188, 255)',
				  borderWidth: 1.5,
				  backgroundColor: '#19344B',
          textStyle: {
            color: '#FFF'     //图例文字颜色，大小等配置
          }
	      },
	      mapbox: {
	        center: [116.335, 39.92],
	        zoom:9.5,
	        pitch: 60,
	        bearing: -10,
          renderOnMoving:false,
	        style: 'mapbox://styles/litaizeng/cklt2ts8a21u318psl7vdmurq',
	        boxHeight: 35,
	        postEffect: {
	            enable: true,
	            SSAO: {
	                enable: true,
	                radius: 2,
	                intensity: 1.5
	            }
	        },
	        light: {
	            main: {
	                intensity: 1,
	                shadow: false,
	                shadowQuality: 'high'
	            },
	            ambient: {
	                intensity: 0.
	            },
	            ambientCubemap: {
	            	texture:'hdr01.hdr',
	                exposure: 1,
	                diffuseIntensity: 0.5
	            }
	        }
	      },
	      series: [{
	        center: ["85%", "85%"],
	        type: 'bar3D',
	        shading: 'realistic',
	        coordinateSystem: 'mapbox',
	        barSize: 0.1,
	        label: {
	            normal: {
	                show: false
	            },
	            emphasis: {
	                show: false
	            }
	        },
	        silent: false,
	        data: BSNum.station
	      }]
	    },
      //展示不同时间段该站位乘客乘坐各公交线路的数量
      option: {
		title: {
	          text: '登录情况',
	          left: 'left',
            padding:  [8, 0, 0, 2],
	          textStyle: {
	                fontSize: 15,
	                color: 'white',
	                fontWeight:"bolder"
	              },
	      },
	    color: ['#b0e0e6'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        show:'true',
	        left: '0%',
	        right: '2%',
	        bottom: '2%',
          borderWidth:'0.5',
          borderColor:'rgba(105,105,105, 0.5)',
	        containLabel: true
	    },
	    xAxis : [
	 	    {
	 	      type : 'category',
	 	      name: '车次',
	 	      data :[113,28,348,402,421,57,806,807,808,809,814,846,91,976,98,766],
		      axisLabel:{
						interval:0,
						rotate:45,
            margin:20,
            textStyle: {
            color: "white",  //更改坐标轴文字颜色
            fontSize : 11,      //更改坐标轴文字大小
          },
		            	},
	 	            axisTick: {
          show:false,
	        alignWithLabel: true
	      },
        axisLine:{
          lineStyle:{
	          color: "rgba(105,105,105, 0.5)",

        }}
	 	        }
	 	    ],
	 	    yAxis : [
	 	        {
	 	            type : 'value',
	 	            name: '人次',
	 		        nameTextStyle:{
	 	            	color:"white"
	 	            	},
	 	            axisTick: {
          show:false,
	        alignWithLabel: true
	      },
        splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
	      axisLine: {
          show:false,
	        lineStyle: {
	          color: "white"
          }
	      },
	 	        }
	 	    ],
	    series : [
	        {
	          name:'今日登量',
	      type:'bar',
	      barWidth: '50%',
        itemStyle: {
          //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#19344B'
            },{
              offset: 0.9,
              color: '#4AB3DF  '
            }]),
          }
        },
	      data:[527,1244,900,1766,1,850,446,5986,1913,982,11544,269,575,66,766,1]
	        }
	    ]
	    },
      //左上表格
      echartbarTop20_option: {
		    title: {
	          //text: '公交客流TOP20',
	          left: 'left',
	          textStyle: {
	                fontSize: 20,
	                color: 'white',
	                fontWeight:"normal",
	              },
	      },
	      color: ['#b0e0e6'],
	      //backgroundColor:['rgba(1,19,66,0.5)'],
	      tooltip : {
	        trigger: 'axis',
	        formatter: '{a0}:{c0}人',
	        axisPointer : {
	            type : 'shadow'
	        }
	      },
	      grid: {
          top: '10%',
	        left: '0%',
	        right: '0%',
	        bottom: '-5%',
	        containLabel: true
	      },
	      xAxis: [{
	        type : 'category',
	        data : BSNum.titledata3,
	        axisLabel: {
            interval: 0,
            textStyle: {
              color: "white",  //更改坐标轴文字颜色
              fontSize : 13,      //更改坐标轴文字大小
            },
            formatter:function(value){
              return value.split("").join("\n");
            }
          },
	        axisTick: {
            show:false,
	          alignWithLabel: true,
          },
          axisLine:{
          	lineStyle:{
              color: "rgba(105,105,105, 0.5)",
              width: 1
          	}
          }
        }
	    ],
	    yAxis : [{
        //max:45000,
	      type : 'value',
	      name: '人次',
		    nameTextStyle:{
	        color:"white",
          fontSize:14,
	      },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "white",  //更改坐标轴文字颜色
            fontSize : 12,      //更改坐标轴文字大小
          },
        },
	      axisLine: {
	        lineStyle: {
	          color: "rgba(105,105,105, 0.5)",
            width: 1
          }
	      },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(105,105,105, 0.5)",
            width: 1
          }
        },
        axisTick: {
          show:false,
	        alignWithLabel: true,
	      },
	    }],
	    series : [
	        {
	            name:'今日登量',
	            type:'bar',
	            //barWidth: '50%',
              itemStyle: {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            normal: {
              //柱形图圆角，初始化效果
              barBorderRadius:[4, 4, 0, 0],
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#990000'
              },{
                offset: 0.6,
                color: '#ff7a7a'
              },{
                offset: 0.9,
                color: '#FF9999  '
              }]),
            }
          },
	            data:BSNum.bartop20
	        }
	    ]
		  },
      //左下表格
      optionBottom: {
		  title: {
	          text: '登录情况',
	          left: 'left',
            padding:  [5, 0, 0, 11],
	          textStyle: {
	                fontSize: 15,
	                color: 'white',
	                fontWeight:"bolder"
	              },
	      },
	    color: ['#b0e0e6'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
          show:'true',
	        left: '0%',
	        right: '1%',
	        bottom: '2%',
          borderWidth:'0.5',
          borderColor:'rgba(105,105,105, 0.5)',
	        containLabel: true
	    },
	    xAxis: [{
	      type: 'category',
	      data: [0,0,0,0,0],
	      axisLabel:{
					interval:0,
					margin:20,
          textStyle: {
            color: "white",  //更改坐标轴文字颜色
            fontSize : 11,      //更改坐标轴文字大小
          },
        	formatter: function (value) {
        	  //x轴的文字改为竖版显示
        	  var str = value.split("");
        	  return str.join("\n");
        	}
	      },
	      axisTick: {
          show:false,
	        alignWithLabel: true
	      },
        axisLine:{
          lineStyle:{
            color:"rgba(105,105,105, 0.5)",
        }}
	    }],
	    yAxis: [{
	      type : 'value',
	      name: '人次',
		    nameTextStyle:{
	        color:"white"
	      },
        axisTick: {
          show:false,
	        alignWithLabel: true
	      },
        splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(105,105,105, 0.5)",
              width: 1
            }
          },
	      axisLine: {
          show:false,
	        lineStyle: {
	          color: "white"
          }
	      },
	    }],
	    series : [{
	      name:'今日登量',
	      type:'bar',
	      barWidth: '50%',
        itemStyle: {
          //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#19344B'
            },{
              offset: 0.9,
              color: '#4AB3DF  '
            }]),
          }
        },
	      data:[0,0,0,0,0]
	    }]
	  }
    }
  },
  components: {

  },
  mounted() {
    this.getmap()
  },
  methods: {
    getmap() {
      let _this=this;
      //echarts-gl 3d柱状图
      mapboxgl.accessToken = 'pk.eyJ1IjoibGl0YWl6ZW5nIiwiYSI6ImNrbHhycTZyNzEza2IydnBsbmo3dHh0Z3UifQ.q8qjMrqztI3hgqcyxolfMQ'
      let BusStationNum = echarts.init(this.$refs.map)

      // 指定图表的配置项和数据
      BusStationNum.setOption(this.BusStationNum_option1)
      var map=BusStationNum.getModel().getComponent('mapbox3D').getMapbox();
      //实例化导航控件
      var nav = new mapboxgl.NavigationControl({
        //是否显示指南针，默认为true
        "showCompass": true,
        //是否显示缩放按钮，默认为true
        "showZoom":true,
      });
      //添加导航控件，控件的位置包括'top-left', 'top-right','bottom-left' ,'bottom-right'四种，默认为'top-right'
      map.addControl(nav, 'top-right');
      map.on('zoomend', function() {});
      //左上表格
      let echartbarTop20 = echarts.init(this.$refs.BSN_Chart1);
      echartbarTop20.setOption(this.echartbarTop20_option)

      //展示不同时间段该站位乘客乘坐各公交线路的数量
      let tips=echarts.init(_this.$refs.BSN_Chart2);
      tips.setOption(this.option);
      //点击图标定位
      echartbarTop20.on('click', function (params) {
        //document.getElementById('charts').style.visibility="visible";
	      var top20name=params.name;
	      //var top20value=params.value;
	      //var data=params.data;
	      var keyWord2=top20name;
	      //站位名字与关键字匹配
	      for(var j=0;j<BSNum.finalnums.length;j++){
	        if(BSNum.finalnums[j].siteName==keyWord2){
	            var chooseStation = [];
	            chooseStation.push({
			        name: BSNum.finalnums[j].siteName,//站点名字
			        value: [BSNum.finalnums[j].lng,BSNum.finalnums[j].lat,BSNum.finalnums[j].dengLiang],//站点经纬度
			        itemStyle:{
				          color:'#5bc49f',
				      }
			      })
	            chooseStation.push({
			         name: "辅助",
			         value: [116.40, 39.92,100],
			         number:100
			    })
	            _this.BusStationNum_option1.visualMap.inRange={};
	            _this.BusStationNum_option1.series[0].data = chooseStation;
	            _this.BusStationNum_option1.mapbox.center=[BSNum.finalnums[j].lng,BSNum.finalnums[j].lat];//对于到相应的位置
	            _this.BusStationNum_option1.mapbox.zoom=15;
	            BusStationNum.setOption(_this.BusStationNum_option1);
	            break;
	        }
	      }
	      for(var i=0;i<checi.checi.length;i++){
	   	    if(checi.checi[i].sitename==keyWord2){
	   	 	    var checiStr=checi.checi[i].checi;
            var checiArrr=checiStr.split(",");
            var dengLiangStr=checi.checi[i].dengLiang;
            var dengLiangArrr=dengLiangStr.split(",");
          	_this.option.title.text=checi.checi[i].sitename+'各路公交车人数登量情况';
            _this.option.xAxis[0].data=checiArrr;
            _this.option.series[0].data=dengLiangArrr;
	          tips.setOption(_this.option);
	   	    }
	      }
      })

      //左下表格
      //let echartbarBottom = echarts.init(document.getElementById('BSN_Chart2'))
      //echartbarBottom.setOption(this.optionBottom);

      //查询框
      var inputName = document.getElementById('stationName');
      var Nlist=document.getElementById('list');
      var stationN=[];
      for(var i=0;i<BSNum.finalnums.length;i++){
        stationN[i]=BSNum.finalnums[i].siteName;
      }

      inputName.addEventListener('keyup',function (e) {
        //方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
        checkCharacter();
        var keyWord = this.searchVal
        var stationlist = searchByRegExp(keyWord,stationN);
        renderStation(stationlist);
        showClickDiv();
        //回车抬起时关闭下拉菜单
        if(e.key == 'Enter'){
          Nlist.style.display = "none";
        }
      },false);
      //回车查询
      inputName.addEventListener('keydown',function (e) {
        let myEvent = new Event('click');
        if(e.key == 'Enter'){
          document.getElementById('searchBtn').dispatchEvent(myEvent)
        }
      },false)
      ///下拉菜单
      function showClickDiv(){
        let liList =Nlist.getElementsByTagName("li");
        //console.log(liList);
        for(let i=0;i<liList.length;i++){
          liList[i].onclick=function () {
            showClickTextFunction(this.innerHTML);
          }
        }
      }
      //检查查询框状态
      function checkCharacter() {
        var etest = inputName.value;
        if(etest ==''||etest =='null'||etest == undefined){
          Nlist.style.display="none";
          return false;
        }else{
          Nlist.style.display="block";
        }
      }
      function renderStation(list) {
        if(!(list instanceof Array)){
          return;
        }
        Nlist.innerHTML = '';
        var len=list.length;
        var item =null;
        for(i=0;i<len;i++){
          item = document.createElement('li');
          item.innerHTML = list[i];
          Nlist.appendChild(item);
        }
      }
      //正则匹配
      //keyword是输入的值,list是存储数据的数组
      function searchByRegExp(keyWord, list) {
        if (!(list instanceof Array)) {
          return;
        }
        let len = list.length;
        let arr = [];
        let reg = new RegExp(keyWord);
        for (let i = 0; i < len; i++) {
          //如果字符串中不包含目标字符会返回-1
          if (list[i].match(reg)) {
            arr.push(list[i]);
          }
        }
        return arr;
      }

      //选中后处理数据
      let showClickTextFunction = function (a) {
        _this.searchVal = a;
        Nlist.style.display = "none";
        console.log(inputName.value);
      }
    },
    ////点击查询
    search () {
      document.getElementById('list').style.display = "none";
      let BusStationNum = echarts.init(this.$refs.map)
      //清源路东口
	    var keyWord = this.searchVal
	    for(var j=0;j<BSNum.finalnums.length;j++){
	        if(BSNum.finalnums[j].siteName==keyWord){
	        	//表格中的数据
            this.info_station = BSNum.finalnums[j].siteName
	          this.info_num = BSNum.finalnums[j].dengLiang
	          var chooseStation = []
	          chooseStation.push({
			        name: BSNum.finalnums[j].siteName,
			        value: [BSNum.finalnums[j].lng,BSNum.finalnums[j].lat,BSNum.finalnums[j].dengLiang],
			        itemStyle:{
			          color:'#5bc49f',
			  	    }
			      })
	          chooseStation.push({
			        name: "辅助",
			        value: [116.40, 39.92,100],
			        number:100
			      })
            this.BusStationNum_option1.visualMap.inRange={};
	          this.BusStationNum_option1.series[0].data = chooseStation;
	          this.BusStationNum_option1.mapbox.center=[BSNum.finalnums[j].lng,BSNum.finalnums[j].lat];//跳转到相应位置
	          this.BusStationNum_option1.mapbox.zoom=15;
	          BusStationNum.setOption(this.BusStationNum_option1);
	          break;
	    }}
	    var infonum=[];
	    var lineinfo=[];
	    var dengLianginfo=[];
	    var linesreach=[];
	    var dengLiangsreach=[];

	    //将查询数据中的登量与站点分离出来
	    for(var j=0;j<BSNum.finalnums.length;j++){
	      if(BSNum.finalnums[j].siteName==keyWord){
	        var checinum=BSNum.finalnums[j].msg;
          infonum=checinum.split(",");
          j=BSNum.finalnums.length;
          for(var i=0;i<infonum.length;i++) {
    				if(i%2==0) {
      				linesreach.push(infonum[i])
 			    	}else{
    				  dengLiangsreach.push(infonum[i])
 			    }}
          var a=0;
          var linesreachNew=[];
          var dengLiangsreachNew=[];
          //将相同站点合并为站位
          for (var i = 0; i < linesreach.length-a; i++) {
		        if(linesreach[i]==linesreach[i+1]){
			        dengLiangsreach[i]=parseInt(dengLiangsreach[i])+parseInt(dengLiangsreach[i+1]);
			        linesreach[i+1]=linesreach[i+2];
              dengLiangsreach[i+1]=dengLiangsreach[i+2];
              dengLiangsreach[i+2]=0;
			        a++;
		        }
		        linesreachNew[i]=linesreach[i];
       	    dengLiangsreachNew[i]=dengLiangsreach[i]
	        }
			    //数据在图表中显示
          let echartbarBottom = echarts.init(document.getElementById('BSN_Chart2'))
	    	  this.optionBottom.title.text=keyWord+'各路公交车人数登量情况';
          this.optionBottom.xAxis[0].data=linesreachNew;
          this.optionBottom.series[0].data=	dengLiangsreachNew;
          echartbarBottom.setOption(this.optionBottom);
	      }
      }
    },
    //查询还原
    recover() {
      let BusStationNum = echarts.init(this.$refs.map)
	    this.BusStationNum_option1.series[0].data=BSNum.station;
	    this.BusStationNum_option1.mapbox.zoom=9.5;
	    this.BusStationNum_option1.mapbox.center=[116.40, 39.92];
      BusStationNum.setOption(this.BusStationNum_option1);
      //document.getElementById('BSN_Chart2').style.visibility="hidden";
    }
    /*
    getBar(data) {
      this.getmap()

      data
    }
    */
  }
}
</script>

<style>
/*@import '../assets/css/BusStationNum/3D_bar.css';*/
.BusStationNum{
  height: 25%;
  width: 100%;
}
body, html,.map {
   width:100%;
   height:100%;
   overflow: hidden;
   margin:0;
   font-family:"微软雅黑";
   position:absolute;
}
/*LeftBox */
#BSNumLeftBox{
    float:right;
    position: absolute;
    height: 100%;
    width: 28%;
    /* background-color:red; */
    background-color:rgba(8, 8, 13,0.7);
    z-index: 1;
}
/*Top20图表 */
.BSNumLeftBox_Top{
  width: 100%;
  height: 45%;
  margin-top: 2%;
  background:url(../../assets/image/BusStationNum/BarBorder.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.BSN_Chart1{
  width: 89%;
  height: 78%;
  margin-top: 2%;
  margin-left: 5%;
}
.BSNum_TopTitle {
  height: 8%;
  left: 10%;
  font-size:125%;
  font-weight:600;
  line-height: 200%;
  padding-top: 2%;
  color:rgb(44, 188, 255);
}

/*查询定位 */
.BSNumLeftBox_Bottom{
  width: 100%;
  height: 52%;
  margin-top: 2%;
  background:url(../../assets/image/BusStationNum/BarBorder.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}


/*搜索*/
#searchBox{
  float:right;
  position: absolute;
  width: 100%;
  height: 4%;
  margin-top: 6%;
}
/*输入框*/
input::-webkit-input-placeholder {
	color: white; /* placeholder颜色  */
	font-size: 12px; /* placeholder字体大小  */
	text-align: center; /* placeholder位置  */
}
/*输入框 */
.input_inline{
  width: 45%;
  height: 80%;
  margin-right: 2%;
  text-align:center;
  border: 1px solid white;
  border-radius: 9px;
  background-color:DimGrey;
}
/*按钮 */
.layui-btn:hover {background-color:rgb(201, 201, 201)}
.layui-btn:active{background-color:white}
.layui-btn{
  width: 70px;
  height: 70%;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 2%;
  box-shadow: 2px 2px 4px rgb(201, 201, 201,0.7);
}
#queryresult{
  float:right;
  position: absolute;
  width: 45%;
  left: 8%;
  margin-top: -4%;
  font-size: 14px;
  z-index: 900;
}
/*表格*/
.info_Table{
  float:right;
  position: absolute;
  height:auto;
  width: 80%;
  left:10%;
  color: white;
  margin-top: 16%;
}
.layui-table {/*table */
  width: 100%;
  border-collapse:collapse;
  color: #FFFFFF;
}
.layui-table td, .layui-table th {
    position: relative;
    width: 50%;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 10px;
    font-size: 12px;
    text-align: center;
    font-weight:300;
    border: 0.5px solid rgb(87, 87, 160);
}
tr{
  text-align: center;
  line-height: 2.5em;
  font-size: 10px;
}
th{background-color: rgba(21, 21, 65);}
td{background-color:#3b3b3b;}

/*各路口等量 */
#BSN_Chart2{
  float:right;
  position: absolute;
  width: 90%;
  height: 34%;
  padding: 0 0;
  margin-top: 30%;
  margin-left:5%;
}
#charts{
	visibility:hidden;
	float:right;
  position: absolute;
  width: 84%;
  height: 30%;
  padding: 0 0;
  margin-top: 30%;
  margin-left:5%;;
}
/*隐藏水印 */
.mapboxgl-ctrl {
    display: none !important;
}

</style>


