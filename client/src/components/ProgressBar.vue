<template>
	<div class="progress-bar">

		<div class="filled-bar" :style="{ transform: `translate3d(-${(1 - value) * 100}%, 0, 0)` }">

		</div>


		{{currentTime | time}}
		{{duration | time}}

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


.progress-bar {
  position: relative;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}


.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: #eef0ff;
}


</style>
