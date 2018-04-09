// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Login from './pages/Login'
import Register from './pages/Register'
import Tchat from './pages/Tchat'
import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Tchat
  }
]
const router = new VueRouter({routes})

let config = {
  apiKey: "AIzaSyC0TT0-v1ARoY8HIcKQhKEUyoZgQbPl094",
  authDomain: "chatapp-6fecc.firebaseapp.com",
  databaseURL: "https://chatapp-6fecc.firebaseio.com",
  projectId: "chatapp-6fecc",
  storageBucket: "chatapp-6fecc.appspot.com",
  messagingSenderId: "22084971041"
};

firebase.initializeApp(config);

window.firebase = firebase

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
