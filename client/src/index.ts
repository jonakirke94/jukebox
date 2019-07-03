import './styles/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faListOl, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



declare module 'vue/types/vue' {
	interface Vue {
			routes: any[];
	}
}

library.add(faMusic);
library.add(faListOl)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);

const vm = new Vue({
	router: new VueRouter({
		routes: [
			{
				path: '/',
				component: App,
				children: App.prototype.routes,
			},
		],
		scrollBehavior: (to, from, savedPosition) => {
			if (savedPosition) {
				return savedPosition;
			}
			return { x: 0, y: 0 };
		},
		mode: 'history',
	}),
});

vm.$mount('#app-container');
