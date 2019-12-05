import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const CalculatorVue = () => import('./components/Calculator.vue');
const Websockets = () => import('./components/Websockets.vue');

const routes = [
  { path: '/', component: Websockets },
  { path: '/websockets', component: Websockets },
  { path: '/calc', component: CalculatorVue }
];

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
});

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
