import contacts from './components/contacts.vue';
import createContact from './components/create.vue';
import deletedContacts from './components/trashed.vue';

export default[
    {path: '/', component: contacts},
    {path: '/createContact', component: createContact},
    {path: '/deletedContacts', component: deletedContacts},
]