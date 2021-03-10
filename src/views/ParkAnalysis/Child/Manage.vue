<!--创建日期：2021.3.3-->
<!--姓名：高翔森-->
<!--功能：组件-->
<template>
  <div  id="manage11">
    <div id="chart" >
      <el-table :data="tableData"  style="width:100%;height:100%" height="730" @row-click="mfly">
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
      request({
        url:'/park/findAll',
      }).then(res =>{
        console.log(res)
        for(let i=0;i<=res.data.msg.length;i++){
           if(res.data.msg[i].TYPE === "0"){
             res.data.msg[i].TYPE ="户外停车场";
            let b={
              FULLNAME: res.data.msg[i].ABBRNAME,
              TYPE: res.data.msg[i].TYPE,
              SPACE: res.data.msg[i].SPACE,
              OFFSET:res.data.msg[i].OFFSET
            }
            this.tableData.push(b)
          }
        }
      }).catch(err => {
        console.log(err);
      })
      // for(let i=0;i<=res.msg.length;i++){
      //   if(res.msg[i].TYPE === "0"){
      //     res.msg[i].TYPE ="户外停车场";
      //     let b={
      //       FULLNAME: res.msg[i].ABBRNAME,
      //       TYPE: res.msg[i].TYPE,
      //       SPACE: res.msg[i].SPACE,
      //       OFFSET:res.msg[i].OFFSET
      //     }
      //     this.tableData.push(b)
      //
      //   }
      //   //console.log(this.tableData)
      // }


    },
    methods:{
      mfly(row,column, event){
        console.log(row)
        for(var i=0;i<res.msg.length;i++){
          if(row.FULLNAME ===res.msg[i].ABBRNAME){
            console.log(res.msg[i].ABBRNAME)
            var data = res.msg[i].GPS;
            var abandon =data.split(":");//使用split进行切割
            var abandon1 =abandon[1].split(",");
            var abandon2 =abandon[2].split("}");
            var  m_lng =abandon1[0]
            var  m_lat =abandon2[0]
          }
        }
        map.flyTo([m_lat, m_lng],18)
      }

    },

  }
</script>

<style >
  #chart{
    width:100%;
    height: 100%;
  }

  #chart .el-table{
    background-color: transparent;
  }
  #chart .el-table__expanded-cell{
    background-color: transparent;
  }
  /* 表格内背景颜色 */
  #chart .el-table th{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #chart .el-table tr{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #chart .el-table td {
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #chart .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: rgba(128,138,135,0.8);
  }


</style>
