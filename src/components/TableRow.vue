<template>
    <tr @mouseover="showIcons" @mouseleave="hideIcons" class="align-items-center">              
            <td v-if="!isIconVisible" :style="{backgroundColor: randomColor(contact.index)}" class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</td>
            <td v-if="isIconVisible && !checked" @click="activateCheck"> <i class="mdi mdi-18px mdi-checkbox-blank-outline"></i> </td>
            <td v-if="isIconVisible && checked"> <i class="mdi mdi-18px mdi-check-box-outline"></i> </td>
            <td scope="row" items="contacts" @click="goToContact(contact.firstName)">{{contact.firstName}} {{contact.lastName}}</td>
            <td>{{contact.email}}</td>
            <td>{{contact.phone}}</td>
            <td>{{contact.company}}, {{contact.jobTitle}} </td>
            <td v-if="isIconVisible" class="icons">
                <i class="mdi mdi-star-outline px-2"></i>
                <i class="mdi mdi-pencil px-2"></i>
                <i class="mdi mdi-dots-vertical px-2"></i>
            </td>               
        </tr>
</template>

<script>
export default {
    props: [
        'contact',
    ],
    data() {
        return {
            isIconVisible: false,
            checked: false,
            colorCache: {},
        }
    },
    methods: {
        showIcons() {
            this.isIconVisible = true;
        },
        hideIcons() {
            this.isIconVisible = false;
            this.checked = false;
        },
        activateCheck() {
            this.checked = !this.checked;
        },
        randomColor(id) {
            const r = () => Math.floor(256 * Math.random());

            return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
        },
        goToContact(name){
            this.$router.push({name: 'contact', params:{firstName: name} })
        },
    },
    
}
</script>

<style scoped>
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
    padding:6px;
    margin: 3px;
    }
    .mdi-check-box-outline::before .mdi-checkbox-outline-blank::before {
        position: absolute;
    }
    .icons{
        position: absolute;
        /* margin-left: -50px; */
    }
</style>

