<template>
  <div class="MenuRight">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=transparent>
      <el-menu-item index="1" ><router-link to="/park_flow">停车流量分析</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title"style="background:transparent">出租车分析</template>
        <el-menu-item index="2-1"><router-link to="/taxi_distribution"><p class="lowtitle">出租车位置分布</p></router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/taxi_riding_service"><p class="lowtitle">空车位置分布热力图</p></router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_o_point"><p class="lowtitle">出租车O聚类分析</p></router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_d_point"><p class="lowtitle">出租车D聚类分析</p></router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_trace"><p class="lowtitle">出租车轨迹查询</p></router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_3dtrace"><p class="lowtitle">出租车时空轨迹</p></router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_grid"><p class="lowtitle">OD网格分析</p></router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_zone"><p class="lowtitle">交通小区热力图</p></router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_odline"><p class="lowtitle">出租车OD分析</p></router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">数据融合分析</template>
        <el-menu-item index="3-1"><router-link to="/homepage">未知.</router-link></el-menu-item>

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
    }
  }
}
</script>

<style scoped>
  .MenuRight {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 30px;
  }
  .el-header
  {
    padding: 0;
  }
  .MenuLeft {
    display: flex;
    width: 100%;
    left:0px;
    text-align: center;
    font-size: 30px;
    background: transparent;
  }
  .el-menu{
    background: transparent;
  }
  .el-menu-item
  {
    background: url("../../assets/image/HomePage/RightMenu1.png");
    background-size: 100% 100%;
    color: aliceblue;
    text-align: center;
  }
  .el-menu-item.is-active {
    background: url("../../assets/image/HomePage/RightMenu2.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  .el-menu-item:hover{
    color: #1787FB !important;
    text-decoration: underline;
  }
  .el-submenu
  {
    background: url("../../assets/image/HomePage/RightMenu1.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  .el-submenu.is-active {
    background: url("../../assets/image/HomePage/RightMenu2.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  /deep/.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background:transparent;
  }
  /deep/.el-menu--horizontal>.el-submenu .el-submenu__title
  {
    color: aliceblue;
  }
  .lowtitle
  {
    color: aliceblue;
  }
</style>
