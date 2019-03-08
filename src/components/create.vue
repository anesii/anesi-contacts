<template>
    <div>
        <div class="text-left">
            Create new contact
            <hr>
        </div>
        <form class="form">
            <div class="form-group1">
                <i class="mdi mdi-account-circle"></i>
                <label for="name">
                    <input type="text" placeholder= "First Name" v-model="input.firstName">
                </label>
                <label for="name" class="move">
                    <input type="text" placeholder= "Last Name" v-model="input.lastName">
                </label>
            </div>
            <div class="form-group">
                <i class="mdi mdi-office-building"></i>
                <label for="company">
                    <input type="text" placeholder= "Company" v-model="input.company">
                </label>
                <label for="company" class="move">
                    <input type="text" placeholder= "Job Title" v-model="input.jobTitle">
                </label>
            </div>
            <div class="form-group">
                <i class="mdi mdi-email-outline"></i>
                <label for="email">
                    <input type="email" placeholder= "Email" v-model="input.email">
                </label>
            </div>
            <div class="form-group">
                <i class="mdi mdi-phone"></i>
                <label for="phone"> 
                  <input type="tel" class="form-control"  placeholder= "(+code) Phone" v-model="input.phone">  
                </label>
            </div>
            <div class="form-group">
                <i class="mdi mdi-cake"></i>
                <label for="birthday">
                    <input type="date" placeholder= "Birthday" v-model="input.birthday">
                </label>
            </div>
        </form>
        <div class="foot">
        <div class="row">
            <div class="col">
                More Fields
            </div>
            <div class="col">
                <span @click.prevent="clear"> Cancel </span>
                <span @click.prevent="save" class="save">  Save</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
        }
    },
    computed:{
           input(){
            return this.$store.state.inputs;
        }
    },
    methods:{
        save: function() {
            var fnm =this.input.firstName
            var lnm =this.input.lastName
            var em =this.input.email
            var ph =this.input.phone
            var bd =this.input.birthday
            var co =this.input.company
            var job =this.input.jobTitle

            this.$store.state.contacts.push({firstName: fnm, lastName: lnm,
            email: em, phone:ph, birthday: bd,
            company: co, jobTitle: job})
            this.clear()
        },
        clear: function(){
            this.input.firstName = ''
            this.input.lastName = ''
            this.input.email = ''
            this.input.phone = ''
            this.input.birthday = ''
            this.input.company = ''
            this.input.jobTitle = ''

        },
        
    //  onInput({ number, isValid, country }) {
    //    console.log(number, isValid, country);
    //  },
    }
}
</script>

<style scoped>
.move{
    margin-left:20px;
}
input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px lightgrey;
}
.form{
    padding: 150px;
}
.form-group1{
    right:35px;
    position: relative;
}
.mdi{
    color: grey;
    position: relative;
    right:30px;
}
.mdi::before{
    font-size: 25px;
}
.mdi.mdi-account-circle{
    color: lightgrey;
}
.mdi.mdi-account-circle::before{
    font-size: 60px !important;
    position: relative;
    left:17px;
    top: 10px;
}
.text-left{
 
    top:100px;
    position: relative;
    font-weight: bold;
    color: grey;
}
.foot{
    position: relative;
    bottom: 150px;
    font-weight: bold;
    color: rgb(66, 66, 187);
    cursor: pointer;
}
.save{
    padding:10px;
}
</style>
