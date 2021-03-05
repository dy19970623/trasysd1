<template>
  <div  id="app">
    <div id="chart" style="width:435px;height:650px ">
      <el-table :data="tableData" border height="650" style="width: 100%">
        <el-table-column prop="FULLNAME" label="停车场名称" width="100"></el-table-column>
        <el-table-column prop="TYPE" label="类型" width="100"></el-table-column>
        <el-table-column prop="SPACE" label="总车位"></el-table-column>
        <el-table-column prop="OFFSET" label="空余车位"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import  {res}  from "../../../assets/js/ParkAnalysis/Manage";
    export default {
        name: "Manage",
      data(){
          return{
            tableData:[]
          }
      },
      mounted() {
        // request({
        //   url:'/park/findAll',
        // }).then(res =>{
        //   console.log(res)
        //   for(let i=0;i<=res.msg.length;i++){
        //      if(res.msg[i].TYPE === "0"){
        //        res.msg[i].TYPE ="户外停车场";
        //       let b={
        //         FULLNAME: res.msg[i].FULLNAME,
        //         TYPE: res.msg[i].TYPE,
        //         SPACE: res.msg[i].SPACE,
        //         OFFSET:res.msg[i].OFFSET
        //       }
        //       this.tableData.push(b)
        //     }
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
        for(let i=0;i<=res.msg.length;i++){
           if(res.msg[i].TYPE === "0"){
            res.msg[i].TYPE ="户外停车场";
          let b={
            FULLNAME: res.msg[i].FULLNAME,
            TYPE: res.msg[i].TYPE,
            SPACE: res.msg[i].SPACE,
            OFFSET:res.msg[i].OFFSET
          }
          this.tableData.push(b)
          //}
        }
        //console.log(this.tableData)
        }

      },
      method:{


      },

    }
</script>

<style >

</style>
