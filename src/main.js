import { createApp } from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Loader from '@/components/app/Loader'
import Vue from 'vue'


firebase.initializeApp ({
  apiKey: "AIzaSyBf_7SO3rmB1DXo_YLopspH962eO_iMr-E",
  authDomain: "crm-system-e07bd.firebaseapp.com",
  databaseURL: "https://crm-system-e07bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crm-system-e07bd",
  storageBucket: "crm-system-e07bd.appspot.com",
  messagingSenderId: "813930320602",
  appId: "1:813930320602:web:62706dab1340b171068be3",
  measurementId: "G-ZMG73JN4D7"
  })


firebase.auth().onAuthStateChanged(()=> {
  createApp(App).use(store).use(router).mount('#app')
  Vue.component('Loader', Loader)
})
