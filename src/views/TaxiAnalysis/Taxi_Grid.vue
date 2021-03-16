/**
  * 邹瑞萌
  * 2021年2月25日
   出租车格网
  *
 */
<template>
<div id="TaxiGrid">
  <div ref="map" class="map"></div>
</div>
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
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#070d22ff"
    }
}, {
    "featureType": "manmade",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "manmade",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaystation",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "education",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspots",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medical",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "medical",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": {
        "color": "#113549ff",
        "visibility": "on"
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "color": "#123a4bff",
        "visibility": "off"
    }
}, {
    "featureType": "entertainment",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "shopping",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "transportation",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "playground",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#202f4aff"
    }
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": {
        "weight": 1.2
    }
}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#3a507700"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "nationalwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "highwaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "provincialwaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "scenicspotslabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "tertiarywaysign",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "town",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "town",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "city",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "estate",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "village",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "district",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#d1c7c7ff",
        "weight": 30
    }
}, {
    "featureType": "district",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": 0
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": 0
    }
}, {
    "featureType": "city",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#cabebeff"
    }
}, {
    "featureType": "subwaylabel",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "roadarrow",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "footbridge",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "crosswalk",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "underpass",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "parkingspace",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 1.2
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "13"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "14"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "15"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "16"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "17"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "18"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "19"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "20"
    }
}, {
    "featureType": "fourlevelway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "21"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "13"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "14"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "15"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "16"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "17"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "18"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "19"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "20"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "21"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "13"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "14"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "15"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "16"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "17"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "18"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "19"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "20"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "21"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "13"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "14"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "15"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "16"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "17"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "18"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "19"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "20"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "21"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "13"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "14"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "15"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "16"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "17"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "18"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "19"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "20"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "13,21",
        "level": "21"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "11"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "12"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "13"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "14"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "15"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "16"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "17"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "18"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "19"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "20"
    }
}, {
    "featureType": "arterial",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "21"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "11"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "12"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "13"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "14"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "15"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "16"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "17"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "18"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "19"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "20"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "21"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "11"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "12"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "13"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "14"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "15"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "16"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "17"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "18"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "19"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "20"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "11,21",
        "level": "21"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 1.2
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "12"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "13"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "14"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "15"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "16"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "17"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "18"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "19"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "20"
    }
}, {
    "featureType": "provincialway",
    "stylers": {
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "21"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "12"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "13"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "14"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "15"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "16"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "17"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "18"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "20"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "21"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "12"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "13"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "14"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "15"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "16"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "17"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "18"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "19"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "20"
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels",
    "stylers": {
        "visibility": "off",
        "curZoomRegionId": "0",
        "curZoomRegion": "12,21",
        "level": "21"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 1.2
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "visibility": "on",
        "weight": 1.2
    }
}, {
    "featureType": "transportationlabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#ffffff00",
        "weight": 0
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "nationalway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "provincialway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#ffffff00"
    }
}, {
    "featureType": "fourlevelway",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": 0.2
    }
}, {
    "featureType": "cityhighway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": 0.2
    }
}, {
    "featureType": "provincialway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": 0.2
    }
}, {
    "featureType": "nationalway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": 0.4
    }
}, {
    "featureType": "highway",
    "elementType": "labels.text.stroke",
    "stylers": {
        "weight": 0.2
    }
}, {
    "featureType": "cityhighway",
    "elementType": "geometry",
    "stylers": {
        "weight": 1.2,
        "visibility": "on"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry",
    "stylers": {
        "weight": 1.2,
        "visibility": "on"
    }
}, {
    "featureType": "tertiaryway",
    "elementType": "geometry",
    "stylers": {
        "weight": 1.2,
        "visibility": "on"
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

    let lngExtent = [116.12, 116.78];	//经纬度的范围
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
console.log(data)

    let option = {
      title: {
          text: '出租车乘客OD网格图',
          right: '20px',
          top: 26,
          textStyle: {
            fontSize: 30,
            color: '#feb64d'
          }
        },
			legend:{right:'5%'},
      tooltip: {
	      // trigger: 'item',
	      transitionDuration: 0,
	      formatter: function(station) {
	        return 'OD点：' + station.data[3] +'个';
	      }
	    },
			visualMap: {
				type: 'piecewise',//定义为分段型
				inverse: true,//是否反转 visualMap 组件
				top: '70%',	//组件距离容器上侧的距离
				right: '2%',
				pieces: [
				{
				  gt:0,lte:5,label:'0-5', color: COLORS[7]
				},
				{
					gt:5,lte:100,label:'5-100', color: COLORS[6]
				}, {
					gt:100,lte:500,label:'100-500', color: COLORS[5]
				}, {
					gt:500,lte:1000,label:'500-1000', color: COLORS[4]
				}, {
					gt:1000,lte:1500,label:'1000-1500', color: COLORS[3]
				}, {
					gt:1500,lte:2000,label:'1500-2000', color: COLORS[2]
				},{
					gt:2000,lte:3000,label:'2000-3000', color: COLORS[1]
				},{
					gt:3000,label:'3000以上', color: COLORS[0]
				}],
				borderColor: '#A9A9A9',
				borderWidth: 1.5,
				backgroundColor: 'dimgray',
				dimension: 3,
        textStyle: {
          //图例文字的样式
          color: '#FFF'     //图例文字颜色，大小等配置
          //fontSize: 16
        },
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
    //bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP ]}))// 选择地图类型 (地图,卫星,三维),这里只引用了地图和卫星两种
    bmap.setMapStyle(this.mapStyle)
    }
  },

}

</script>

<style>
.map {width:100%;height:100%;overflow: hidden;margin:0;font-family:"微软雅黑";position:absolute;}
.anchorBL{
  display:none
}
</style>
