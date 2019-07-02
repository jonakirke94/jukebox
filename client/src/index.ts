import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/App.vue';

declare module 'vue/types/vue' {
	interface Vue {
			routes: any[];
	}
}

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
