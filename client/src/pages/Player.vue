<template>
<div class="player-wrapper">

		<div class="card player" v-if="!isEmpty">

		<div class="image">
				<img src="assets/images/music.svg" ref="image" alt="">
		</div>
		
		<h2>{{videoTitle}}</h2>

		<progress-bar :duration="duration" :currentTime="currentTime" :progress="progress" class="progressbar"></progress-bar>

		<div class="controls">
			<button class="btn circle brand large">				
				<font-awesome-icon icon="heart" />
			</button>

			<button @click="toggle()" class="btn circle brand xl center">				
				<font-awesome-icon :icon="playerIcon" :pulse="playerIcon === 'spinner'"/>
			</button>


			<button @click="volumeBtnClick" class="btn circle brand large volume-container" 
			@mouseenter="startSlidingPeriod"
			@mouseleave="phaseSlidingPeriod">
			<vue-slider :show="volume.showSlider" :value="volume.value" @input="setVolume"></vue-slider>
			<font-awesome-icon :icon="volumeIcon" />
			</button>
		</div>

	</div>

	<empty v-if="isEmpty"></empty>


</div>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { EventBus } from '../EventBus';
import ProgressBar from '../components/ProgressBar.vue';
import VueSlider from '../components/VueSlider.vue';
import Empty from '../components/Empty.vue';
import {Volume} from '../model/volume';
import { mapState } from "vuex";
import { VideoState } from '../model/videoState';
import { clearInterval } from 'timers';

@Component({
	components: {
		ProgressBar,
		VueSlider,
		Empty
	},
	computed: {
		...mapState(['videoState', 'videoTitle'])
	}
})
export default class Player extends Vue {
	duration = 0;
	progress = 0;
	currentTime = 0;
	processId = null;

	volume: Volume = {
		showSlider: false,
		value: 50,
		slidingPeriod: null
	} as Volume;
 

	created() {
		EventBus.$on('playing', () => {
			this.playing();
		});

		EventBus.$on('ended', () => {
			this.reset();
		});

		EventBus.$on('pause', () => {
			window.clearInterval(this.processId);
		})

		this.$store.commit('setVideoState', VideoState.idle);
	}

	reset() {
		this.duration = 0;
		this.progress = 0;
		this.currentTime = 0;
		window.clearInterval(this.processId);
		}

	startSlidingPeriod() {
		clearTimeout(this.volume.slidingPeriod);
		this.volume.showSlider = true;
	}

	phaseSlidingPeriod() {
		this.volume.slidingPeriod = setTimeout(() => {
			this.volume.showSlider = false;
		}, 200);
	}

	playing() {
		const ytb = this.$store.state.player;
		this.duration = ytb.getDuration();

		this.processId = setInterval(() => {
			this.currentTime = ytb.getCurrentTime();
			this.progress = (100 * this.currentTime) / this.duration;
		}, 100);
	} 

	toggle() {
		const ytb = this.$store.state.player;
		const event = ytb.getPlayerState() === 1 ? 'pause' : 'play';
	  EventBus.$emit(event);
	}

	get playerIcon() {
		const state = this.$store.state.videoState;

		switch(state) {
			case VideoState.loading:
				return 'spinner';
			case VideoState.playing:
				return 'pause'
			default: 
				return 'play'
		}
	}
	
	get isEmpty() {
		return this.$store.state.videoState !== VideoState.emptyQueue;
	}

	volumeBtnClick() {
		this.volume.value = this.volume.value === 0 ? 50 : 0;
		EventBus.$emit('setVolume', this.volume.value);
	}

	setVolume(value: number) {
		this.volume.value = Number(value);
		EventBus.$emit('setVolume', this.volume.value);
	}

	get volumeIcon() {
		return this.volume.value === 0 ? 'volume-off' : 'volume-up';
	}
	
}

</script>

<style lang="scss">
@import "~styles/utilities/component";

.image {
	margin: 2rem;
	height: 300px;
	box-sizing: border-box;

	img {
		width: 100%;
		height: 100%;
	}
}

.player {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-content: space-between;

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.volume-container{
			position: relative;
			input {
				position: absolute;
				bottom: 5px; 
				left: 65px;
			}
		}
	}

}




</style>
