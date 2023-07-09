import { createStore } from 'vuex'
import Vue from 'vue'
import auth from '@/store/auth'
import info from '@/store/info'

export default createStore({
  
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async fetchCurrency() {
      var myHeaders = new Headers();
      myHeaders.append("apikey", process.env.VUE_APP_FIXER);
      var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

   const res = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CRUB%2CUSD&base=EUR`, requestOptions)
   return await res.json()
        }
  },
  modules: {
    auth, info
  }
})
