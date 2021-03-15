<template>
  <div id="echartsBox">
    <div id="chordChart2"></div>
    <div id="chordChart"></div>
  </div>
</template>

<script>
import L from "leaflet";
import echarts from "echarts"
import {graphic} from "echarts/lib/export";
export default {
  name: "lockAnalysis1",
  props:['data1','data2','map','mapgroup','siteName','numberGroup'],
  data(){
    return{
    }
  },
  methods:{
    PRBicycle_OD_echart21(data,map,group,nameGroup,numGroup){
      let echart21_data=data;
      let PRBicycle_OD_myChart2 = echarts.init(document.getElementById('chordChart2'));
      let baifenbi = [echart21_data[19], echart21_data[15], echart21_data[11], echart21_data[7], echart21_data[3]];
      let grayBar = [1, 1, 1, 1, 1];
      let paiming = [5, 4, 3, 2, 1];
      let zongjine = [echart21_data[17], echart21_data[13], echart21_data[9], echart21_data[5], echart21_data[1]];
      let fenpeijine = [echart21_data[18],echart21_data[14],echart21_data[10],echart21_data[6],echart21_data[2]];
      let city = [echart21_data[16], echart21_data[12], echart21_data[8], echart21_data[4], echart21_data[0]];
      let PRBicycle_OD_option2 = {
        title: {
          text: '车站锁位使用率 TOP 5',
          left: 20,
          textStyle: {
            fontSize: 18,
            fontWeight: 500,
            color: 'white'
          },
          top: 12
        },

        xAxis: [{
          show: false,
        },
          //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
          {
            show: false,
          }
        ],
        yAxis: {
          type: 'category',
          axisLabel: {
            show: false, //让Y轴数据不显示
          },
          itemStyle: {

          },
          axisTick: {
            show: false, //隐藏Y轴刻度
          },
          axisLine: {
            show: false, //隐藏Y轴线段
          },
          data: city,
        },
        series: [
          //背景色--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0.5)'
              },
            },
            z:1,
            data: grayBar,
          },
          //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            max: 1,
            color: new graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#19344B'
            }, {
              offset: 1,
              color: '#4AB3DF'
            }]),

            itemStyle: {
              normal: {
                barBorderRadius: 20, //统计条弧度
              },
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff', //百分比颜色
                },
                position: 'inside',
                //百分比格式
                formatter: function(data) {
                  return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                },
              }
            },
            labelLine: {
              show: false,
            },
            z:2,
            data: baifenbi,
          },
          //数据条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: 'rgba(22,203,115,0.05)'
              },
            },
            label: {
              normal: {
                show: true,
                //label 的position位置可以是top bottom left,right,也可以是固定值
                //在这里需要上下统一对齐,所以用固定值
                position: [0, '-100%'],
                rich: { //富文本
                  black: { //自定义颜色
                    color: 'white',
                  },
                  /*              start2: {
                                    backgroundColor: { //这里可以添加你想自定义的图片
                                        image: uploadedDataURL2,
                                    },
                                },
                                start1: {
                                    backgroundColor: {
                                        image: uploadedDataURL1,
                                    }
                                },*/
                  green: {
                    color: '#91c7ae',
                  },
                  yellow: {
                    color: 'yellow',
                  },
                },
                formatter: function(data) {
                  //富文本固定格式{colorName|这里填你想要写的内容}
                  return paiming[data.dataIndex] == 1 ? '{start1|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总量:}{yellow|' + zongjine[data.dataIndex] +'辆'+ '}{black|;使用中:}' + '{green|' + fenpeijine[data.dataIndex] + '辆}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总量:}{yellow|' + zongjine[data.dataIndex] +'辆'+ '}{black|;使用中:}' + '{green|' + fenpeijine[data.dataIndex] + '辆}';

                },
              }
            },
            data: zongjine
          }

        ]
      };
      PRBicycle_OD_myChart2.setOption(PRBicycle_OD_option2,true);
      //此处为点击事件预留，因点击事件迁移后存在未报错bug，暂时注释保留后续再修复
      /*PRBicycle_OD_myChart2.on('click', function(param) {
        let echart21_sitename = param.name;
        let marker_group=group;
        let site_NAME2=nameGroup;
        let site_NUMBER2=numGroup
        //缩放并平移到相关位置
        switch(echart21_sitename){
          case site_NAME2[0]:let hhb = map.flyTo([marker_group[site_NUMBER2[0]]._latlng.lat, marker_group[site_NUMBER2[0]]._latlng.lng],13);
            //打开相关覆盖物弹出框
            marker_group[site_NUMBER2[0]].openPopup();//bug：此处点击弹出框为空
            break;
          case site_NAME2[1]:let hhb1 = map.flyTo([marker_group[site_NUMBER2[1]]._latlng.lat, marker_group[site_NUMBER2[1]]._latlng.lng],13);
            //打开相关覆盖物弹出框
            marker_group[site_NUMBER2[1]].openPopup();
            break;
          case site_NAME2[2]:let hhb2 = map.flyTo([marker_group[site_NUMBER2[2]]._latlng.lat, marker_group[site_NUMBER2[2]]._latlng.lng],13);
            //打开相关覆盖物弹出框
            marker_group[site_NUMBER2[2]].openPopup();
            break;
          case site_NAME2[3]:let hhb3 = map.flyTo([marker_group[site_NUMBER2[3]]._latlng.lat, marker_group[site_NUMBER2[3]]._latlng.lng],13);
            //打开相关覆盖物弹出框
            marker_group[site_NUMBER2[3]].openPopup();
            break;
          case site_NAME2[4]:let hhb4 = map.flyTo([marker_group[site_NUMBER2[4]]._latlng.lat, marker_group[site_NUMBER2[4]]._latlng.lng],13);
            //打开相关覆盖物弹出框
            marker_group[site_NUMBER2[4]].openPopup();
            break;
        }

      });*/
    },
    PRBicycle_OD_echart22(data1){
      let PRBicycle_OD_myChart3 = echarts.init(document.getElementById('chordChart'));
      let echart22_data=data1
      let baifenbi = [echart22_data[19], echart22_data[15], echart22_data[11], echart22_data[7], echart22_data[3]];
      let grayBar = [1, 1, 1, 1, 1];
      let paiming = [5, 4, 3, 2, 1];
      let zongjine = [echart22_data[17], echart22_data[13], echart22_data[9], echart22_data[5], echart22_data[1]];
      let fenpeijine = [echart22_data[18],echart22_data[14],echart22_data[10],echart22_data[6],echart22_data[2]];
      let city = [echart22_data[16], echart22_data[12], echart22_data[8], echart22_data[4], echart22_data[0]];
      let PRBicycle_OD_option3 = {
        title: {
          text: '车站锁位使用率 BOTTOM 5',
          left: 20,
          textStyle: {
            fontSize: 18,
            fontWeight: 500,
            color: 'white'
          },
          top: 12
        },

        xAxis: [{
          show: false,
        },
          //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
          {
            show: false,
          }
        ],
        yAxis: {
          type: 'category',
          axisLabel: {
            show: false, //让Y轴数据不显示
          },
          itemStyle: {

          },
          axisTick: {
            show: false, //隐藏Y轴刻度
          },
          axisLine: {
            show: false, //隐藏Y轴线段
          },
          data: city,
        },
        series: [
          //背景色--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0.5)'
              },
            },
            z:1,
            data: grayBar,
          },
          //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            color: new graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#689EA9'
            }, {
              offset: 1,
              color: '#92C5B0'
            }]),

            itemStyle: {
              normal: {
                barBorderRadius: 20, //统计条弧度
              },
            },
            max: 1,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff', //百分比颜色
                },
                position: 'inside',
                //百分比格式
                formatter: function(data) {
                  return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                },
              }
            },
            labelLine: {
              show: false,
            },
            z:2,
            data: baifenbi,
          },
          //数据条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '25%', //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: 'rgba(22,203,115,0.05)'
              },
            },
            label: {
              normal: {
                show: true,
                //label 的position位置可以是top bottom left,right,也可以是固定值
                //在这里需要上下统一对齐,所以用固定值
                position: [0, '-100%'],
                rich: { //富文本
                  black: { //自定义颜色
                    color: 'white',
                  },
                  /*               start2: {
                                     backgroundColor: { //这里可以添加你想自定义的图片
                                         image: uploadedDataURL2,
                                     },
                                 },
                                 start1: {
                                     backgroundColor: {
                                         image: uploadedDataURL1,
                                     }
                                 },*/
                  green: {
                    color: '#91c7ae',
                  },
                  yellow: {
                    color: 'yellow',
                  },
                },
                formatter: function(data) {
                  //富文本固定格式{colorName|这里填你想要写的内容}
                  return paiming[data.dataIndex] == 1 ? '{start1|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总量:}{yellow|' + zongjine[data.dataIndex] +'辆'+ '}{black|;使用中:}' + '{green|' + fenpeijine[data.dataIndex] + '辆}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总量:}{yellow|' + zongjine[data.dataIndex] +'辆'+ '}{black|;使用中:}' + '{green|' + fenpeijine[data.dataIndex] + '辆}';

                },
              }
            },
            data: zongjine
          }

        ]
      };
      PRBicycle_OD_myChart3.setOption(PRBicycle_OD_option3,true);
    }
  },
  mounted() {
    console.log(this.data1)
    this.PRBicycle_OD_echart21(this.data1,this.map,this.mapgroup,this.siteName,this.numberGroup)
    this.PRBicycle_OD_echart22(this.data2)
  }
}
</script>

<style scoped>
#echartsBox{
  position: absolute;
  height: 100%;
  width:100%;
}
#chordChart2{
  position: relative;
  top:1%;
  left:6%;
  height: 40%;
  width: 80%;
  border:15px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 45 stretch;
}
#chordChart{
  position: relative;
  top:3%;
  height: 40%;
  width: 80%;
  left:6%;
  border:15px solid transparent;
  -webkit-border-image: url("../../../assets/image/public_resource/border_new.png") 45 stretch;
}

</style>
