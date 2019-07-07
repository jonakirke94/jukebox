import './styles/main.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/App.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faListOl, faPlus, faPause, faPlay, faHeart, faVolumeUp, faVolumeDown, faVolumeOff, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { store } from './store/store';

declare module 'vue/types/vue' {
	interface Vue {
			routes: any[];
	}
}

const icons = [faMusic, faListOl, faPlus, faPause, faPlay, faHeart, faVolumeUp, faVolumeDown, faVolumeOff, faSpinner]
library.add(...icons);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed, { global: true });

import 'filters/time';

const vm = new Vue({
	store,
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
	})
});

vm.$mount('#app-container');
