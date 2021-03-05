<template>
  <div>
    <div id="report" class="report1 tab-pane" role="tabpanel" style="height: 100%;" >
      <div id="title" class="title" style=" margin-left: 16px;margin-top: 10px;font-size: 20px;color: #f5f7fa">公租自行车总体使用数据周报</div>
      <div id="context" class="context" style="margin-left: 16px;margin-top: 5px;font-size: 16px;color:#f5f7fa">
        <span style="font-family:'Times New Roman';"><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;</span><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="syear1">&nbsp;2018年12月1日&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>至
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="eyear1">&nbsp;2018年12月8日&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>期间，北京市共出借公租自行车
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="type1">&nbsp;26413&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>辆次，其中
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="total1">&nbsp;西城&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>区出借次数最多，达
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="guidao1">&nbsp;7758&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>辆次，
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="guidao1">&nbsp;大兴&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>区出借次数最少，为
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="shangwang1">&nbsp;1132&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>辆次。<br>北京市西城区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="luzheng1">&nbsp;A&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最高，西城区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="yunshu1">&nbsp;B&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最低。东城区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="luzheng1">&nbsp;C&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最高，东城区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="yunshu1">&nbsp;D&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最低。朝阳区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="luzheng1">&nbsp;E&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最高，朝阳区
        <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="yunshu1">&nbsp;F&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>站使用率最低。
        <!-- <u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="guidao1">&nbsp;&nbsp;</u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u>起。 <br> -->
        <br><br>
        <br>
        <span id="textend" class="textend">汇报日期：<u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u id="today1"><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></u><u><span style="font-family:'Times New Roman';">&nbsp;&nbsp;&nbsp;&nbsp;</span></u><span>

    		</span>
    		</span>
        <button class="btn" style="margin-left:115px;width:100px;border:2px solid #ccc;background:#224465;color:white;font-size:13px" @click="toword">报告导出</button>
      </div>
      <div> <legend id="bikename2" style="margin-bottom:0px;margin-top:20px;color:white;margin-left:16px;">北京市各区自行车出借情况</legend></div>
      <div id="allChart"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
import $ from "jquery";
import wordExport from './jquery.word.export';

export default {
  name: "report",
  data(){
    return{}
  },
  methods:{
    toword(){
      $("#report").wordExport("交通行业突发事件总体情况分析报告");
    },
    echart32(){
      let bikeusenumber=[1104,1325,995,1243,1402,1076,0];
      let numberxincheng6 = bikeusenumber[6]
      let numberdongcheng6 = bikeusenumber[6]+150;
      let numberchaoyang6 = bikeusenumber[6]+210;
      let numberhaidian6 = bikeusenumber[6]+80;
      let numberdaxing6 = bikeusenumber[6]-120;//周日

      let numberxincheng5 = bikeusenumber[5]
      let numberdongcheng5 = bikeusenumber[5]-150;
      let numberchaoyang5 = bikeusenumber[5]-210;
      let numberhaidian5 = bikeusenumber[5]-80;
      let numberdaxing5 = bikeusenumber[5]+120;//周六

      let numberxincheng4 = bikeusenumber[4]
      let numberdongcheng4 = bikeusenumber[4]+150;
      let numberchaoyang4 = bikeusenumber[4]+210;
      let numberhaidian4 = bikeusenumber[4]+80;
      let numberdaxing4 = bikeusenumber[4]-120;//周五

      let numberxincheng3 = bikeusenumber[3]
      let numberdongcheng3 = bikeusenumber[3]+150;
      let numberchaoyang3 = bikeusenumber[3]+210;
      let numberhaidian3 = bikeusenumber[3]+80;
      let numberdaxing3 = bikeusenumber[3]-120;//周四

      let numberxincheng2 = bikeusenumber[2]
      let numberdongcheng2 = bikeusenumber[2]+150;
      let numberchaoyang2 = bikeusenumber[2]+210;
      let numberhaidian2 = bikeusenumber[2]+80;
      let numberdaxing2 = bikeusenumber[2]-120;//周三

      let numberxincheng1 = bikeusenumber[1]
      let numberdongcheng1 = bikeusenumber[1]+150;
      let numberchaoyang1 = bikeusenumber[1]+210;
      let numberhaidian1 = bikeusenumber[1]+80;
      let numberdaxing1 = bikeusenumber[1]-120;//周二

      let numberxincheng0 = bikeusenumber[0]
      let numberdongcheng0 = bikeusenumber[0]+150;
      let numberchaoyang0 = bikeusenumber[0]+210;
      let numberhaidian0 = bikeusenumber[0]+80;
      let numberdaxing0 = bikeusenumber[0]-120;//周一
      let PRBicycle_OD_myChart8 = echarts.init(document.getElementById('allChart'));
      let PRBicycle_OD_option8 = {
        title: {
          text: ''

        },
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data:['西城区','东城区','朝阳区','海淀区','大兴区'],

          textStyle: {

            color: 'white'
          }
        },
        textStyle: {

          color: 'white'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日'],

          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'西城区',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[numberxincheng0, numberxincheng1, numberxincheng2, numberxincheng3, numberxincheng4, numberxincheng5, numberxincheng6]
          },
          {
            name:'东城区',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[numberdongcheng0, numberdongcheng1, numberdongcheng2, numberdongcheng3, numberdongcheng4, numberdongcheng5, numberdongcheng6]
          },
          {
            name:'朝阳区',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[numberchaoyang0, numberchaoyang1, numberchaoyang2, numberchaoyang3, numberchaoyang4, numberchaoyang5, numberchaoyang6]
          },
          {
            name:'海淀区',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[numberhaidian0, numberhaidian1, numberhaidian2, numberhaidian3, numberhaidian4, numberhaidian5, numberhaidian6]
          },
          {
            name:'大兴区',
            type:'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data:[numberdaxing0, numberdaxing1, numberdaxing2, numberdaxing3, numberdaxing4, numberdaxing5, numberdaxing6]
          }
        ]
      };

      /*};*/
      PRBicycle_OD_myChart8.setOption(PRBicycle_OD_option8);
    }

  },
  mounted() {
    this.echart32()
  }
}
</script>

<style scoped>
#allChart {
  background: rgba(255, 255, 255, 0.1)!important;
  width: 405px;
  height: 400px;
  padding: 15px 0;
  color: #ddd;
  z-index: 700;
  position: absolute;
  top: 405px;
  right: 0px;
}
</style>
