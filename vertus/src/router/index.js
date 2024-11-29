import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SobreNos from '../views/SobreNos.vue';
import Login from '../views/Login.vue';
import Contato from '../views/Contato.vue';
import Produtos from '../views/Produtos.vue';
import Carrinho from '../views/Carrinho.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre-nos', name: 'SobreNos', component: SobreNos },
  { path: '/login', name: 'Login', component: Login },
  { path: '/contato', name: 'Contato', component: Contato },
  { path: '/produtos', name: 'Produtos', component: Produtos },
  { path: '/carrinho', name: 'Carrinho', component: Carrinho },
];

const router = new VueRouter({ mode: 'history', routes });

export default router;