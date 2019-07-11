import Vue from "vue";
import Vuex from "vuex";
import { VideoState } from "../model/videoState";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		player: null as any,
		videoState: 3 as VideoState,
		videoTitle: '',
		isConnected: false,
    currentVideo: null,
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
		},
		SOCKET_NEW_VIDEO(state, video: any) {
			console.log('video in store');
			state.currentVideo = video;
		},
		ADD_VIDEO(state, video: any) {
			console.log('add_video in store');
			state.currentVideo = video;
		},
		SOCKET_CONNECT(state, status) {
      state.isConnected = true;
    }
	},
});