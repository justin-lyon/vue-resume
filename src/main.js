import Vue from 'vue';
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuelidate);

import EventRegistrationApp from './App.vue'
import router from "./routes";
import store from "./store/store";

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(EventRegistrationApp)
});