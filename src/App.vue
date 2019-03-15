<template>
  <div>
   <app-header></app-header>
   <div class="row">
        <div class="col">
            <router-view />
        </div>
   </div>
   </div>
</template>

<script>
import header from './components/header.vue';

export default {
  components:{
  'app-header': header,
  },
  
}
</script>

<style scoped>
@import url("//cdn.materialdesignicons.com/3.5.95/css/materialdesignicons.min.css");
</style>
