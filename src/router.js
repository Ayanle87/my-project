import { createRouter, createWebHashHistory } from 'vue-router'

import ContactUs from './views/ContactUs.vue'
import HomePage from './views/HomePage.vue'
import AboutUs from './components/AboutUs.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: ContactUs, path: '/ContactUs' },
    { component: HomePage, path: '/' },
    { component: AboutUs, path: '/AboutUs' }
  ]
})
