<template>
  <div id="rightBox">
    <chordChart1></chordChart1>
    <chordChart2></chordChart2>
    <chordChart3></chordChart3>
  </div>
</template>

<script>
import ChordChart1 from './RightBox_chart1'
import ChordChart2 from './RightBox_chart2'
import ChordChart3 from './RightBox_chart3'

export default {
  data() {
    return {}
  },
  components: {
    ChordChart1,
    ChordChart2,
    ChordChart3  
  },
  methods: {

  }
}
</script>

<style>
#rightBox{
    float:right;
    position: absolute;
    right: 7px;
    height: 890px;
    width: 25%;
    padding-top:5px;
    padding-left: 10px;
    padding-bottom:5px;
    z-index: 600;
    background-color:rgba(1,19,66,0.6);
}
</style>
