<template>
   <div id="index">
     <el-container>
       <el-header height="9%">
         <el-row>
           <el-col :span="3">
             <div class="grid-content bg-purple">
             <el-col :span="10">
               <div style="font-size: 24px;text-align: center;padding-top: 20px;">{{nowTime}}</div>
             </el-col>
             <el-col :span="14">
               <div style="height: 60%;">{{nowWeek}}</div>
               <div style="height: 40%;margin-top: 7px;font-size: 15px;">{{nowDate}}</div>
             </el-col>
<!--             <el-col :span="4">
               &lt;!&ndash;<div>{{nowWeek}}</div>&ndash;&gt;
             </el-col>-->
           </div>
           </el-col>
           <el-col :span="7"><div class="grid-content bg-purple"><menu-left/></div></el-col>
           <el-col :span="4"><div class="grid-content bg-purple-light">
             <p style="vertical-align: middle;line-height: 100%;cursor: pointer;text-align: center;font-size: 22px; ">交通大数据可视化平台</p></div></el-col>
           <el-col :span="7"><div class="grid-content bg-purple"><menu-right/></div></el-col>
           <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
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
  data(){
    return{
      nowDate:'',    //存放年月日变量
      nowTime:'',   //存放时分秒变量
      nowWeek:'',   //存放星期变量
      timer: "",           //定义一个定时器的变量
      currentTime: new Date(),       // 获取当前时间
    }
  },
  components:{
    MenuLeft,
    MenuRight
  },
  created() {
    this.timer = setInterval(this.getTime, 1000);
  },
  methods:{
    getTime(){
      const date = new Date();
      let wk = date.getDay()
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour= date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let week = weeks[wk]
      const str = ''
      if(this.hour>12) {
        this.hour -= 12;
        this.str = " AM";
      }else{
        this.str = " PM";
      }
      this.month=check(month);
      this.day=check(day);
      this.hour=check(hour);
      this.minute=check(minute);
      this.second=check(second);
      function check(i){
        const num = (i<10)?("0"+i) : i;
        return num;
      }
      this.nowDate = year + "年" + this.month + "月" + this.day+"日";
      this.nowTime = this.hour + ":" + this.minute;
      this.nowWeek = week
    },
  }

}
</script>

<style scoped>
#index{
    font-family: 'Lato', Calibri, Arial, sans-serif;
  }
.el-container {
  display: flex;
}
.el-header{
  position: absolute;
  top:0px;
  width: 100%;
  color: white;
  background: url("../assets/image/HomePage/Navigation.png");
  padding: 0px;
}
.el-main {
  position:absolute;
  top:9%;
  height:87%;
  width: 100%;
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
