/*
 * 邹瑞萌 2021-2-28
 * 出租车位置分布
 * */
<template>
  <div id="BusStationNum">
    <div id="BSNumLeftBox">
      <div ref="chart1" id="chordChart1"></div>
      <div id="inputBox">
        <!--查询模块-->
        <div class="layui-form-item">
            <div id="searchBox" class="layui-inline">
                <input id="stationName" class="layui-input-inline layui-input" v-model="searchVal" type="text" name="word" autocomplete="off" maxlength="256" placeholder="请输入站位名称" style="" value="">
                <button id="searchBtn" class="layui-btn" ref="searchBtn" @click="search">查询</button>
                <button id="recover" ref="recover" class="layui-btn" @click="recover">还原</button>
                <!--下拉菜单-->
                <div id="queryresult">
                    <ul id="list" style="display:none"></ul>
                </div>
            </div>
        </div>
    </div>
       <!--表格  -->
    <div id="info_Table">
        <table class="layui-table">
            <thead>
                <tr>
                    <th>公交站名</th>
                    <th>登量</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="info_station">{{info_station}}</td>
                    <td id="info_num">{{info_num}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="chordChart2"></div>
    </div>

    <div ref="map" id="map" style="height:900px;width:100%;overflow: hidden;"></div>
    <div id="charts">
      <div ref="nums" id="nums">
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import BSNum from '../../assets/js/BusStationNum/BusStationNum'
//import checi from '../../assets/js/BusStationNum/checi'
import BSNumLeftBox from '../../components/content/BusStationNum/BusStationNum_LeftBox'

export default {
  data() {
    return {
      searchVal: '',
      info_station: '',
      info_num: '',
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
	           color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
	        },
	        max:8795,
          itemHeight:25,
          right:"2%",
          bottom:"10%",
          padding:5,
          borderColor: '#ccc',
				  borderWidth: 2,
				  backgroundColor: '#eee',
	      },
	      mapbox: {
	       center: [116.40, 39.92],
	        zoom:9.5,
	        pitch: 60,
	        bearing: -10,
          renderOnMoving:false,
	        style: 'mapbox://styles/mrmax/cjnn6bltn028r2rnvywtz4yoj',
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
	          text: "",
	          left: "left",
	          textStyle: {
	                fontSize: 20,
	                color: 'white',
	                fontWeight:"normal",
	              },
	      },
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	 	        {
	 	            type : 'category',
	 	            name: '车次',
	 	             data :[0,0,0,0,0],
		            axisLabel:{
						interval:0,
						rotate:45
		            	},
	 	            axisTick: {
	 	                alignWithLabel: true
	 	            },
	                 axisLine:{
	                 	lineStyle:{
	                 		color:"white",
	                 	}
	                 }
	 	        }
	 	    ],
	 	    yAxis : [
	 	        {
	 	            type : 'value',
	 	            name: '人次',
	 		        nameTextStyle:{
	 	            	color:"white"
	 	            	},
	 	            axisLine: {
	 	                lineStyle: {
	 	                    color: "white"
	                     }
	 	            }
	 	        }
	 	    ],
	    series : [
	        {
	            name:'今日登量',
	            type:'bar',
	            barWidth: '50%',
	            data:[0,0,0,0,0],
	        }
	    ]
	    },
      //左上表格
      echartbarTop20_option: {
		    title: {
	          text: '公交客流TOP20',
	          left: 'left',
	          textStyle: {
	                fontSize: 20,
	                color: 'white',
	                fontWeight:"normal",
	              },
	      },
	      color: ['#b0e0e6'],
	      backgroundColor:['rgba(1,19,66,0.5)'],
	      tooltip : {
	        trigger: 'axis',
	        formatter: '{a0}:{c0}人',
	        axisPointer : {
	            type : 'shadow'
	        }
	      },
	      grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '5%',
	        containLabel: true
	      },
	      xAxis : [
	        {
	            type : 'category',
	            data : BSNum.titledata3,
	            axisLabel: {
                    interval: 0,
                    formatter:function(value)
                    {
                        return value.split("").join("\n");
                    }
                },
	            axisTick: {
	                alignWithLabel: true
	            },
                axisLine:{
                	lineStyle:{
                		color:"white",
                	}
                }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name: '人次',
		        nameTextStyle:{
	            	color:"white"
	            	},
	            axisLine: {
	                lineStyle: {
	                    color: "white"
                    }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'今日登量',
	            type:'bar',
	            barWidth: '50%',
	            data:BSNum.bartop20
	        }
	    ]
		  },
      //左下表格
      optionBottom: {
		title: {
	          text: '登录情况',
	          left: 'left',
	          textStyle: {
	                fontSize: 20,
	                color: 'white',
	                fontWeight:"normal",
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
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : [0,0,0,0],
	            axisLabel:{
					interval:0,
					margin:20
	            	},
	            axisTick: {
	                alignWithLabel: true
	            },
                axisLine:{
                	lineStyle:{
                		color:"white",
                	}
                }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name: '人次',
		        nameTextStyle:{
	            	color:"white"
	            	},
	            axisLine: {
	                lineStyle: {
	                    color: "white"
                    }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'今日登量',
	            type:'bar',
	            barWidth: '50%',
	            data:[0,0,0,0,0]
	        }
	    ]
	    }
    }
  },
  components: {
    BSNumLeftBox
  },
  mounted() {
    this.getmap()
  },
  methods: {
    getmap() {
      let _this=this;
      //echarts-gl 3d柱状图
      mapboxgl.accessToken = 'pk.eyJ1IjoiNjEwNzIzMzc0IiwiYSI6ImNqanFmbXEwZjg3bG0za3AxcHQ3Z3F5dGkifQ.ETMjU9Z6PtN8nR8tPhuzkA'
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
      let echartbarTop20 = echarts.init(this.$refs.chart1);
      echartbarTop20.setOption(this.echartbarTop20_option)

      //点击图标定位
      echartbarTop20.on('click', function (params) {
        document.getElementById("charts").style.visibility="visible";
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
      //展示不同时间段该站位乘客乘坐各公交线路的数量
      let tips=echarts.init(this.$refs.nums);
      tips.setOption(this.option);

      //左下表格
      let echartbarBottom = echarts.init(document.getElementById('chordChart2'))
      echartbarBottom.setOption(this.optionBottom);

      //查询框
      var inputName = document.getElementById('stationName');
      var Nlist=document.getElementById('list');
      var stationN=[];
      for(var i=0;i<BSNum.finalnums.length;i++){
        stationN[i]=BSNum.finalnums[i].siteName;
      }

      inputName.addEventListener('keyup',function () {
        //方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
        checkCharacter();
        var keyWord = this.searchVal
        var stationlist = searchByRegExp(keyWord,stationN);
        renderStation(stationlist);
        showClickDiv();
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
        inputName.value = a;
        Nlist.style.display = "none";
        console.log(inputName.value);
      }
    },

    ////点击查询
    search () {
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
          let echartbarBottom = echarts.init(document.getElementById('chordChart2'))
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

<style scoped>
@import '../../assets/css/BusStationNum/3D_bar.css';
#chordChart1{
    width: 97.5%;
    height: 350px;
    background-color:rgba(255,255,255,0.1);

    z-index: 700;

}
#BSNumLeftBox{
    float:right;
    position: absolute;
    left: 7px;
    height: 790px;
    width: 25%;
    padding-top:5px;
    padding-left: 10px;
    padding-bottom:5px;
    z-index: 600;
    background-color:rgba(1,19,66,0.6);
}

#chordChart2{
    width: 97.5%;
    height: 350px;
    padding: 0 0;
    background-color:rgba(255,255,255,0.1);

    z-index: 700;

}
/*隐藏水印 */
.mapboxgl-ctrl {
    display: none !important;
}


</style>


