<template>
  <div class="MenuLeft">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=transparent
      text-color="#fff"
      width="98%">
<!--      border-bottom="0px solid transparent"-->
<!--      margin-left="10%"-->

      <el-submenu  index="1">
        <template slot="title" style="background:transparent"><div class="plabel">地铁客流</div></template>
        <el-menu-item index="1-1"><router-link to="/subway_flow"><div class="plabel1" >地铁客流</div></router-link></el-menu-item>
      </el-submenu>
      <el-submenu  index="2">
        <template slot="title" style="background:transparent"><div class="plabel">公交客流</div></template>
            <el-menu-item index="2-1"><router-link to="/bus_overall"><div class="plabel1">整体客流分析</div></router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/bus_station_num"><div class="plabel1">站位登量分析</div></router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/bus_track"><div class="plabel1">时空轨迹分析</div></router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="/bus_station_top"><div class="plabel1">交时空日历图</div></router-link></el-menu-item>
      </el-submenu>
      <el-submenu  index="3">
        <template slot="title" style="background:transparent"><div class="plabel">公租自行车</div></template>
             <el-menu-item index="3-1"><router-link to="/pr_bicycle_overall"><div class="plabel1">整体使用分析</div></router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/pr_bicycle_od"><div class="plabel1">站位使用分析</div></router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/pr_bicycle_shared"><div class="plabel1">共享单车分析</div></router-link></el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

  name: "MenuLeft",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    placeholderPic() {
      document.documentElement.style.fontSize = document.documentElement.offsetWidth / 60 + "px"; //同上
      // }
    },
  },
  mounted() {
    window.onresize=function(){  //窗口改变时再次执行一次函数即可
      this.placeholderPic();
    }
  }
}
</script>

<style>
a{
  text-decoration:none;
  color:#FFFFFF;
}

.plabel {
  position: relative;
  width:100%;
  font-size:17px;
  background: linear-gradient(to left,#1a95be, #0be9f4);
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
}
.plabel1 {
  position: relative;
  width:100%;
  font-size:16px;
  background: linear-gradient(to left,#1a95be, #0be9f4);
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
}

.el-submenu .el-submenu__title{
  background: url("../../assets/image/HomePage/LeftMenu1.png");
  background-size: 98% 100%;
  margin-top:5%;
}
.el-menu-demo{
  margin-left:10%;
  border-bottom: 0px solid transparent;

}
/*.el-menu--popup-bottom-start {*/
/*  margin-top: -17px;*/
/*}*/
.el-menu-item{
  background: url("../../assets/image/HomePage/LeftMenu1.png");
  background-size: 100% 100%;
  margin-top:5%;
}

.el-submenu__title i {
  color: rgba(255,255,255,.5);

}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  margin-bottom: 1px;
  margin-top: 0px;
  height:53px;
  width:120px;
  line-height:50px;
  color:#FFFFFF;
  text-align: center;
  color:#FFFFFF;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border-bottom: 0px solid rgba(255,255,255,.5);
  color: #fff;
}
.el-menu--popup{
  -webkit-box-shadow: transparent ;
  box-shadow:0px 0px transparent;
}

.el-menu-item is-active
{
  background:transparent;
  background-size: 100% 100%;
}

.el-menu-item:hover, .el-menu-item:focus,.el-menu-item is-active{
  color: #fff !important;
  background-color: transparent !important;
  background-image: url("../../assets/image/HomePage/LeftMenu2.png");
  background-size: 100% 100%;
  color: #0D0715;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color: #fff !important;
  background-color: transparent !important;
  background-image: url("../../assets/image/HomePage/LeftMenu2.png");
  background-size: 100% 100%;
  color: #0D0715;
}


</style>
