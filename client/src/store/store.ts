import Vue from "vue";
import Vuex from "vuex";
import { VideoState } from "../model/videoState";
import { stat } from "fs";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		player: null as any,
		videoState: 3 as VideoState,
		videoTitle: '',
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
		},
		setVideoState(state, videoState: VideoState) {
			state.videoState = videoState;
		},
		setTitle(state, title: string) {
			state.videoTitle = title;
		}
	},
});