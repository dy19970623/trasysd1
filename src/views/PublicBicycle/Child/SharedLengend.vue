<template>
  <div id="sharelengend">
    <div id="control_title" style="background-color:rgba(0,140,255,0.6);margin-bottom: 1px;padding: 1px 47px;color: white">图例</div>
    <div id="control_content" style="background-color:rgba(1,19,66,0.8);padding: 12px 24px;">
      <div>
        <span class="share_icon" style="background-color:#33CCFF"></span>
        <span class="share-txt">借车点</span>
      </div>
      <div>
        <span class="share_icon" style="background-color:#FFFF00"></span>
        <span class="share-txt">还车点</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "SharedLengend"
}
</script>

<style scoped>
#sharelengend {
  top: 10%;
  left: 1em;
  position: absolute;
  z-index: 1000;
}
.share_icon{
  width:8px;
  height:8px;
  bottom:2px;
  position: relative;
  display: inline-block;

}
.share-txt{
  padding-left: 5px;
  color: white;
}
</style>
