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
                        <router-link to="/contacts" class="title" exact> Contacts </router-link>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-3">
                            <form class="form">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="mdi mdi-magnify"></i>
                                        </span> 
                                    </div> 
                                    <input type="text" class=" mdi mdi-magnify form-control" placeholder="Search" v-model="search" @input="searchers">
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="top-right">
                        <span>
                            <i class="mdi mdi-apps" data-toggle="popover" data-placement="top" title="About" data-content="Popup content"></i>
                        </span>
                        <span>
                            <i class="mdi mdi-bell" data-toggle="popover" data-placement="top" title="Notifications" data-content="Popup content"></i>
                        </span>
                        <span class="profile-image" data-toggle="popover" data-placement="top" title="Sign Out" data-content="Popup content"> AI </span>
                    </div>
                    
                </header>
            </div>
        </div>
    </nav> 
  </div>
</template>

<script>


export default {
    data() {
      return {
          search: ''  
      }
    },
    methods:{
      sidebarShow(){
          this.$store.commit('sidebarToggle')
        },
        searchers(){
            this.$store.commit('updateSearch', this.search)
        }
    },
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
    color: rgb(40, 107, 196);
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
    position: relative;
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
    position: relative;
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
    position: relative;
}
.title{
    font-size: 22px;
    font-family:'Helvetica Neue', sans-serif;
    color: grey;
    position: absolute;
    top:15px;
    left:50px;
    text-decoration: none;
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
    border-radius: 5px;
    width: 45rem;
}
.toggle{
    color: grey;
    display: flex;
    align-items: stretch;
} 
.mdi-menu::before{
    font-size: 25px;
}
.sticky-top{
    margin-left: 30px;
}
.top-right{
    cursor: pointer;
}
</style>
