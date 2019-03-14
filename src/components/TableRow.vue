<template>
    <tr @mouseover="showIcons" @mouseleave="hideIcons" class="align-items-center">  
            <td v-if="!isIconVisible" :style="{backgroundColor: randomColor(contact.index)}" class="profile-image">{{contact.firstName[0]}}{{contact.lastName[0]}}</td>
            <td v-if="isIconVisible && !checked" @click="toggleCheck"> <i class="mdi mdi-18px mdi-checkbox-blank-outline"></i> </td>
            <td v-if="isIconVisible && checked" @click="toggleCheck"> <i class="mdi mdi-18px mdi-check-box-outline"></i> </td>
            <td scope="row" items="contacts" @click="goToContact(contact.firstName)">{{contact.firstName}}
                {{contact.lastName}}</td>
            <td @click="goToContact(contact.firstName)">{{contact.email}}</td>
            <td @click="goToContact(contact.firstName)">{{contact.phone}}</td>
            <td @click="goToContact(contact.firstName)">{{contact.company}}, {{contact.jobTitle}} </td>
            <td v-if="isIconVisible" class="icons">
                <i class="mdi mdi-star-outline pl-2" data-toggle="popover" data-placement="top" title="Favourite" data-content="Popup content"></i>
                <i class="mdi mdi-pencil pl-2" data-toggle="popover" data-placement="top" title="Edit Contact" data-content="Popup content"></i>
                <span class="dropdown">
                    <i class="mdi mdi-dots-vertical pl-2" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" data-placement="top" title="List Settings" data-content="Popup content">
                            </i>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <a class="dropdown-item" @click="erase()">
                            <i class="mdi mdi-trash-can-outline"></i>
                            Delete Contact
                            </a>
                    </div>
                </span>
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
        toggleCheck() {
            this.checked = !this.checked;
        },
        randomColor(id) {
            const r = () => Math.floor(256 * Math.random());

            return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
        },
        goToContact(name){
            this.$router.push({name: 'contact', params:{firstName: name} })
        },
        erase: function() {

            this.$store.commit('trashedContact', this.contact)
            this.$router.push({name: 'trash'})
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
        padding:6px;
        margin: 3px;
    }
    .icons{
        position: fixed ;
        margin-left: -45px;
        /* display: flex;
        text-align: center;
        justify-content:flex-end; */
    }
    
</style>

