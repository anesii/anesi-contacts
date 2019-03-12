<template>
    <div class="sidebar" v-if="sidebarVisible">
        <div class="row">
            <div class="col-">
                <div class="create">
                <div data-toggle="modal">
                    <router-link tag="div" class="btn btn-default shadow-sm" to="/createContact">
                        <svg width="30" height="30" viewBox="0 0 36 36">
                            <path fill="#34A853" d="M16 16v14h4V20z"></path>
                            <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                            <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                            <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                            <path fill="none" d="M0 0h36v36H0z"></path>
                        </svg>
                    Create Contact
                    </router-link>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link to="/contacts" exact>
                    <div class="one">
                        <span><i class="mdi mdi-account-outline pr-3"></i></span>
                       <span> Contacts </span>
                       <span class="fans">{{fans.length}}</span>
                    </div>
                </router-link>    
            </div>
        </div>
        <div class="row">
            <div class="col">
                 <router-link to="/deletedContacts" exact>
                    <div class="one">
                        <span> <i class="mdi mdi-trash-can-outline pr-3"></i> </span>
                    Deleted Contacts
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    computed:{
        sidebarVisible(){
            return this.$store.getters.getSidebarVisibility;
        },
        fans(){
            return this.$store.state.contacts;
        }
    }
}
</script>

<style scoped>
.one:hover{
    background-color: rgb(236, 230, 230);
    border-radius: 0 25px 25px 0;
    text-decoration: none;
}
a.router-link-exact-active{
    color: rgb(27, 91, 211);
    max-height: 3px;
    width: 200px;
}
a:hover{
    text-decoration: none;
}

a{
    color: rgb(61, 58, 58);
}
.one{
    padding: 10px;
}
.sidebar{
    max-width: 200px;
    font-weight: bold;
    font-size: 15px;
    font-family:sans-serif;
    padding: 7px;
    transition: 0.5s;
}
.create{
    padding: 7px;
}
.btn{
    background-color: white;
    border:white;
    border-radius: 25px;
    font-family:sans-serif;
    padding:8px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: rgb(109, 102, 102);
    margin: 20px;
}
.btn:hover{
    color:rgb(109, 102, 102);
}
.mdi{
    color: grey;
}
.mdi::before{
    font-size: 20px;
}
.fans{
    left:50px;
    position: relative;
}

</style>
