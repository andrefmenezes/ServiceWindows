import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        check:false,
    },
    mutations:{
        setCheck(state,payload){
            state.check= payload

        }
    }
    
})