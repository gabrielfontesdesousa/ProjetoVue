import {createRouter, createWebHistory} from "vue-router";
import HomePage from './components/HomePage.vue'
import AboutUsPage from './components/AboutUsPage.vue'
const routes = [{
    path: '/AboutUsPage',
    name: 'AboutUsPage',
    component: AboutUsPage
},
{
    path: '/',
    name: 'HomePage',
    component: HomePage
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;