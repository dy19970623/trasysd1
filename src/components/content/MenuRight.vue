<template>
  <div class="MenuRight">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" ><router-link to="/park_flow">停车流量分析</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">出租车分析</template>
        <el-menu-item index="2-1"><router-link to="/taxi_distribution">出租车位置分布</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/taxi_riding_service">空车位置分布热力图</router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_o_point">出租车O聚类分析</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_d_point">出租车D聚类分析</router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_trace">出租车轨迹查询</router-link></el-menu-item>
        <el-menu-item index="2-3"><router-link to="/taxi_3dtrace">出租车时空轨迹</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_grid">OD网格分析</router-link></el-menu-item>
        <el-menu-item index="2-4"><router-link to="/taxi_zone">交通小区热力图</router-link></el-menu-item>
        <el-menu-item index="2-5"><router-link to="/taxi_odline">出租车OD分析</router-link></el-menu-item>
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
</style>
