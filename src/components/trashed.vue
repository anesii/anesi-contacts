<template>
    <div class="row pr-5 fixed">
        <div class="col">
            <div class="table-responsive">
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Job Title & Company</th>
                        <th>
                            <i class="mdi mdi-dots-vertical" data-toggle="popover" data-placement="top" title="List Settings" data-content="Popup content"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in deletedContacts" :key="index">
                        <td  class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</td>
                          <td scope="row" items="contacts">{{contact.firstName}} {{contact.lastName}}</td>
                        <td>{{contact.email}}</td>
                        <td>{{contact.phone}}</td>
                        <td>{{contact.company}} {{contact.jobTitle}}</td>
                         <span class="dropdown">
                            <i class="mdi mdi-dots-vertical pl-2" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" data-placement="top" title="List Settings" data-content="Popup content">
                            </i>
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <a class="dropdown-item" @click="trash(contact)">
                                    <i class="mdi mdi-trash-can-outline"></i>
                                                Delete Permanently
                                </a>
                                <a class="dropdown-item" @click="push(contact)">
                                    <i class="mdi mdi-recycle"></i>
                                                Restore Contact
                                </a>
                            </div>
                        </span>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        deletedContacts(){
        return this.$store.state.deletedContacts;
        }
    },
    methods: {
       trash(payload){
           this.$store.commit('trashedPermanently', payload);
       },
        push(payload){
           this.$store.commit('restoreContact', payload);
       }
    }
}
</script>

<style scoped>
    .profile-image{
    color: white;
    background-color: grey;
    border-radius: 50%;
    width:30px;
    height:30px;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    text-align: center;
    padding:6px;
    margin: 5px;
    }
     .table{
        margin-top: 10px;
      
    }
    thead{
        border-bottom: .5px solid lightgrey;
    }
    .dropdown{
        top: 10px;
        position: relative;
    }
</style>
