<template>
	<div class="card player">



		<progress-bar :duration="duration" :currentTime="currentTime" :progress="progress" class="progressbar"></progress-bar>

		<div class="controls">

		<button class="btn circle brand large ">				
			<font-awesome-icon icon="heart" />
		</button>


		<button @click="toggle()" class="btn circle brand xl center">				
			<font-awesome-icon :icon="icon" />
		</button>


		<button @click="mute()" class="btn circle brand large volume-container" @mouseenter="showSlider = true" @mouseleave="showSlider = false">
			<vue-slider :show="showSlider" v-model="value"></vue-slider>
			<font-awesome-icon icon="volume-off" />
		</button>
		</div>

<!-- 		Title {{title}}


		Value {{value}}
		<thumbnail :id="id"></thumbnail>

	 -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { EventBus } from '../EventBus';
import ProgressBar from '../components/ProgressBar.vue';
import Thumbnail from '../components/Thumbnail.vue';
import VueSlider from '../components/VueSlider.vue';

@Component({
	components: {
		ProgressBar,
		Thumbnail,
		VueSlider
	}
})
export default class Player extends Vue {
	duration = 0;
	progress = 0;
	currentTime = 0;
	processId = null;
	title = '';
	id = '';
	icon = 'play';
	value = 50;
	showSlider = true;

	created() {
		EventBus.$on('playing', () => {
			this.playing();
			this.setData();
		})
	}

	setData() {
		const data = this.$store.state.player.getVideoData()
		this.title = data.title;
		this.id = data.video_id;
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
		this.icon = this.icon === 'play' ? 'pause' : 'play';
	  EventBus.$emit(event);
	}


	mute() {
		EventBus.$emit('mute');
	}
	
}

</script>

<style lang="scss">

.player {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.volume-container{
			position: relative;
			border: 1px solid red;
			input {
				position: absolute;
				left: -32px;
				bottom: 134px;
				z-index: 0 !important;
			}
		}
	}

}

.btn {
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
		user-select: none;
		z-index: 1;
/* 		display: flex;
		justify-content: center;
		align-items: center; */
		
		&.circle {
			width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
		}

		&.center {
			margin-bottom: 30px;
			margin-left: 15px;
			margin-right: 15px;
		}

		&.brand {
			color: #fff;
			background-color: #cc2030;
			border-color: #d43f3a;
		}

		&.large {
			width: 60px;
			height: 60px;
			padding: 10px 16px;
			font-size: 24px;
			line-height: 1.33;
			border-radius: 35px;
		}

		&.xl {
			width: 70px;
			height: 70px;
			padding: 10px 16px;
			font-size: 24px;
			line-height: 1.33;
			border-radius: 35px;
		}

		svg {
			margin-left: 4px;
		}
}


</style>
