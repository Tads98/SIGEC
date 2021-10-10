import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   state:{
       vinculos:[],
    //    casos: [],
   },
   mutations: {
    setVinculos: (state, vinculos) => (state.vinculos = vinculos),
    setVinculo: (state, vinculo) => (state.vinculos.push(vinculo)),   
    // setCasos: (state, casos) => (state.casos = casos),
    // setCaso: (state, caso, estado) =>(state.casos[estado] = caso),
},
   actions:{
    async getVinculos({ commit }){
        const response = await axios.get("/vinculos");

        commit('setVinculos', response.data.data);
    },

    // async getCasos({ commit }){
    //     const response = await axios.get("/casos");

    //     commit('setCasos', response.data.data);
    // }
   },
})