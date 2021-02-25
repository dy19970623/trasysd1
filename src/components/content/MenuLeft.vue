<template>
  <div class="MenuLeft">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" ><router-link to="/subway_flow">地铁客流分析</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">公交数据分析</template>
            <el-menu-item index="2-1"><router-link to="/bus_overall">整体客流情况</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/bus_station_num">站位登量分析</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/bus_station_od">站间OD分析</router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="/bus_track">公交时空轨迹</router-link></el-menu-item>
            <el-menu-item index="2-5"><router-link to="/bus_station_top">公交时空日历图</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">公租自行车分析</template>
            <el-menu-item index="3-1"><router-link to="/prbicycle_overall">整体使用情况</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/prbicycle_od">站位使用分析</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/prbicycle_shared">共享单车分析</router-link></el-menu-item>
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

<style scoped>
  .MenuLeft {
    display: flex;
    width: 100%;
    left:0px;
    text-align: center;
    font-size: 30px;


  }
</style>
