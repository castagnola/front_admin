
import { Form, HasError, AlertError } from 'vform';
import Auth from './components/packages/auth/Auth';
import Router from './routes';
import App from './App.vue';
import axios from 'axios'
import Vue from 'vue';
import swal from "sweetalert2";


//import layouts
import BootstrapSideBar from 'b-sidebar';
import jquery from 'jquery';
// (window as any).$ = (window as any).jQuery = jquery;

/**
 * Globals uses
 */
Vue.component(AlertError.name, AlertError);
Vue.component(HasError.name, HasError);

// Layouts
Vue.use(BootstrapSideBar);

Vue.use(Auth);

window.vm =  new Vue();
window.Form = Form;
window.swal = swal;
window.axios = axios;
axios.defaults.baseURL = 'http://localhost:8000/';


const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

window.toast = toast;
/**
 * Components
 */
Vue.component('navbar-component', require('./components/layouts/NavbarComponent').default);


new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
