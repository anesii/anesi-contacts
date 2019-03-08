<template>
  <div>
   <app-header></app-header>
   <div class="row">
     <div class="col-3">
        <side-bar></side-bar>
     </div>
        <div class="col-9">
            <router-view />
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




</style>
