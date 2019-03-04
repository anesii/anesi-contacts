import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        contacts : [
            
        ],
        sidebar: true,
    },
    getters:{
        getSidebarVisibility(state){
            return state.sidebar;
        }
    },
    mutations:{
        sidebarToggle(state){
            return state.sidebar = !state.sidebar;
        }
    }
})