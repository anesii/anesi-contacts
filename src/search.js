export default {
    computed:{
        filteredBlogs: function(){
            return this.contacts.filter((contact) => {
                return contact.match(this.search);
            });
        }
    }
}