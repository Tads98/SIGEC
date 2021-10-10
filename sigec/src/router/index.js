import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'
import login from '../views/login.vue'
import autoCadastro from '../views/autoCadastro.vue'
import adicionarVinculo from '../views/adicionarVinculo.vue'
import transparencia from '../views/transparencia.vue'
import buscaCasos from '../views/buscaCasos.vue'
import meuPerfil from '../views/meuPerfil.vue'

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

    {
        path: '/adicionarVinculo',
        name: 'adicionarVinculo',
        component: adicionarVinculo
    },

    {
        path: '/transparencia',
        name: 'transparencia',
        component: transparencia
    },

    {
        path: '/:id/buscaCasos',
        name: 'buscaCasos',
        component: buscaCasos
    },

    {
        path: '/meuPerfil',
        name: 'meuPerfil',
        component: meuPerfil
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router