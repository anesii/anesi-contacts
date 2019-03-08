import contacts from './components/contacts.vue';
import createContact from './components/create.vue';
import deletedContacts from './components/trashed.vue';
import contactDetail from './components/contactdetail.vue';


export default[
    {path: '/contacts', component: contacts},
    {path: '/createContact', component: createContact},
    {path: '/deletedContacts', component: deletedContacts, name: 'trash'},
    {path: '/contacts/:name', component: contactDetail, name: 'contact'},
]