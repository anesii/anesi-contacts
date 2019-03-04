<template>
  <div>
    <nav class="sticky-top">
        <div class="row">
            <div class="col">
                <header class="navbar navbar-light">
                <div class="toggle">
                    <i class="mdi mdi-menu" @click="sidebarShow"></i>
                </div>
                <div class="ul">
                <i class="mdi mdi-account-circle"></i> 
               <span class="title">  Contacts </span>
                </div>
                
                <div>
                    <form class="form">
                        <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
                        </div>
                    </form>
                </div>

                <div class="top-right">
                    <span>
                        <i class="mdi mdi-apps"></i>
                    </span>
                    <span>
                        <i class="mdi mdi-bell"></i>
                    </span>
                    <span class="profile-image"> AI </span>
                </div>
                
                </header>
        </div>
        </div>
    </nav> 
  </div>
</template>

<script>
import search from '../search.js'

export default {
  data() {
      return {
          
      }
  },
  methods:{
      sidebarShow(){
          this.$store.commit('sidebarToggle')
      }
  }
}
</script>

<style scoped>
.ul{
    text-align: center;
    display: inline-block;
    position: absolute;
    margin-left: 40px;
}
.mdi-account-circle{
    color: rgb(27, 91, 211);
}
.mdi-account-circle::before{
    font-size: 40px;
}
.mdi-magnify::before{
    color: grey;
}
.mdi-magnify::before{
    font-size:25px;
}
.mdi-apps::before{
    font-size:25px;
}
.mdi-apps{
    margin-right: 40px;
    color: grey;
}
.mdi-bell{
    border-radius: 50%;
    background-color: grey;
    color: white;
    margin-right: 50px;
    width:25px;
    height:25px;
    padding: 8px;
    text-align: center;
}
.mdi-bell::before{
    font-size: 18px;
}
.profile-image{
    color: white;
    background-color: purple;
    border-radius: 50%;
    width:25px;
    height:25px;
    margin-right:20px;
    padding: 8px;
    text-align: center;
}
.title{
    font-size: 22px;
    font-family:'Helvetica Neue', sans-serif;
    color: grey;
    position: absolute;
    top:15px;
    left:50px;
}
.form{
    border-radius: 50px;
    width: 45rem;
}
.input-group-text{
    background-color:whitesmoke;
    border: none;
}
.form-control{
    background-color:whitesmoke;
    border: none;
    height: 50px;
}
.toggle{
    color: grey;
}
.mdi-menu::before{
    font-size: 25px;
}
.sticky-top{
    margin-left: 30px;
}
</style>
