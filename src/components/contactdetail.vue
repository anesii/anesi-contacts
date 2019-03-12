<template>
    <div>
        <form class="form">
            <div class="row">
                <div class="col">
                <span class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</span>
                </div>
                <div class="col">
                <span class="name"> {{contact.firstName}} {{contact.lastName}} </span>
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
            <button class="btn btn-default btn-danger" @click="erase()">
                Delete Contact
            </button>
        </div>
        <div>
                    <router-link to="/contacts"> Back To Contacts </router-link>           
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        contact(){
            var name = this.$route.params.name;
            return this.$store.getters.getContactByName(name);
        },
       
    },
    methods:{
        erase: function() {
            var fnm =this.contact.firstName
            var lnm =this.contact.lastName
            var em =this.contact.email
            var ph =this.contact.phone
            var bd =this.contact.birthday
            var co =this.contact.company
            var job =this.contact.jobTitle

            this.$store.commit('trashedContact', this.contact)
            this.$router.push({name: 'trash'})
        },
        clear: function(){
            this.contact.image = ''
            this.contact.firstName = ''
            this.contact.lastName = ''
            this.contact.email = ''
            this.contact.phone = ''
            this.contact.birthday = ''
            this.contact.company = ''
            this.contact.jobTitle = ''
            
        }
    }
}
</script>

<style scoped>
    .profile-image{
    color: white;
    background-color: rgb(44, 44, 175);
    border-radius: 50%;
    width:100px;
    height:100px;
    font-size: 30px;
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
        font-weight: bold;
    }
    .formm{
        text-align:left;
        margin-top: 80px;
    }
    .mdi{
        color: grey;
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
        right: 150px;
    }
</style>
