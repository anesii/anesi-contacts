<template>
    <div class="sidebar" v-if="sidebarVisible">
        <div class="row">
            <div class="col">
                <div class="create">
                <button class="rounded shadow-sm">
                    Create Contact
                </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="one">
                    <span> <i class="mdi mdi-account-outline pr-3"></i> </span>
                    <span>Contacts</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="one">
                    <span> <i class="mdi mdi-trash-can-outline pr-3"></i> </span>
                    <span>Deleted Contacts</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        sidebarVisible(){
            return this.$store.getters.getSidebarVisibility;
        }
    }
}
</script>

<style scoped>
.one:hover{
    background-color: rgb(236, 230, 230);
    border-radius: 0 25px 25px 0;
}
.one{
    padding: 10px;
}.sidebar{
    max-width: 230px;
    margin: 30px;
    font-weight: bold;
    font-size: 15px;
    font-family:sans-serif;
    margin-top: 5px;
}
.create{
    padding: 7px;
}
.mdi{
    color: grey;
}
.mdi::before{
    font-size: 20px;
}
</style>
