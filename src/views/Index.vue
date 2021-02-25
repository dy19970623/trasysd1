<template>
   <div id="index">
     <el-container>
       <el-header height="9%">
         <el-row>
           <el-col :span="8"><div class="grid-content bg-purple"><menu-left/></div></el-col>
           <el-col :span="8"><div class="grid-content bg-purple-light">交通大数据可视化平台</div></el-col>
           <el-col :span="8"><div class="grid-content bg-purple"><menu-right/></div></el-col>
         </el-row>

       </el-header>
       <el-main >
          <keep-alive>
            <router-view/>
          </keep-alive>
       </el-main>
       <el-footer height="4%">版本V3.0.0@2021慧图策北京建筑大学测绘与城市空间信息学院</el-footer>
     </el-container>
   </div>
</template>

<script>
import MenuLeft from "../components/content/MenuLeft";
import MenuRight from "../components/content/MenuRight";
export default {
  name: "index",
  components:{
    MenuLeft,
    MenuRight
  }

}
</script>

<style scoped>
.el-container {
  display: flex;
}

.el-header{
  position: absolute;
  top:0px;
  width: 99%;
  background: antiquewhite;

}
.el-main {

  position:absolute;
  top:9%;
  height:87%;
  width: 99%;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-footer{
  position: absolute;
  bottom: 0px;
  text-align: center;
  width: 99%;
  background: aqua;
}


</style>
