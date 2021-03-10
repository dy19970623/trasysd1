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
    height: 100%;
    width: 28%;
    z-index: 600;
    background-color:rgba(8, 8, 13, 0.7);
    /*background-color:rgba(1,19,66,0.6);*/
}
</style>
