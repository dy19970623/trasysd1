/**
* 李泰增
* 2021年3月3日
*
*/
<template>
  <div id="map" style="height:100%; width:100%">
    <div ref="map" id="Bmap" ></div>
    <div ref="TaxiDPoint_container" id="chart" ></div>
    <div id="legend"><img src="../../assets/image/TaxiAnalysis/legend.png" ></div>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import {CarDdian1111} from "../../assets/js/TaxiAnalysis/Ddata1"
import { graphic } from 'echarts/lib/export'
export default {
  data() {
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
    };
  },
  mounted() {
    this.initmap();

  },
  methods: {
    initmap(){

      var ODdian1={//0-3点
        max: 0.5,
        data:[]

      }
      var ODdian2={//4-7点
        max: 0.5,
        data:[]

      }
      var ODdian3={//8-11点
        max: 0.5,
        data:[]

      }
      var ODdian4={//12-15点
        max: 0.5,
        data:[]

      }
      var ODdian5={//16-19点
        max: 0.5,
        data:[]

      }
      var ODdian6={//20-23点
        max: 0.5,
        data:[]

      }
      for(var i=0;i<CarDdian1111.data.length;i++){
        var a=parseInt(CarDdian1111.data[i].time);

        switch(a) {
          case 0:case 1:case 2:case 3:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian1.data.push(base);
            break;
          case 4:case 5:case 6:case 7:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian2.data.push(base);
            break;
          case 8:case 9:case 10:case 11:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian3.data.push(base);
            break;
          case 12:case 13:case 14:case 15:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian4.data.push(base);
            break;
          case 16:case 17:case 18:case 19:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian5.data.push(base);
            break;
          default:
            var base={};
            base.lng= CarDdian1111.data[i].lng;
            base.lat= CarDdian1111.data[i].lat;
            ODdian6.data.push(base);
            break;
        }
      }

      let mapData = {
        title:' ',
        mapColor:'#5c9ac1',   //地图填充颜色
        borderColor:'#5278a7',//地图边框颜色
        shadowColor: '#5174a4', //阴影颜色
        shadowBlur: 1, //地图阴影
        setIntervalTime:3000,  //默认刷新时间3秒
      } ;
      //读取文件


      var converData = function (data) {
        var res = [];
        var val=[];
        for (var i = 0; i < data.length; i++) { //遍历获取的所有数据
          val.push([data[i].lng,data[i].lat,15]) //赋值经纬度
          res.push({
            value: val[i]
          });
        };
        return res;
      };

      const  map = this.$echarts.init(this.$refs.map)
      const option = {
        baseOption : {
          bmap: {
            center: [116.403, 39.923],
            zoom: 12,
            roam: true,
          }, //bmap

          title: {
            text: mapData.title,
            right: '20px',
            top: 26,
            textStyle: {
              fontSize: 30,
              color: '#feb64d'
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
          visualMap: {
            show: false,
            right:"2%",
            bottom: "5%",
            calculable: false,
            text: ["高", "低"],
            min: 0,
            max: 5,
            seriesIndex: 0,
            inRange: { //定义 在选中范围中 的视觉元素
              color: ['rgb(000,000,255)', 'rgb(000,255,255)', 'rgb(000,255,000)','rgb(255,255,000)','rgb(255,000,000)'],

            },     textStyle:{

              color:'#fff'
            }
          },
          series:[{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            pointSize: 5,
            blurSize: 6,

          }],

          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
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
            data: ['0-3点', '4-7点', '8-11点', '12-15点', '16-19点','20-23点']
          },
        },

        options:[
          {series: [{data: converData(ODdian1.data)}]},
          {series: [{data: converData(ODdian2.data)}]},
          {series: [{data: converData(ODdian3.data)}]},
          {series: [{data: converData(ODdian4.data)}]},
          {series: [{data: converData(ODdian5.data)}]},
          {series: [{data: converData(ODdian6.data)}]},
        ]

      }
      map.setOption(option)
      let bmap = map.getModel().getComponent('bmap').getBMap()
      bmap.setMapStyle(this.mapStyle)

      const myChart = this.$echarts.init(this.$refs.TaxiDPoint_container);
      var option1 = {
        textStyle:{
          color:'#FFFFFF'
        },
        //timeline基本配置都写在baseoption 中
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            bottom:'3%',
            right:'10%',
            left:'10%',
            playInterval: 3000,
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
            data: ['0-3点', '4-7点', '8-11点', '12-15点', '16-19点','20-23点']
          },
          grid: { containLabel: true },
          xAxis: [{
            axisLabel: {
              interval:0,
              rotate:40
            },
            axisLine: {
              lineStyle: {
                color: "white"
              }
            },
            splitLine:{
              show:false//不显示分隔线
            },
            type: 'category',
            name: '位置',
          }, ],
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "white"
              }
            },
            splitLine:{
              show:false//不显示分隔线
            },
            type: 'value',
            name: '辆'
          },
          series: [
            {
              type: 'line',
            },
          ],
          tooltip: {}
        },
        //变量则写在options中
        options:[

          {
            xAxis: [{
              data: ["复兴路81-1号","西三环南路甲1号","建华南路5号","紫竹院路一号","东直门外小街45号","常青园路","宝钞胡同57号","新兴桥","西城区","复兴门外大街甲1号"]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [167,161,153,150,142,140,130,123,117,110],
                itemStyle: {
                  normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: new graphic.LinearGradient(0, 1, 0,0 , [{
                      offset: 0,
                      color: '#24084d'
                    }, {
                      offset: 1,
                      color: '#2aafb2'
                    }]),

                  }
                },
              },
            ]
          },
          {
            xAxis: [{
              data: ["西三环南路甲1号","复兴路81-1号","西滨河路1号","紫竹院路一号","新兴桥","东城区东二环","东二环","西城区","宝钞胡同57号","学院路40号",]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [267,261,213,201,182,171,130,123,117,110]
              },
            ]
          },
          {
            xAxis: [{
              data: ["复兴门外大街甲1号","建华南路5号","西滨河路1号","丹棱街3号","紫竹院路一号","新兴桥","宝钞胡同57号","东长安街18号","东直门外小街45号","东二环"]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [212,210,183,182,182,180,172,170,165,163]
              },
            ]
          },
          {
            xAxis: [{
              data: ["新兴桥","复兴门外大街甲1号","西滨河路1号","建华南路5号","紫竹院路一号","西三环南路甲1号","东长安街18号","宝钞胡同57号","丹棱街3号-a座","东直门外小街45号"]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [212,210,183,182,182,180,172,170,165,163]
              },
            ]
          },
          {
            xAxis: [{
              data: ["新兴桥","复兴门外大街甲1号","西滨河路1号","建华南路5号","紫竹院路一号","西城区","东长安街18号","复兴路81-1号","丹棱街3号-a座","东直门外小街45号"]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [143,142,140,135,132,130,125,120,118,118]
              },
            ]
          },
          {
            xAxis: [{
              data: ["新兴桥","复兴门外大街甲1号","建华南路5号","东长安街18号","丹棱街3号","西三环南路甲1号","西城区","紫竹院路一号","宝钞胡同57号","西滨河路1号"]
            }],
            title: {
              textStyle:{
                fontSize:20,
                color:'#02C1D7'
              },
              text: '出租车D点聚类分析',
              subtext: '单位:辆'
            },
            series: [
              {
                type:'bar',
                data: [143,142,140,135,132,130,125,120,118,118]
              },
            ]
          },

        ]
      }
      myChart.setOption(option1);




    },

  },
};
</script>

<style >
.BMap_cpyCtrl {
  display: none;
}

.anchorBL {
  display: none;
}
#Bmap {
  height: 100%;
  width: 100%;

}
#chart{
  background: rgba(0, 0, 0, 0.8);
  background-image: url("../../../src/assets/image/TaxiAnalysis/border.png");
  background-size: 100% 100%;
  width:25%;
  height: 45%;
  top: 1%;
  position: absolute;
  z-index:999;
  padding: 30px 15px 5px 25px;;

}
#legend{
  right: 3%;
  bottom: 5%;
  position: absolute;
}
</style>
