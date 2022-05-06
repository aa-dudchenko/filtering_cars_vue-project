<template>
  <div id="app">
    <app-search></app-search>
    <app-cars></app-cars>
    
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Cars from './components/Cars/Cars.vue'

export default {
  name: 'app',

  components: {
    'app-search': Search,
    'app-cars': Cars,
  },
}

</script>

<style>
@import "../reset.css";

  body {
    min-width: 360px;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color:#232429
  }

  .my-container {
    max-width: 1480px; 
    padding: 0 20px;
    margin: 0 auto;
  }  


</style>
