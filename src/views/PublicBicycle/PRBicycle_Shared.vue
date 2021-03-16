<!--
组件：共享单车分析
作者：李江川
时间：2021/3/3
-->
<template>
  <div id="PRBicycle_Shared">
    <div id="PRBicycleShared_container" class="container"></div>

    <rightdomain ref="rightdomain"></rightdomain>
    <SharedLengend></SharedLengend>
  </div>
</template>

<script>
import stylejson from "../../assets/js/PRBicycle_Shared/StyleJson"
import BMap from 'BMap'
import {request} from "../../network/request";
import rightdomain from "../PublicBicycle/Child/rightdomain";
import SharedLengend from "../PublicBicycle/Child/SharedLengend";

let map
let returnoptions1
let rentoptions1


export default {
  name: "PRBicycle_Shared",
  components:{
    rightdomain,//echarts
    SharedLengend//图例
  },
  data(){
    return{
      rentLatLng:[],
      returnLatLng:[],
      rentpoints:[],
      returnpoints:[],
      changeRR:0
    }
  },
  mounted() {
    //绘制地图
    map = new BMap.Map("PRBicycleShared_container", {enableMapClick:false});
    map.centerAndZoom(new BMap.Point(116.402598,39.941999), 17);
    map.enableScrollWheelZoom(true);  //开启鼠标滚轮缩放
    map.setMapStyle({styleJson:stylejson.styleJson});
    let that = this;

    //后台获取数据
    request({
      url:'get/getall',
      method:'get'
    }).then(res=>{
      console.log(res)
      for(let i=0;i<res.data.msg.length;i++){
        that.rentLatLng.push([res.data.msg[i].rentlng,res.data.msg[i].rentlat]);
        that.returnLatLng.push([res.data.msg[i].returnlng,res.data.msg[i].returnlat])
        //console.log(this.rentLatLng)
      };
      that.$nextTick(()=>{
        that.$refs.rightdomain.getchartdata(res.data)//传递到子组件方法
      })
      //console.log(this);
      //console.log(that);
      this.initdata(map)
    }).catch(err=>{
      console.log(err);
    })

  },
  methods: {
    //数据预处理，此处运行时间较长
    initdata(map) {
      //alert('运行到此');
      for (let i = 0; i < this.rentLatLng.length; i++) {
        this.rentLatLng[i][0] = parseFloat(this.rentLatLng[i][0]) + 0.0125;
        this.rentLatLng[i][1] = parseFloat(this.rentLatLng[i][1]) + 0.0078;
      }
      for (let i = 0; i < this.returnLatLng.length; i++) {
        this.returnLatLng[i][0] = parseFloat(this.returnLatLng[i][0]) + 0.0125;
        this.returnLatLng[i][1] = parseFloat(this.returnLatLng[i][1]) + 0.0078;
      }
      //alert('运行到此')
      console.log(this.rentLatLng);
      this.rentbike(map);
      this.returnbike(map);
      // for (let i = 0; i < rentLatLng.length; i++) {
      //   rentpoints.push(new BMap.Point(rentLatLng[i][0], rentLatLng[i][1]));
      // };
      //console.log(rentpoints);
    },
    //租车点分布
    rentbike(map) {
      for (let i = 0; i < this.rentLatLng.length; i++) {
        let rentLatLng=this.rentLatLng
        this.rentpoints.push(new BMap.Point(rentLatLng[i][0], rentLatLng[i][1]));
      }
      let rentoptions = {
        size: BMAP_POINT_SIZE_TINY,
        shape: BMAP_POINT_SHAPE_CIRCLE,
        color: '#FF9900'
      }
      rentoptions1=rentoptions
      let rentpointCollection = new BMap.PointCollection(this.rentpoints, rentoptions);
      map.addOverlay(rentpointCollection);  // 添加借车Overlay
    },
    //还车点分布
    returnbike(map) {
      for (let i = 0; i < this.returnLatLng.length; i++) {
        this.returnLatLng[i][0] = parseFloat(this.returnLatLng[i][0]) + 0.0125;
        this.returnLatLng[i][1] = parseFloat(this.returnLatLng[i][1]) + 0.0078;
      }
      console.log(this.returnLatLng)
      for (let i = 0; i < this.returnLatLng.length; i++) {
        let returnLatLng=this.returnLatLng
        this.returnpoints.push(new BMap.Point(returnLatLng[i][0], returnLatLng[i][1]));
      }
      let returnoptions = {
        size: BMAP_POINT_SIZE_TINY,
        shape: BMAP_POINT_SHAPE_CIRCLE,
        color: '#9900CC'
      }
      returnoptions1=returnoptions
      //let returnpointCollection = new BMap.PointCollection(this.returnpoints, returnoptions);
      //map.addOverlay(returnpointCollection);  // 添加借车Overlay

    },
    //切换
    changeRentOverlay(){
      if (this.changeRR==0){
        this.changeRR=1;
        //rentpointCollection.hide();
        map.clearOverlays();
        map.centerAndZoom(new BMap.Point(116.402598,39.941999), 15);
        let returnpointCollection = new BMap.PointCollection(this.returnpoints, returnoptions1);  // 初始化PointCollection
        map.addOverlay(returnpointCollection);  // 添加还车Overlay
        //returnpointCollection.show();//添加还车点位置

      } else{
        this.changeRR=0;
        map.clearOverlays();
        map.centerAndZoom(new BMap.Point(116.402598,39.941999), 17);
        let rentpointCollection = new BMap.PointCollection(this.rentpoints, rentoptions1);
        map.addOverlay(rentpointCollection); //添加借车点位置
        // returnpointCollection.hide();
        // rentpointCollection.show();


      }

    }
  }

  }
</script>

<style>
#PRBicycle_Shared{
  position: absolute;
  height:99.93%;
  width:100%
}
.container{
  width:100%;height:100%
}


.container .BMap_cpyCtrl{
  display: none;
}
.container .anchorBL{
  display: none;
}

</style>
