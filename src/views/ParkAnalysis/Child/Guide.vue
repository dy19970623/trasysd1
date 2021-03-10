<template>
  <div>
    <el-collapse v-model="activeNames"  accordion>
      <el-collapse-item title="一级诱导屏" name="1" >
        <div  id="a">
          <el-table :data="tableData1"  height="400"   @row-click="fly1" >
            <el-table-column prop="屏号" label="屏号" width="65px"></el-table-column>
            <el-table-column prop="Parkingmessage" label="停车场情况（停车场名称：空余车位)" ></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="二级诱导屏" name="2">
        <div id="b">
          <el-table :data="tableData2"  height="400" @row-click="fly2">
            <el-table-column prop="屏号" label="屏号" width="65px"></el-table-column>
            <el-table-column prop="Parkingmessage" label="停车场情况（停车场名称：空余车位)" ></el-table-column>
          </el-table>
        </div >
      </el-collapse-item>
      <el-collapse-item title="三级诱导屏" name="3">
        <div id="c">
          <el-table :data="tableData3"   height="400"   @row-click="fly3">
            <el-table-column prop="屏号" label="屏号" width="65px"></el-table-column>
            <el-table-column prop="Parkingmessage" label="停车场情况（停车场名称：空余车位)" ></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import {res}   from "../../../assets/js/ParkAnalysis/screen1"
  import {screen1,screen2,screen3} from "../../../assets/js/ParkAnalysis/ParkScreen"
  export default {
    name: "Guide",
    data(){
      return {
        activeNames: ['1'],
        tableData1:[],
        tableData2:[],
        tableData3:[]
      };
    },
    mounted(){
      request({
        url:'/park/findAllScreen1',
      }).then(res =>{
        console.log(res)
        for(let i=0;i <=res.data.msg.length;i++){
          let c = [];
          let a = JSON.parse(res.data.msg[i].INFO);
          c.push(a);
          //console.log(c)
          let d = '';
          for(let j=0; j < c[0].length;j++){
            d= d + c[0][j].fullname +"："+c[0][j].num+'  '
          }
          let b={
            屏号:res.data.msg[i].屏号,
            Parkingmessage:d,
          }
          this.tableData1.push(b)
        }
      }).catch(err => {
        console.log(err);
      })

      request({
        url:'/park/findAllScreen2',
      }).then(res =>{
        console.log(res)
        for(let i=0;i <=res.data.msg.length;i++){
          let c = [];
          let a = JSON.parse(res.data.msg[i].INFO);
          c.push(a);
          //console.log(c)
          let d = '';
          for(let j=0; j < c[0].length;j++){
            d= d + c[0][j].fullname +"："+c[0][j].num+'  '
          }
          let b={
            屏号:res.data.msg[i].屏号,
            Parkingmessage:d,
          }
          this.tableData2.push(b)
        }
      }).catch(err => {
        console.log(err);
      })

      request({
        url:'/park/findAllScreen3',
      }).then(res =>{
        console.log(res)
        for(let i=0;i <=res.data.msg.length;i++){
          let c = [];
          let a = JSON.parse(res.data.msg[i].INFO);
          c.push(a);
          //console.log(c)
          let d = '';
          for(let j=0; j < c[0].length;j++){
            d= d + c[0][j].fullname +"："+c[0][j].num+'  '
          }
          let b={
            屏号:res.data.msg[i].屏号,
            Parkingmessage:d,
          }
          this.tableData3.push(b)
        }
      }).catch(err => {
        console.log(err);
      })

      // for(let i=0;i <= res.msg.length;i++){
      //   let c = [];
      //   let a = JSON.parse(res.msg[i].INFO);
      //   c.push(a);
      //   //console.log(c)
      //   let d = '';
      //   for(let j=0; j < c[0].length;j++){
      //     d= d + c[0][j].fullname +"："+c[0][j].num+'  '
      //   }
      //   let b={
      //     屏号:res.msg[i].屏号,
      //     Parkingmessage:d,
      //   }
      //   this.tableData1.push(b)
      // };



    },

    methods:{
      fly1(row, column, event){
        console.log(row)
        for(var i=0;i<screen1.length;i++){
          if(row.屏号 ===screen1[i].屏号){
            var screen1_lat =screen1[i].lat
            var screen1_lng =screen1[i].lng
          }
        }
        map.flyTo([screen1_lat, screen1_lng],18)
      },

      fly2(row, column, event){
        console.log(row)
        for(var i=0;i<screen2.length;i++){
          if(row.屏号 ===screen2[i].屏号){
            var screen2_lat =screen2[i].lat
            var screen2_lng =screen2[i].lng
          }
        }
        map.flyTo([screen2_lat, screen2_lng],18)
      },

      fly3(row, column, event){
        console.log(row)
        for(var i=0;i<screen3.length;i++){
          if(row.屏号 ===screen3[i].屏号){
            var screen3_lat =screen3[i].lat
            var screen3_lng =screen3[i].lng
          }
        }
        map.flyTo([screen3_lat, screen3_lng],18)
      },



    }


  }
</script>

<style >
  .el-collapse-item__header{
    background-color:rgba(0,0,0,0.2) ;
    color:#f5f7fa;
  }
  .el-tabs__content{
    background-color:rgba(0,0,0,0.2) ;
  }
  .el-collapse-item__content{
    background-color:rgba(0,0,0,0.2) ;
    padding-bottom: 0;
  }

  .el-collapse-item__wrap {
    will-change: height;
    background-color: rgba(0,0,0,0.2);
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #EBEEF5;
  }
  #a .el-table{
    background-color: transparent;
  }
  #a .el-table__expanded-cell{
    background-color: transparent;
  }
  /* 表格内背景颜色 */
  #a .el-table th{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #a .el-table tr{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #a .el-table td {
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #a .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: rgba(128,138,135,0.8);
  }
  #a{
    background-color:rgba(0,0,0,0.2) ;
  }

  #b .el-table{
    background-color: transparent;
  }
  #b .el-table__expanded-cell{
    background-color: transparent;
  }
  /* 表格内背景颜色 */
  #b .el-table th{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #b .el-table tr{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #b .el-table td {
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #b .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: rgba(128,138,135,0.8);
  }
  #b{
    background-color:rgba(0,0,0,0.2) ;
  }

  #c .el-table{
    background-color: transparent;
  }
  #c .el-table__expanded-cell{
    background-color: transparent;
  }
  /* 表格内背景颜色 */
  #c .el-table th{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #c .el-table tr{
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #c .el-table td {
    background-color:rgba(0,0,0,0.2) ;
    color: white;
  }
  #c .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: rgba(128,138,135,0.8);
  }
  #c{
    background-color:rgba(0,0,0,0.2) ;
  }
</style>
