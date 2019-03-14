import contacts from './components/contacts.vue';
import createContact from './components/create.vue';
import deletedContacts from './components/trashed.vue';
import contactDetail from './components/contactdetail.vue';
import Welcome from './components/welcome.vue';
import MoreContactDetail from './components/MoreFields.vue';




export default[
    {path: '/', component: Welcome},
    {path: '/contacts', component: contacts, name: 'contacts'},
    {path: '/createContact', component: createContact},
    {path: '/deletedContacts', component: deletedContacts, name: 'trash'},
    {path: '/contacts/:firstName', component: contactDetail, name: 'contact'},
    {path: '/morefields', component: MoreContactDetail},

];