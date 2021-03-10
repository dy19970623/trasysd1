<template>
    <div id="map"  style="width: 100%;height: 100%"></div>
</template>

<script>
    import 'echarts/extension/bmap/bmap'
    import {data} from "../../assets/js/BusAnalysis/lines-bus";
    export default {
        name: "Bus_Track3",
      data(){
       return{
         mapStyle: {
           'styleJson': [{
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
       }
      },
      mounted() {
        var app = {};
        let echarts =require('echarts')
        var chartDom = document.getElementById('map');
        var myChart = echarts.init(chartDom);
        var option;

        var hStep = 300 / (data.length - 1);
        var busLines = [].concat.apply([], data.map(function (busLine, idx) {
          var prevPt;
          var points = [];
          for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
              pt = [
                prevPt[0] + pt[0],
                prevPt[1] + pt[1]
              ];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
          }
          return {
            coords: points,
            lineStyle: {
              normal: {
                color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
              }
            }
          };
        }));

        myChart.setOption(
          option = {
          bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,

          },
          series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
              // color: '#c23531',
              // color: 'rgb(200, 35, 45)',
              opacity: 0.2,
              width: 1.5
            },
            progressiveThreshold: 500,
            progressive: 200
          }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            lineStyle: {
              width: 0
            },
            effect: {
              constantSpeed: 20,
              show: true,
              trailLength: 0.1,
              symbolSize: 1.5
            },
            zlevel: 1
          }]
        });
        option && myChart.setOption(option);
        let bmap = myChart.getModel().getComponent('bmap').getBMap()
        bmap.setMapStyle(this.mapStyle)

      },
      methods :{

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
</style>
