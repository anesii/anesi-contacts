<template>
    <div>
        <form class="form">
            <div class="row">
                <div class="col-4">
                <span class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</span>
                </div>
                <div class="col-4">
                <span class="name"> {{contact.firstName}} {{contact.lastName}} </span>
                </div>
                <div class="col-4">
                    <span class="icons">
                        <i class="mdi mdi-star-outline px-2" data-toggle="popover" data-placement="top" title="Favourite" data-content="Popup content"></i>
                        <i class="mdi mdi-pencil px-2" data-toggle="popover" data-placement="top" title="Edit Contact" data-content="Popup content"></i>
                            <span class="dropdown">
                                <i class="mdi mdi-dots-vertical px-2" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" data-placement="top" title="List Settings" data-content="Popup content"> 
                                </i>
                                <div class="dropdown-menu" aria-labelledby="triggerId">
                                    <a class="dropdown-item" @click="erase()">
                                    <i class="mdi mdi-trash-can-outline"></i>
                                        Delete Contact
                                    </a>
                                </div>
                            </span>
                            <router-link to="/contacts"><i class="mdi mdi-close px-2" data-toggle="popover" data-placement="top" title="Close" data-content="Popup content"></i></router-link>
                    </span>
                </div>
            </div>
            <hr>
            <div class="formm">
                <div class="body">
                    <div class="form-group">
                        <i class="mdi mdi-domain"></i>
                        {{contact.company}}, 
                        {{contact.jobTitle}}
                    </div>
                    <div class="form-group">
                        <i class="mdi mdi-email-outline"></i>
                        {{contact.email}}
                    </div>
                    <div class="form-group">
                        <i class="mdi mdi-phone"></i>
                    {{contact.phone}}
                    </div>
                    <div class="form-group">
                        <i class="mdi mdi-cake"></i>
                        {{contact.birthday}}
                    </div>
                </div>
            </div>
        </form>
        <div>
                    <router-link to="/contacts"> Back To Contacts </router-link>           
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        contact(){
            var name = this.$route.params.firstName;
            return this.$store.getters.getContactByName(name);
        },
       
    },
    methods:{
        clear: function(){
            this.contact.image = ''
            this.contact.firstName = ''
            this.contact.lastName = ''
            this.contact.email = ''
            this.contact.phone = ''
            this.contact.birthday = ''
            this.contact.company = ''
            this.contact.jobTitle = ''
            
        },
        erase: function() {

            this.$store.commit('trashedContact', this.contact)
            this.$router.push({name: 'trash'})
        },
    }
}
</script>

<style scoped>
    .profile-image{
    color: white;
    background-color: rgb(45, 87, 201);
    border-radius: 50%;
    width:100px;
    height:100px;
    font-size: 35px;
    font-weight: bold;
    position: absolute;
    text-align: center;
    padding:22px;
    margin-left: 75px;
    }
    hr{
        top: 50px;
        position: relative;
    }
    .form{
        padding: 50px;
        font-size: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        /* font-weight: bold; */
    }
    .formm{
        text-align:left;
        margin-top: 80px;
    }
    .mdi{
        color: grey;
        padding: 25px;
    }
    .mdi::before{
        font-size:25px;
    }
    .btn{
        border-radius: 5px;
        position: relative;
        bottom:100px;
        left:500px;
    }
    .body{
        font-size: 20px;
        position: relative;
        left: 10px;
        top:20px;
    }
    .name{
        position: relative;
        top: 25px;
        right: 5rem;
        font-weight:500;
    }
    .icons{
        position: absolute;
        top: 25px;
        left: 15rem;
        cursor: pointer;
    }
    .mdi-trash-can-outline::before{
        font-size: 20px !important;
        position: relative;
        right: 25px;
    }
    
</style>
