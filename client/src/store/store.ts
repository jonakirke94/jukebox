import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		player: null as any,
	},
  getters: {
		player(state: any) {
				return state.player;
		}
	},
	mutations: {
		setPlayer(state, payload: any) {
			state.player = payload;
		},
		removePlayer(state) {
			state.player = null;
		}
	},
});