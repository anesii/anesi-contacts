<template>
    <div>
        <div class="text-left">
            Create new contact
            <hr>
        </div>

            <v-app class="pt-5 mt-5 bg-white">
                    <v-form>
                        <v-container>
                        <v-layout row wrap align-items-baseline> 
                            <v-flex md1>
                                <i class="mdi mdi-account-circle"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="First Name" v-model="input.firstName"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="Last Name" v-model="input.lastName"></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center> 
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-domain"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="Company" v-model="input.company"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="Job Title" v-model="input.jobTilte"></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center>
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-email-outline"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field type="email" label="Email" v-model="input.email" ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center class="py-3">
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-phone"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <vue-tel-input v-model="phone"
                                    :preferredCountries="['ng', 'gb', 'us']">
                                </vue-tel-input>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center>
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-cake"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field type="date" label="Birthday" v-model="input.birthday" ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                            <v-flex>
                                <div class="foot mt-5">
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
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-app>

    </div>
</template>

<script>
// Vue.component('vue-phone-number-input', VuePhoneNumberInput);

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
            // var fnm =this.input.firstName
            // var lnm =this.input.lastName
            // var em =this.input.email
            // var ph =this.input.phone
            // var bd =this.input.birthday
            // var co =this.input.company
            // var job =this.input.jobTitle
            let input = {
                 firstName : this.input.firstName,
                 lastName : this.input.lastName,
                 email : this.input.email,
                 phone : this.input.phone,
                 birthday : this.input.birthday,
                 company : this.input.company,
                 jobTitle : this.input.jobTitle
            }

            // this.$store.state.contacts.push({firstName: fnm, lastName: lnm,
            // email: em, phone:ph, birthday: bd,
            // company: co, jobTitle: job})

            this.$store.commit('addContacts', input)
            this.clear()
            this.$router.push({name: 'contacts'})
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
 
    top:50px;
    position: relative;
    font-weight: bold;
    color: grey;
    padding-left: 50px;
    margin-right: 100px;
}
.foot{
    font-weight: bold;
    color: rgb(66, 66, 187);
    cursor: pointer;
}
.save{
    padding:10px;
}
</style>
