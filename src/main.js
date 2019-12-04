import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const CalculatorVue = () => import('./components/Calculator.vue');

const routes = [
  { path: '/', component: CalculatorVue },
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
