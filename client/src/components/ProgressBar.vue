<template>
  <div class="progress-bar-container">
		<div class="progress-bar">
			<div class="filled-bar" :style="{ transform: `translate3d(-${(1 - value) * 100}%, 0, 0)` }"></div>
		</div>

		<div class="timers">
			<span>{{currentTime | time}}</span>			
			<span>{{duration | time}}</span>	
		</div>
	</div>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { setInterval } from 'timers';

@Component({
	props: {
		duration: {
			type: Number
		},
		progress: {
			type: Number
		},
		currentTime: {
			type: Number
		}
	}
})
export default class ProgressBar extends Vue {
	duration: number;
	progress: number;
	currentTime: number;

	get value() {
		return this.progress / 100;
	}
	
}

</script>

<style lang="scss">


.progress-bar-container {
	position: relative;
  height: 25px;
  width: 80%;
}

.progress-bar {
  position: relative;
  height: 5px;
  width: 100%;
	margin-bottom: .5rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
	}
	.timers {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: #cc2030;
}


</style>
