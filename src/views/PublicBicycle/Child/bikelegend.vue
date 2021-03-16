<template>
<div>
  <div id="legend">
    <div id="legendbody">
      <div id="leg1">
        <div id="img1" class="imgdiv"><img class="bike_img" style="margin: 4px;" src="../../../assets/image/PublicBicycle/point_blue.svg"></div>
        <div id="txt1"  class="bike_legendtxt1" style="margin-top: 4px;"><span>使用情况前五名</span></div>
      </div>
      <div id="leg2">
        <div id="img2" class="imgdiv"><img class="bike_img" src="../../../assets/image/PublicBicycle/point_yellow.svg"></div>
        <div id="txt2" class="bike_legendtxt2" style="margin-top: 10px;"> <span>使用情况后五名</span></div>
      </div>
      <div id="leg3" class="imgdiv">
        <div><img class="bike_img" src="../../../assets/image/PublicBicycle/point1.svg"></div>
        <div id="txt3" class="bike_legendtxt3" style="margin-top: 10px;"> <span>其他</span></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "bikelegend"
}
</script>

<style scoped>
#legend{
  position: absolute;
  height: 13%;
  width: 10%;
  left: 88%;
  bottom: 5%;
  z-index: 600;


}
.bike_img{
  height: 30px;
  width: 30px;
}
.bike_legendtxt1{
  position: absolute;
  top:6%;
  left:34%;
  float: right;
  font-size: 15px;
}
.bike_legendtxt2{
  position: absolute;
  top:36%;
  left:34%;
  float: right;
  font-size: 15px;
}
.bike_legendtxt3{
  position: absolute;
  top:69%;
  left:34%;
  float: right;
  font-size: 15px;
}
.imgdiv{
  width: 50%;
}
#legendbody{
  margin-left: -5px;
  margin-right: -12px;
  color:white;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(40, 176, 213, 1);
  background-color: rgba(0,0,0,0.7);
}

</style>
