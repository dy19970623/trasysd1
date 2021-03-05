<template>
  <div class="MenuLeft">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=transparent
      text-color="#fff">
      <el-menu-item index="1"><router-link to="/subway_flow">地铁客流分析</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title" style="background:transparent">公交数据分析</template>
            <el-menu-item index="2-1"><router-link to="/bus_overall"><p class="lowtitle">整体客流情况</p></router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/bus_station_num"><p class="lowtitle">站位登量分析</p></router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/bus_station_od"><p class="lowtitle">站间OD分析</p></router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="/bus_track"><p class="lowtitle">公交时空轨迹</p></router-link></el-menu-item>
            <el-menu-item index="2-5"><router-link to="/bus_station_top"><p class="lowtitle">公交时空日历图</p></router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title" style="background:transparent">公租自行车分析</template>
        <el-menu-item index="3-1"><router-link to="/pr_bicycle_overall"><p class="lowtitle">整体使用情况</p></router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/pr_bicycle_od"><p class="lowtitle">站位使用分析</p></router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/pr_bicycle_shared"><p class="lowtitle">共享单车分析</p></router-link></el-menu-item>
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
  }
}
</script>

<style>
  /deep/.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background:transparent!important;
  }
  /deep/.el-menu--horizontal>.el-submenu .el-submenu__title
  {
    color: aliceblue !important;
  }
  .el-submenu
  {
    background: url("../../assets/image/HomePage/LeftMenu1.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  .el-submenu.is-active {
    background: url("../../assets/image/HomePage/LeftMenu2.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  .el-submenu is-opened
  {
    background: url("../../assets/image/HomePage/LeftMenu2.png");
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: white;
  }
</style>
<style scoped>
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
    background: url("../../assets/image/HomePage/LeftMenu1.png");
    background-size: 100% 100%;
    color: aliceblue;
    text-align: center;
  }
  .el-menu-item.is-active {
    background: url("../../assets/image/HomePage/LeftMenu2.png");
    background-size: 100% 100%;
    color: aliceblue;
  }
  /deep/.el-menu-item-group .el-menu-item.demo:hover{
    background: transparent !important;
    color: #fff !important;
  }
  .lowtitle{
    color: aliceblue;
  }

</style>
