export default {
    computed:{
        filteredContacts: function(){
            return this.contacts.filter((contact) => {
                return contact.index.match(this.search);
            });
        }
    }
}