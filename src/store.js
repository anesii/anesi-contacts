import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contacts : [
            { image: 'AI', firstName: 'Anesi', lastName: 'Joah', email: 'nesi@dickerson.net', company: 'Dickerson Ltd', jobTitle: 'Student', phone: '08093748329', address:'Lagos, Nigeria', birthday: 'May 5th'},
            { image: 'AI', firstName: 'Charles', lastName: 'Joah', email: 'charles@larsen.com', company: 'Larsen PLC', jobTitle: 'Lead Director', phone: '09728276272', address:'Atlanta, Georgia', birthday: 'June 22nd' },
            {image: 'AI', firstName: 'Nick', lastName: 'John', email: 'nick@geneva.co', company: 'Geneva & Sons', jobTitle: 'Assistant Executive Chairman', phone: '07063783283', address:'New York, USA', birthday: 'April 1st' },
            {image: 'AI', firstName: 'Anesi',  lastName: 'Igebu', email: 'anesi@jami.com.ng', company: 'Jami Co.', jobTitle: 'CEO', phone: '07073283982', address:'Toronto, Canada', birthday: 'September 28th' }
        ],
        sidebar: true,
        inputs : {
            image: '',
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            phone: '',
            birthday: '',
            jobTitle: ''
        },
        deletedContacts:[],
        search: ''
    },
    getters:{
        getSidebarVisibility(state){
            return state.sidebar;
        },
        getFilteredContacts (state){
            if(!state.search){
                return state.contacts;
            }
            else{
            return state.contacts.filter((contact) =>{
                var letter = contact.firstName.toLowerCase()
                return letter.match(state.search);
            });
        }
        },
        getContactByName: (state) => (name) => {
            var person = state.contacts.find(contact => {
                return contact== name;
            })
            return person;
        },
        
    },
    mutations:{
        sidebarToggle(state){
            return state.sidebar = !state.sidebar;
        },
        updateSearch(state, payload){
            state.search = payload.toLowerCase();
            // console.log(payload);
        },
        trashedContact(state, contacted){
            var person = state.contacts.find(contact => {
                return contact == contacted;
            })
            state.deletedContacts.push(person)
            state.contacts.splice(state.contacts.indexOf(person), 1)
        }
    },
})