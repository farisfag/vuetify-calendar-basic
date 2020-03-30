import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDPFdzpQisrXzmdcCoEKbKnW0j2gFss35w",
  authDomain: "vue-calendar-a3330.firebaseapp.com",
  databaseURL: "https://vue-calendar-a3330.firebaseio.com",
  projectId: "vue-calendar-a3330",
  storageBucket: "vue-calendar-a3330.appspot.com",
  messagingSenderId: "423794059055",
  appId: "1:423794059055:web:760c4eb8e404dbe3a323da"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
