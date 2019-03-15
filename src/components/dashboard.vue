
<template>
    <div>
        <div class="row">
            <div class="col-3" v-if="sidebarVisible">
                <sidebar />
            </div>
            <div class="col">
                <div class="bring-down">
                    <router-view> </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from './sidebar.vue'
export default {
    components: {
        sidebar,
    },
    computed:{
        sidebarVisible(){
            return this.$store.getters.getSidebarVisibility;
        }
    }
}
</script>

<style scoped>
.bring-down{
    margin-top: 90px;
}
</style>