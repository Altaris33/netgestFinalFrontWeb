import Vue from 'vue'
import Router from 'vue-router'
import ClientList from './views/ClientList'
import Home from './views/Home'
import ClientCreate from './views/ClientCreate'
import Client from './views/Client'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/clients",
            name: "clientList",
            component: ClientList
        },
        {
            path: "/clients/create",
            name: "clientCreate",
            component: ClientCreate
        },
        {
            path: "/clients/:idClient",
            name: "client",
            component: Client
        },
        
    ]
})

export default router