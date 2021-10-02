import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/dashboard.vue'
import login from '../components/login.vue'
import autoCadastro from '../components/autoCadastro.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    }, 

    {
        path: '/',
        name: 'login',
        component: login
    },

    {
        path: '/autoCadastro',
        name: 'autoCadastro',
        component: autoCadastro
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router