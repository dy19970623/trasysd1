<template>
  <div id="app">
    <Index></Index>
<!--    <PRBicycle_Shared></PRBicycle_Shared>-->
<!--    <Park_Flow></Park_Flow>-->
<!--    <Taxi_Distribution></Taxi_Distribution>-->
<!--    <Taxi_ODLine></Taxi_ODLine>-->
  </div>
</template>

<script>
   //import Taxi_ODLine from "./views/TaxiAnalysis/Taxi_ODLine";
   import Index from "./views/Index";
   //import PRBicycle_Shared from "./views/PublicBicycle/PRBicycle_Shared";
   //import Park_Flow from "./views/ParkAnalysis/Park_Flow";
   //import Taxi_Distribution from "./views/TaxiAnalysis/Taxi_Distribution";
export default {
  name: 'App',
  components:{
    //Taxi_ODLine
    //Taxi_Distribution
    //Park_Flow
    //PRBicycle_OD
     ////PRBicycle_Shared
     // Park_Flow
       Index
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
