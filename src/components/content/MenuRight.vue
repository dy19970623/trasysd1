<template>
  <div class="MenuRight">
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
        <template slot="title" style="background:transparent"><div class="plabel">停车流量</div></template>
        <el-menu-item index="1-1"><router-link to="/park_flow"><div class="plabel1" >停车流量分析</div></router-link></el-menu-item>
      </el-submenu>
      <el-submenu  index="2">
        <template slot="title" style="background:transparent"><div class="plabel">出租车客流</div></template>
        <el-menu-item index="2-1"><router-link to="/taxi_distribution"><div class="plabel1">整体位置分析</div></router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/taxi_riding_service"><div class="plabel1">空车位置分析</div></router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_o_point"><div class="plabel1">O聚类分析</div></router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_d_point"><div class="plabel1">D聚类分析</div></router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_trace"><div class="plabel1">轨迹查询</div></router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/taxi_3dtrace"><div class="plabel1">时空轨迹</div></router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_grid"><div class="plabel1">OD网格分析</div></router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_zone"><div class="plabel1">交通小区</div></router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_odline"><div class="plabel1">OD分析</div></router-link></el-menu-item>
      </el-submenu>
      <el-submenu  index="3">
        <template slot="title" style="background:transparent"><div class="plabel">数据融合</div></template>
        <el-menu-item index="3-1"><router-link to="/taxi_bus"><div class="plabel1">交通热点分析</div></router-link></el-menu-item>
        <el-menu-item index="3-2"><router-link to="/taxi_backheat"><div class="plabel1">逆向热力图</div></router-link></el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

  name: "MenuRight",
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

/*.el-submenu {*/
/*  background-color: transparent;*/
/*}*/
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

.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  margin-bottom: 1px;
  margin-top: 0px;
  height:53px;
  width:120px;
  line-height:50px;
  color:#FFFFFF;
  text-align: center;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border-bottom: 2px solid rgba(255,255,255,.5);
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
