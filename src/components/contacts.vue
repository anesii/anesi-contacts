<template>
    <div class="row">
        <div class="col">
            <div class="table-responsive">
            <table class="table table-borderless">
                <div class="top">
                    <span> CONTACTS </span>
                    <span class="fans">({{contacts.length}})</span>
                </div>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Job Title & Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in contacts" :key="index">
                        <td :style="{backgroundColor: randomColor(index)}" class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</td>
                          <td scope="row" items="contacts" @click="goToContact(contact)">{{contact.firstName}} {{contact.lastName}}</td>
                        <td>{{contact.email}}</td>
                        <td>{{contact.phone}}</td>
                        <td>{{contact.company}}, {{contact.jobTitle}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            colorCache: {},
            search: ''
        } 
    },
    methods: {
        randomColor(id) {
            const r = () => Math.floor(256 * Math.random());

            return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
        },
        goToContact(name){
            this.$router.push({name: 'contact', params:{name: name} })
        }

    },
    computed: {
        contacts(){
            return this.$store.getters.getFilteredContacts;
        },
    }
}
</script>

<style scoped>
    .table{
        margin-top: 10px;
       
        
    }
    thead{
        border-bottom: .5px solid lightgrey;
    }
    .profile-image{
    color: white;
    background-color: purple;
    border-radius: 50%;
    width:30px;
    height:30px;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    text-align: center;
    padding:5px;
    margin: 5px;
    }
    .top{
        color: grey;
        margin:10px;
    }
    tbody tr:hover{
        background-color: rgba(211, 211, 211, 0.404);
    }
</style>
