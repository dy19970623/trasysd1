<!--创建日期：2021.2.27-->
<!--姓名：高翔森-->
<!--功能：公交高峰时段展示-->
<template>
  <div id="app" style="height:100%;width:100%;">
    <div ref="line930" id="line930"> </div>
    <div ref="map" id="main" style="height:100%;width:100%; "></div>

  </div>
</template>

<script>
  import 'echarts/extension/bmap/bmap'
  import {line930,dengLiangByLine} from '../../assets/js/BusAnalysis/line930'
  import {a0715,a0730,a0745,a0800,a0815,a0830,a0845,a0900,a1715,a1730,a1745,a1800,a1815,a1830,a1845,a1900} from '../../assets/js/BusAnalysis/top20'

    export default {
      data(){
        return {
          mapStyle: {
            styleJson:[{
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
          },
        }
      },
      mounted () {
        this.init()

      },
      methods :{
         init(){
           let carTime=3;
           let mapData = {
             title:'北京市公交高峰时段TOP20站位分布情况',
             mapColor:'#5c9ac1',   //地图填充颜色
             borderColor:'#5278a7',//地图边框颜色
             shadowColor: '#5174a4', //阴影颜色
             shadowBlur: 1, //地图阴影
             setIntervalTime:3000,  //默认刷新时间3秒
           } ;
            function busdata(data){
             let res=[];
             let a={};
             for (let i = 0; i < data.length; i++) {
               a={
                 name:data[i].siteName,
                 value:[data[i].lng,data[i].lat,data[i].dengLiang]
               };
               res.push(a);
               a={};
             };
             return res;
           };
          //************************************* 渲染地图TOP20 ***********************************************
           const  map = this.$echarts.init(this.$refs.map)
           const option = {
            baseOption : {
             bmap: {
               center: [116.403, 39.923],
               zoom: 11,
               roam: true,
             }, //bmap

             title: {
               text: mapData.title,
               right: '20px',
               top: 26,
               textStyle: {
                 fontSize: 23,
                 color: '#feb64d'
               }
             },
              tooltip:{
               trigger:'item',
               formatter:function(val){
                 var res='';
                 res='登量：'+val.value[2]+'人';//tooltip单位
                 return res
               }
             },
              roam: true,
              itemStyle: {
               normal: {
                 areaColor: mapData.mapColor,
                 borderColor: mapData.borderColor,
                 shadowColor: mapData.shadowColor,
                 shadowBlur: mapData.shadowBlur
               },
               emphasis: {
                 areaColor: mapData.mapColor,
               }
             },

              series:[{
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',
                  //data: busdata(a0715),
                  label: {
                    normal: {
                      color: '#f4e925',
                      formatter: '{b0}',
                      position: 'right',
                      show: true
                    }
                  },
                  progressive:100000,
                  progressiveThreshold:100000,
                  symbolSize:function (val) {
                    return val[2] / 10;
                  },
                  showEffectOn: 'render',
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: false,
                  itemStyle: {
                    normal: {

                      color: '#f4e925',
                      shadowBlur: 10,
                      shadowColor: '#333'
                    }
                  },
                  zlevel: 3
                }],

               timeline: {
                      axisType: 'category',
                      autoPlay: true,
                      playInterval: 2000,
                      bottom:'45px',
                      lineStyle:{
                        color:'#6495ed',
                        shadowColor:'#a9a9a9',
                        labelColor:'#c0c0c0'
                      },
                      label:{
                        normal:{color:"#fffdd0"},
                        emphasis:{color:"#fffdd0"}
                      },
                      itemStyle:{
                        normal:{
                          color:'#00008b',
                          shadowColor:'#a9a9a9',
                        },
                        emphasis:{
                          color:'#ffebcd'
                        }
                      },
                      checkpointStyle:{
                        color:'#6495ed',
                        borderColor:'#ffebcd',
                        borderWidth:1
                      },
                      controlStyle:{
                        normal:{
                          color:'#6495ed',
                          borderColor:'#6495ed'
                        },
                        emphasis:{
                          color:'#4b0082',
                          borderColor:'#ffebcd'
                        }
                      },
                      data: ['7:15','7:30','7:45','8:00','8:15','8:30','8:45','9:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00']
                    },
                 },

               options:[
               {series: [{data: busdata(a0715)}]},
               {series: [{data: busdata(a0730)}]},
               {series: [{data: busdata(a0745)}]},
               {series: [{data: busdata(a0800)}]},
               {series: [{data: busdata(a0815)}]},
               {series: [{data: busdata(a0830)}]},
               {series: [{data: busdata(a0845)}]},
               {series: [{data: busdata(a0900)}]},
               {series: [{data: busdata(a1715)}]},
               {series: [{data: busdata(a1730)}]},
               {series: [{data: busdata(a1745)}]},
               {series: [{data: busdata(a1800)}]},
               {series: [{data: busdata(a1815)}]},
               {series: [{data: busdata(a1830)}]},
               {series: [{data: busdata(a1845)}]},
               {series: [{data: busdata(a1900)}]}
              ],

           }
           map.setOption(option)
           let bmap = map.getModel().getComponent('bmap').getBMap()
           bmap.setMapStyle(this.mapStyle)



           //****************************    930路公交日历图  *************************************************
           const myChart = this.$echarts.init(this.$refs.line930);
           let hours = ['4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00',
             '11:00', '12:00', '13:00','14:00','15:00','16:00',
             '17:00', '18:00', '19:00', '20:00', '21:00'];
           let days = ['三河总站', '三河农机驾校', '刘里村','三河地税局', '安居小区', '城建新村','金都大酒店', '京东第一集', '三河市政府','滨河院', '建兴市场', '鼎盛街','西关环岛', '李旗庄', '直属库','煤矿路口', '大厂温泉度假村', '耀华佳苑','燕北畜牧机械厂', '夏垫', '大厂福喜公司','三河东柳村', '天子庄园', '运河源建材城','燕郊住达集团', '燕郊食品城', '燕郊印刷城','燕郊火车站口', '燕郊迎宾路口', '燕郊行宫花园','燕灵路口', '兴达广场小区', '结研所','北京物资学院南站', '郎家园'];

               //提取930路公交的站点登量信息
           for (let i = 0; i < dengLiangByLine.length; i++) {
             dengLiangByLine[i].siteName="A";
             for (let j = 0; j < line930.length; j++) {
               if(parseInt(dengLiangByLine[i].siteNumber)==line930[j].siteNumber){
                 dengLiangByLine[i].siteName=line930[j].site;
               }
             };
           };

               //站点合并站位
           let unquireData=[];
           unquireData.push(dengLiangByLine[0]);
           for(let i=1;i<dengLiangByLine.length;i++) {
             let flag=false;
             for(let j=0;j<unquireData.length;j++) {
               if(dengLiangByLine[i].siteName.toString()==unquireData[j].siteName.toString()&&dengLiangByLine[i].upTime==unquireData[j].upTime){
                 unquireData[j].dengLiang=(parseInt(unquireData[j].dengLiang)+parseInt(dengLiangByLine[i].dengLiang)).toString();
                 flag=true;
               }
             };
             if(!flag){
               unquireData.push(dengLiangByLine[i]);
             }
           }

           let dlldata=[];
           for (let i = 0; i < unquireData.length; i++) {
             dlldata.push([unquireData[i].upTime-2016083104,unquireData[i].siteNumber-1,parseInt(unquireData[i].dengLiang)])
           }

           const option1 = {
             title: {
               text:'930路各站点全天登量情况',
               left: '120px',
               top: '10px',
               textStyle: {
                 fontSize: 20,
                 color: 'white'
               }
             },
             tooltip: {
               position: 'top',
               trigger:'item',
               formatter:function(val){
                 var res='';
                 res='时间：'+[val.value[0]+4]+':00'+'</br>'+'登量：'+val.value[2]+'人';//单位
                 return res
               }
             },
             animation: false,
             grid: {
               height: '80%',
               y: '8%',
               x:'19%'
             },
             xAxis: {
               type: 'category',
               name:'时间',
               data: hours,
               nameTextStyle:{
                 color:"white",
                 fontSize:'70%'
               },
               splitArea: {
                 show: true
               },
               axisLine: {
                 lineStyle: {
                   color: "white"
                 }
               }
             },
             yAxis: {
               type: 'category',
               name: '登量',
               nameTextStyle:{
                 color:"white",
                 fontSize:'70%'
               },
               axisLine: {
                 lineStyle: {
                   color: "white"
                 }
               },
               data: days,
               splitArea: {
                 show: true
               }
             },
             visualMap: {
               min: 0,
               max: 150,
               calculable: true,
               textStyle:{
                 color:"white",
                 //color:'#0000',
                 fontSize:'100px'
               },
               orient: 'horizontal',
               left: 'center',
               bottom: '3%',
               inRange:{
                 color:['#191970','#1845CD','#436EEE','#1E90FF','#1E90FF'], //图元着色
               }
             },
             series: [{
               name: 'Punch Card',
               type: 'heatmap',
               data: dlldata,
               label: {
                 normal: {
                   show: true
                 }
               },
               itemStyle: {
                 emphasis: {
                   shadowBlur: 10,
                   shadowColor: 'rgba(0, 0, 0, 1)',

                 }
               }
             }]
           };
           myChart.setOption(option1);


          },


      }
    }
</script>

<style >
  .BMap_cpyCtrl {
    display: none;
  }

  .anchorBL {
    display: none;
  }
  #line930{
    width:28%;
    height:87%;
    position:absolute;
    top:0%;
    left:2%;
    z-index: 999;
    background-color: rgba(0,0,0,0.7);
  }
</style>
