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
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Prefix" v-model="input.prefix"></v-text-field>
                            </v-flex>
                            <v-flex>
                                <i class="mdi mdi-close-circle-outline" @click="clear('prefix')" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="First Name" v-model="input.firstName"></v-text-field>
                            </v-flex>
                            <v-flex> </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Middle Name" v-model="input.middleName"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Last Name" v-model="input.lastName"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Suffix" v-model="input.suffix"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Phonetic first" v-model="input.phoneticFirst"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Phonetic middle" v-model="input.phoneticMiddle"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Phonetic last" v-model="input.phoneticLast"></v-text-field>
                            </v-flex>
                            <v-flex></v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="Nickname" v-model="input.nickname"></v-text-field>
                            </v-flex>
                            <v-flex>
                                <i class="mdi mdi-close-circle-outline" @click="clear('nickname')" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                            <v-flex md1></v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field label="File as" v-model="input.fileas"></v-text-field>
                            </v-flex>
                            <v-flex>
                                <i class="mdi mdi-close-circle-outline" @click="clear" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons"> 
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-domain"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="Company" v-model="input.company"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field label="Job Title" v-model="input.jobTitle"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('company')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons">
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-email-outline"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field type="email" label="Email" v-model="input.email" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('email')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center class="py-3" @mouseover="showIcons" @mouseleave="hideIcons" >
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-phone"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <vue-tel-input v-model="input.phone"
                                    :preferredCountries="['ng', 'gb', 'us']">
                                </vue-tel-input>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('phone')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons" >
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-cake"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md5>
                                <v-text-field type="date" label="Birthday" v-model="input.birthday" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('birthday')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons">
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-link"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field type="text" label="Website" v-model="input.website" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('website')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons">
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-google-circles-communities"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field type="text" label="Relationship" v-model="input.relationship" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('relationship')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap align-items-center @mouseover="showIcons" @mouseleave="hideIcons">
                            <v-flex md1 class="pl-5">
                                <i class="mdi mdi-note-outline"></i>
                            </v-flex>
                            <v-flex xs12 sm6 md10>
                                <v-text-field type="text" label="Notes" v-model="input.notes" ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md1>
                                <i class="mdi mdi-close-circle-outline" @click="clear('notes')" v-if="isIconVisible" data-toggle="popover" data-placement="top" title="Remove" data-content="Popup content"></i>
                            </v-flex>
                        </v-layout>
                        
                        <v-layout>
                            <v-flex>
                                <div class="foot mt-5">
                                    <div class="row">
                                        <div class="col">
                                            <router-link to="/createContact">
                                                Less Fields
                                            </router-link>
                                        </div>
                                        <div class="col">
                                            <router-link to="/contacts"> Cancel </router-link>
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

export default {
    data() {
        return {
            phone: '',
            isIconVisible: false,
        }
    },
    computed:{
           input(){
            return this.$store.state.inputs;
        }
    },
    methods:{
        save: function() {
            let input = {
                 firstName : this.input.firstName,
                 lastName : this.input.lastName,
                 email : this.input.email,
                 phone : this.input.phone,
                 birthday : this.input.birthday,
                 company : this.input.company,
                 jobTitle : this.input.jobTitle
            }

            this.$store.commit('addContacts', input)
            this.clear()
            this.$router.push({name: 'contacts'})
        },
        clear: function(field){
            switch(field) {
            case 'prefix':
                this.input.prefix = ''
                break;
            case 'nickname':
                this.input.nickname = ''
                break;
            case 'company':
                this.input.company = '';
                this.input.jobTitle = '';
                break;
                case 'email':
                this.input.email = ''
                break;
                case 'phone':
                this.input.phone = ''
                break;
                case 'birthday':
                this.input.birthday = ''
                break;
                case 'website':
                this.input.website = ''
                break;
                case 'relationship':
                this.input.relationship = ''
                break;
                case 'notes':
                this.input.notes = ''
                break;
            default:
                return ;
            }
            // this.input.firstName = ''
            // this.input.lastName = ''
            // this.input.email = ''
            // this.input.phone = ''
            // this.input.birthday = ''
            // this.input.company = ''
            // this.input.jobTitle = ''

        },
        showIcons() {
            this.isIconVisible = true;
        },
        hideIcons() {
            this.isIconVisible = false;
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
.mdi-close-circle-outline{
    position: relative;
    left: 5px;
    cursor: pointer;
}
.text-left{
 
    top:50px;
    position: relative;
    font-weight: bold;
    color: black;
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
a{
    text-decoration: none;
    color: rgb(66, 66, 187);
    padding:5rem;
}
</style>
