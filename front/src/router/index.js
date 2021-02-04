import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../components/Dashboard.vue'
import DcIpchk from '../components/DcIpchk.vue'
import DnsPropagation from '../components/DnsPropagation.vue'

const routes = [
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
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;