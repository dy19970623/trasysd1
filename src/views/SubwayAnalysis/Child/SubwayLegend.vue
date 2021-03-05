<template>
  <div id="rightPane">
    <div id="control_title" style="background-color:rgba(0,140,255,0.6);margin-bottom: 1px;padding: 1px 47px;color: white">图例</div>
    <div id="control_content" style="background-color:rgba(1,19,66,0.8);padding: 12px 24px;">
      <div>
        <span class="subway_icon" style="background-color:#A4343A"></span>
        <span class="subway-txt">1号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#004B87"></span>
        <span class="subway-txt">2号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#008C95"></span>
        <span class="subway-txt">4号线大兴线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#AA0061"></span>
        <span class="subway-txt">5号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#B58500"></span>
        <span class="subway-txt">6号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#FFC56E;"></span>
        <span class="subway-txt">7号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#009B77;"></span>
        <span class="subway-txt">8号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#009B77;"></span>
        <span class="subway-txt">8号线南段</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#97D700;"></span>
        <span class="subway-txt">9号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#0092BC;"></span>
        <span class="subway-txt">10号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#F4DA40;"></span>
        <span class="subway-txt">13号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#CA9A8E;"></span>
        <span class="subway-txt">14号线西段</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#CA9A8E;"></span>
        <span class="subway-txt">14号线东段</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#653279;"></span>
        <span class="subway-txt">15号线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#6BA539;"></span>
        <span class="subway-txt">16号线</span>
      </div>
      <span class="subway_icon" style="background-color:#A4343A;"></span>
      <span class="subway-txt">八通线</span>
      <div>
        <span class="subway_icon" style="background-color:#D986BA;"></span>
        <span class="subway-txt">昌平线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#D0006F;"></span>
        <span class="subway-txt">亦庄线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#D86018;"></span>
        <span class="subway-txt">房山线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#A192B2;"></span>
        <span class="subway-txt">机场线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#A45A2A;"></span>
        <span class="subway-txt">s1线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#D86018;"></span>
        <span class="subway-txt">燕房线</span>
      </div>
      <div>
        <span class="subway_icon" style="background-color:#D22630;"></span>
        <span class="subway-txt">西郊线</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SubwayLegend"
}
</script>

<style scoped>
#rightPane {
  top: 21.7em;
  left: 1em;
  position: absolute;
  z-index: 1000;
}
.subway_icon{
  width:8px;
  height:8px;
  bottom:2px;
  position: relative;
  display: inline-block;

}
.subway-txt{
  padding-left: 5px;
  color: white;
}
</style>
