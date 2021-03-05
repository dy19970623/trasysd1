<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
   import Index from "./views/Index"
export default {
  name: 'App',
  components:{
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
