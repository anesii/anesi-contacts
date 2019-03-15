import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contacts : [
            { image: 'AI', firstName: 'Anesi', lastName: 'Sahani', email: 'nesi@dickerson.net', company: 'Dickerson Ltd', jobTitle: 'Student', phone: '+234 937 483 2932', address:'Lagos, Nigeria', birthday: 'May 5th'},
            { image: 'AI', firstName: 'Charles', lastName: 'Joah', email: 'charles@larsen.com', company: 'Larsen PLC', jobTitle: 'Lead Director', phone: '+256 728 276 1172', address:'Atlanta, Georgia', birthday: 'June 22nd' },
            {image: 'AI', firstName: 'Nick', lastName: 'John', email: 'nick@geneva.co', company: 'Geneva & Sons', jobTitle: 'Assistant Executive Chairman', phone: '+234 706 378 3283', address:'New York, USA', birthday: 'April 1st' },
            {image: 'AI', firstName: 'Anesi',  lastName: 'Igebu', email: 'anesi@jami.com.ng', company: 'Jami Co.', jobTitle: 'CEO', phone: '+1 647 550 9359', address:'Toronto, Canada', birthday: 'September 28th' }
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
            jobTitle: '',
            notes:'',
            nickname:'',
            prefix:'',
        },
        deletedContacts:[],
        search: '',
        picture: require('./assets/undraw_blank_canvas_3rbb.png')
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
                var letter = contact.firstName.toLowerCase();
                var alphabet = contact.email.toLowerCase();
                var b = contact.lastName.toLowerCase();
                var c = contact.phone.toLowerCase();
                var d = contact.company.toLowerCase();
                var e = contact.jobTitle.toLowerCase();
                return letter.match(state.search)||alphabet.match(state.search)||b.match(state.search)||c.match(state.search)||d.match(state.search)||e.match(state.search);
            });
        }
        },
        getContactByName: (state) => (name) => {
            var person = state.contacts.find(contact => {
                return contact.firstName== name;
            });
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
            });
            state.deletedContacts.push(person);
            state.contacts.splice(state.contacts.indexOf(person), 1);
        },
        trashedPermanently(state, contacted){
            var person = state.deletedContacts.find(contact => {
                return contact == contacted;
            });
            state.deletedContacts.splice(state.deletedContacts.indexOf(person), 1);
        },
        restoreContact(state, contacted){
            var person = state.deletedContacts.find(contact => {
                return contact == contacted;
            });
            state.contacts.push(person);
            state.deletedContacts.splice(state.deletedContacts.indexOf(person), 1);
        },
        addContacts(state, payload){
            state.contacts.push(payload);
        }
    },
});