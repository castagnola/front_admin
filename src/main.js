
import { Form, HasError, AlertError } from 'vform';
import Vue from 'vue';
import App from './App.vue';
import Router from './routes';

/**
 * Globals uses
 */
Vue.component(AlertError.name, AlertError);
Vue.component(HasError.name, HasError);

window.Form = Form;
/**
 * Components
 */
Vue.component('navbar-component', require('./components/navbar/NavbarComponent').default);


new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
