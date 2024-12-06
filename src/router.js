import {createRouter, createWebHistory} from "vue-router";
import HomePage from './components/HomePage.vue'
import AboutUsPage from './components/AboutUsPage.vue'
import ContactPage from "./components/ContactPage.vue";
import LoginPage from "./components/LoginPage.vue";
import CartPage from "./components/CartPage.vue";
import ManagementPage from "./components/ManagementPage.vue"
import CreateAccount from "./components/CreateAccount.vue"

const routes = [{
    path: '/AboutUsPage',
    name: 'AboutUsPage',
    component: AboutUsPage
},
{
    path: '/ManagementPage',
    name: 'ManagementPage',
    component: ManagementPage
},
{
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
},
{
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
},
{
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
},
{
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
},
{
    path: '/CartPage',
    name: 'CartPage',
    component: CartPage
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;