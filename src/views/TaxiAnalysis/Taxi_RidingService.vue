/**
* 李泰增
* 2021年3月3日
*
*/
<template>
  <div id="app" style="height:100%;width:100%;">
    <div ref="map" id="main" style="height:100%;width:100%; "></div>
    <div id="legend"><img src="../../assets/image/TaxiAnalysis/legend.png" ></div>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import {request} from "../../network/request";
var Taxi_RidingService_data=[];
var Taxi_RidingService_data1=[];
var Taxi_RidingService_data2=[];
var Taxi_RidingService_data3=[];
var Taxi_RidingService_data4=[];
var Taxi_RidingService_data5=[];
var Taxi_RidingService_data6=[];
var Taxi_RidingService_data7=[];
var Taxi_RidingService_data8=[];
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
    request({
      url:'TraSysC/Taxi/getData',
      method:'get'
    }).then(res=>{

      for (var i=1;i<res.data.msg.length;i++) { //给数据赋值用来筛选
        if(res.data.msg[i-1].ID!=res.data.msg[i].ID)//获取每个id最后一条数据
        {
          Taxi_RidingService_data.push(res.data.msg[i]);
        }
      }
      for (var j = 0; j < Taxi_RidingService_data.length; j++) {
        var Taxitime =Taxi_RidingService_data[j].DATE;//获取时间用来以每15分钟分组
        var timeLevel = parseInt(Taxitime.substring(8,14)); //获取8-14位进行比较分组
        if (timeLevel>=70000&&timeLevel<71500) { //7：00-7：15
          Taxi_RidingService_data1.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=71500&&timeLevel<73000) {//7：15-7：30
          Taxi_RidingService_data2.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=73000&&timeLevel<74500) {//7：30-7：45
          Taxi_RidingService_data3.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=74500&&timeLevel<80000) {//7：45-8：00
          Taxi_RidingService_data4.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=80000&&timeLevel<81500) {//8：00-8：15
          Taxi_RidingService_data5.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=81500&&timeLevel<83000) {//8：15-8：30
          Taxi_RidingService_data6.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=83000&&timeLevel<84500) {//8：30-8：45
          Taxi_RidingService_data7.push(Taxi_RidingService_data[j]);
        }
        else if (timeLevel>=84500&&timeLevel<90000) {//8：45-9：00
          Taxi_RidingService_data8.push(Taxi_RidingService_data[j]);
        }

      }

      this.init()
    })
  },
  methods :{
    init(){
      let mapData = {
        title:'出租车服务能力热力图',
        mapColor:'#5c9ac1',   //地图填充颜色
        borderColor:'#5278a7',//地图边框颜色
        shadowColor: '#5174a4', //阴影颜色
        shadowBlur: 1, //地图阴影
        setIntervalTime:3000,  //默认刷新时间3秒
      } ;

      var converData = function (data) {
        var res = [];
        var val=[];
        for (var i = 0; i < data.length; i++) { //遍历获取的所有数据
          val.push([data[i].LNG,data[i].LAT,1]) //赋值经纬度
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
            center: [116.403,39.923],
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
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: { //定义 在选中范围中 的视觉元素
              color: ['rgb(000,000,255)', 'rgb(000,255,255)', 'rgb(000,255,000)','rgb(255,255,000)','rgb(255,000,000)'],
            },
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
            data: ['7：00-7：15', '7：15-7：30', '7：30-7：45', '7：45-8：00', '8：00-8：15', '8：15-8：30','8：30-8：45', '8：45-9：00']
          },
        },

        options:[
          {series: [{data: converData(Taxi_RidingService_data1)}]},
          {series: [{data: converData(Taxi_RidingService_data2)}]},
          {series: [{data: converData(Taxi_RidingService_data3)}]},
          {series: [{data: converData(Taxi_RidingService_data4)}]},
          {series: [{data: converData(Taxi_RidingService_data5)}]},
          {series: [{data: converData(Taxi_RidingService_data6)}]},
          {series: [{data: converData(Taxi_RidingService_data7)}]},
          {series: [{data: converData(Taxi_RidingService_data8)}]},
        ]

      }
      map.setOption(option)
      let bmap = map.getModel().getComponent('bmap').getBMap()
      bmap.setMapStyle(this.mapStyle)





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
#legend{
  right: 3%;
  bottom: 5%;
  position: absolute;
}
</style>
