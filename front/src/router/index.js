import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import DcIpchk from '../components/DcIpchk.vue'
import DnsPropagation from '../components/DnsPropagation.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/dcipchk',
            name: 'ipchecker',
            component: DcIpchk
        },
        {
            path: '/dnspropagation',
            name: 'dnspropagation',
            component: DnsPropagation
        }
    ]
})

export default router