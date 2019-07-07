<template>
	<div class="app">
		<main class="app-main">
			

			<div class="container">
					<youtube player-width="0" player-height="0" :video-id="id" :player-vars="options" @ready="ready" @playing="playing" @ended="ended"></youtube>

					<navbar> </navbar>

					<router-view></router-view>
			</div>

		</main>

	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, {mixins } from 'vue-class-component';
import NavBar from '../components/NavBar.vue';
import Player from './Player.vue';
import Queue from './Queue.vue';
import Add from './Add.vue';
import { EventBus } from '../EventBus';
import { mapGetters, mapMutations, mapState } from "vuex";

import AudioService from '../services/AudioService';
import { VideoState } from '../model/videoState';

@Component({
	components: {
		navbar: NavBar,
		Player,
		Queue,
		Add,
	},
	computed: {
		...mapState(['player']),
	}
})
export default class App extends Vue {
	id: string = 'qh9TIYXKSFk';
	options:any = {
			autoplay: 0,
			controls: 1,
			disablekb: 1,
			modestbranding: 0,
	};

	//player: any;

	created() {
		EventBus.$on('play', () => {
			  this.$store.commit('setVideoState', VideoState.loading);
				this.$store.state.player.playVideo();
		});

		EventBus.$on('pause', () => {
			  this.$store.commit('setVideoState', VideoState.paused);
				this.$store.state.player.pauseVideo();
		});

		EventBus.$on('setVolume', (value) => {
			this.$store.state.player.setVolume(value);
		});


	}

	playing() {
		EventBus.$emit('playing');
		this.$store.commit('setVideoState', VideoState.playing);

	}

	ready(e: any) {
		this.$store.commit('setPlayer', e.target)
		const title = this.$store.state.player.getVideoData().title;
		this.$store.commit('setTitle', title);
	}

		
	ended() {
		EventBus.$emit('ended');

		this.$store.commit('setTitle', '');
		this.$store.commit('setVideoState', VideoState.emptyQueue);
		console.log('ended');
	}




}

App.prototype.routes = [
	{
		path: '/',
		component: Player,
	},
	{
		path: '/queue',
		component: Queue,
	},
	{
		path: '/add',
		component: Add,
	},
];

</script>

<style lang="scss">

$margin: 24px;

body {
	background-color: #F2F5F7;
	margin: 0;

		&:before {
			background: #cc2030;
			content: " ";
			display: block;
			height: 264px;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 0;
		}

		&:after {
			background: #cc2030;
			content: " ";
			display: block;
			height: 8px;
			left: 0;
			position: absolute;
			bottom: 0;
			width: 100%;
			z-index: 0;
		}
}

.app {
	display: flex;
	min-height: 100vh;
	justify-content: center;
	max-width: 1200px;
	width: 100%;

	.app-main {
		padding-bottom: 10px;
	}

	footer {
		background-color: #cc2030;
		height: 8px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
}




</style>
