<template>
<div>
  <div id="legend">
    <div id="legendtitle">
      <h2>图例</h2>
    </div>
    <div id="legendbody">
      <h3>使用情况排名</h3>
      <img src="../../../assets/image/PublicBicycle/iconyellow.png">
      使用情况前五名
      <img src="../../../assets/image/PublicBicycle/icongreen.png">
      使用情况后五名
      <img src="../../../assets/image/PublicBicycle/icon30.png">
      <span>其他</span>
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
  height: 180px;
  width: 115px;
  left: 5px;
  bottom: 2%;
  z-index: 600;
  background-color: #23386e;
}
img{
  height: 20px;
  width: 20px;
}
#legendtitle{
  background-color: blue;
  color:white;
  margin-top: -15px;
  height: 39px;
}
#legendbody{
  background-color: #23386e;
  color:white;

}

</style>
