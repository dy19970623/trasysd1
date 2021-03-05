/**
  * 邹瑞萌
  * 2021年2月25日
   出租车格网
  *
 */
<template>
<div id="TaxiGrid">
  <div ref="map" class="map"></div></div>
</template>
<script>
import echarts from 'echarts'
import TaxiGridData from '../../assets/js/TaxiGrid/TaxiGrid.json' // 需要在地图上绘制的数据集
import 'echarts/extension/bmap/bmap'

export default {
  name: 'TaxiGrid',
  data() {
    return {
      mapStyle: {
         styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#0f0815'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#0f0815'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#999999'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': 'rgba(0,0,0,0)'
                }
            }]
      }
    };
  },
  computed: {},
  mounted () {
    this.getbmap();
  },
  methods: {
    getbmap() {
    let COLORS = ["#DCF0FF","#BBE1FD","#8FCAF4", "#58A9E4", "#0D8DE9", "#0D6EB4", "#00528D","#023356"];

    let lngExtent = [116.06, 116.72];	//经纬度的范围
		let latExtent = [39.7, 40.2];
		let cellCount = [50, 50];			//设置经纬度范围内网格的个数，南北方向50个，东西方向50个
		let cellSizeCoord = [				//单个网格的经度范围和纬度范围
			(lngExtent[1] - lngExtent[0]) / cellCount[0],
			(latExtent[1] - latExtent[0]) / cellCount[1]
		];

    //网格之间的间距为0
    let gapSize = 0;
    //计算好的数组，前两位为列号、行号（左下到右上），第四位是网格范围内的OD点的个数，第三位是给网格赋颜色用的编码，为0-7，代表8种颜色
		let data=TaxiGridData;
    //项目渲染器，定义网格的渲染方式及显示效果
    function renderItem(params, api) {
			let context = params.context;
			let lngIndex = api.value(0);
			let latIndex = api.value(1);
			let coordLeftBottom = [		//获取左下角经纬度
				(lngExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6),
				(latExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6)
			];

			let coordRightTop = [	//获取右上角经纬度
				(lngExtent[0] + (lngIndex + 1) * cellSizeCoord[0]).toFixed(6),//四舍六入五成双，结果保留六位有效数字
				(latExtent[0] + (latIndex + 1) * cellSizeCoord[1]).toFixed(6)
			];

		  let pointLeftBottom = getCoord(params, api, lngIndex, latIndex);//像素坐标
		  let pointRightTop = getCoord(params, api, lngIndex + 1, latIndex + 1);
			//生成一个矩形，像素坐标为左下角x和y，宽度和高度是右上角点与左下角点的像素差
			return {
				type: 'rect',
				shape: {
					x: pointLeftBottom[0],
					y: pointLeftBottom[1],
					width: pointRightTop[0] - pointLeftBottom[0],
					height: pointRightTop[1] - pointLeftBottom[1]
				},
				style: api.style({
					stroke: 'rgba(0,0,0,0.1)'
				}),
				styleEmphasis: api.styleEmphasis()
			};

		}
    function getCoord(params, api, lngIndex, latIndex) {
			let coords = params.context.coords || (params.context.coords = []);
			let key = lngIndex + '-' + latIndex;


			return coords[key] || (coords[key] = api.coord([
				(lngExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6),
				(latExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6)
			]));
		}


    let option = {
      tooltip: {},
			legend:{right:'5%'},
			visualMap: {
				type: 'piecewise',//定义为分段型
				inverse: true,//是否反转 visualMap 组件
				top: '70%',	//组件距离容器上侧的距离
				right: '2%',
				pieces: [
				{
					value: 0,label:'0-5', color: COLORS[7]
				},
				{
					value: 1,label:'5-100', color: COLORS[6]
				}, {
					value: 2,label:'100-500', color: COLORS[5]
				}, {
					value: 3,label:'500-1000', color: COLORS[4]
				}, {
					value: 4,label:'1000-1500', color: COLORS[3]
				}, {
					value: 5,label:'1500-2000', color: COLORS[2]
				},{
					value: 6,label:'2000-3000', color: COLORS[1]
				},{
					value: 7,label:'3000以上', color: COLORS[0]
				}],
				borderColor: '#ccc',
				borderWidth: 2,
				backgroundColor: '#eee',
				dimension: 2,
				inRange: {
					color: COLORS,
					opacity: 0.7
				}
			},

      series: [
			{
				type: 'custom',
				coordinateSystem: 'bmap',//坐标系统采用下面定义的bmap
				renderItem: renderItem,
				animation: false,
				itemStyle: {
					emphasis: {
						color: 'yellow'
					}
				},
				encode: {
					tooltip: 3,
				},
				data: data
			  }
		  ],
      bmap: {//定义坐标以及地图显示样式
				center: [116.46, 39.92],
				zoom: 12,
				roam: true,
				mapStyle: {

        }
			}

    }
    let map = echarts.init(this.$refs.map)
    map.setOption(option) // 获取到的百度地图对象bmap适用于所有的百度地图的接口
    let bmap = map.getModel().getComponent('bmap').getBMap()
    bmap.addControl(new BMap.MapTypeControl())
    bmap.setMapStyle(this.mapStyle)
    }
  },

}

</script>

<style>
body, html,.map {width:100%;height:100%;overflow: hidden;margin:0;font-family:"微软雅黑";position:absolute;}
.anchorBL{
  display:none
}
</style>
