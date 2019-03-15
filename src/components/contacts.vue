<template>
    <div class="row pr-5 fixed">
        <div class="col">
            <div class="table-responsive">
                <table class="table table-borderless" style="width:100%">
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
                            <th scope="col"></th>

                            <th scope="col">
                                <i class="mdi mdi-dots-vertical" data-toggle="popover" data-placement="top" title="List Settings" data-content="Popup content"></i>
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody v-for="(contact, index) in contacts" :key="index">
                        <table-row :contact="contact" :index="index"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import TableRow from './TableRow'

export default {
    components: {
        TableRow,
    },
    data() {
        return {
            colorCache: {},
            search: '',
            isIconVisible: false,
        } 
    },
    computed: {
        contacts(){
            return this.$store.getters.getFilteredContacts;
        },
    },
}
</script>

<style scoped>
    .table{
        margin-top: 10px;
        margin-left: 20px;
        /* overflow-x: hidden; */
    }
    .table-responsive{
        overflow-x: hidden;

    }
    thead{
        border-bottom: .5px solid lightgrey;
        cursor:default;
    }
    
    .top{
        color: grey;
        margin:10px;
    }
    tbody tr:hover{
        background-color: rgba(211, 211, 211, 0.404);
        border-left: 5px solid blue;
        cursor: pointer;
        /* width: 100%; */
    }
    
</style>
