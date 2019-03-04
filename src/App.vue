<template>
  <div>
   <app-header></app-header>
   <transition name="slide">
   <side-bar></side-bar>
   </transition>
   <div class="container">
      <div class="row">
        <div class="col">
            <router-view />
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import header from './components/header.vue';
import sidebar from './components/sidebar.vue';


export default {
  components:{
  'app-header': header,
  'side-bar': sidebar
  },
  
}
</script>

<style scoped>
@import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");

.slide {
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100px;
    background: blue;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}


</style>
