<template>
  <div id="sharelengend">
    <div id="control_content" style="padding: 12px 24px;">
      <div>
        <span class="share_icon" style="background-color:#FF9900"></span>
        <span class="share-txt">借车点</span>
      </div>
      <div>
        <span class="share_icon" style="background-color:#9900CC"></span>
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
  top: 90%;
  left: 93%;
  position: absolute;
  z-index: 1000;
}
.share_icon{
  width: 20px;
  height: 20px;
  bottom: -4px;
  position: relative;
  display: inline-block;
  border-radius: 50%;

}
.share-txt{
  padding-left: 5px;
  color: white;
}
</style>
