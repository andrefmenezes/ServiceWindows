<template>
  <div id="app">
    
    <NavBar/>    
    <router-view />   
   
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
   NavBar

  }
}
</script>

<style>
/* #app{
  /* background-image: url(./assets/session-hero.svg);
    width: 100%;
    
    background-repeat: no-repeat;
    background-size: cover; */
    /* background-color: #38aadc;
    height: 660px; 
} */
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  
}
</style>
