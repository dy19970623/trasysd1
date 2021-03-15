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
    <input id="domain4" class="button blue" type="button" @click="changeRentOverlay();" value="切换借车点/还车点位置" />
  </div>
</template>

<script>
export default {
name: "SharedLengend"
}
</script>

<style scoped>
#sharelengend {
  width: 13%;
  bottom: 2%;
  right: 1%;
  position: absolute;
  z-index: 1000;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(40, 176, 213, 1);
  background-color: rgba(0,0,0,0.7);
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
#domain4 {
  margin-bottom: 14px;
  border:0px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(153, 153, 153, 1);
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #1E1E1E;
}
</style>
