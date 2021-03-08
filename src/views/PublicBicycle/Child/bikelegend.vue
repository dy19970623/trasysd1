<template>
<div>
  <div id="legend">
    <div id="legendbody">
      <div id="leg1">
        <div id="img1" class="imgdiv"><img class="bike_img" src="../../../assets/image/PublicBicycle/u2064.png"></div>
        <div id="txt1"  class="bike_legendtxt1"><span>使用情况前五名</span></div>
      </div>
      <div id="leg2">
        <div id="img2" class="imgdiv"><img class="bike_img" src="../../../assets/image/PublicBicycle/u2020.png"></div>
        <div id="txt2" class="bike_legendtxt2"> <span>使用情况后五名</span></div>
      </div>
      <div id="leg3" class="imgdiv">
        <div><img class="bike_img" src="../../../assets/image/PublicBicycle/u2026.png"></div>
        <div id="txt3" class="bike_legendtxt3"> <span>其他</span></div>
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
  height: 10%;
  width: 10%;
  left: 90%;
  bottom: 10%;
  z-index: 600;

}
.bike_img{
  height: 50px;
  width: 50px;
}
.bike_legendtxt1{
  position: absolute;
  top:12%;
  left:30%;
  float: right;
  font-size: 15px;
}
.bike_legendtxt2{
  position: absolute;
  top:70%;
  left:30%;
  float: right;
  font-size: 15px;
}
.bike_legendtxt3{
  position: absolute;
  top:126%;
  left:30%;
  float: right;
  font-size: 15px;
}
.imgdiv{
  width: 50%;
}
#legendbody{

  color:white;

}

</style>
