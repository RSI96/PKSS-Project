import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Building1 from "./views/Building1";
import Building2 from "./views/Building2";
import Building3 from "./views/Building3";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/building1',
      name: 'building1',
      component: Building1
    },
    {
      path: '/building2',
      name: 'building2',
      component: Building2
    },
    {
      path: '/building3',
      name: 'building3',
      component: Building3
    }
  ]
})
