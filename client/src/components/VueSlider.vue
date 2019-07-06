<template>
	<input v-if="show || insideSlider" type="range" min="0" max="100"
	 step="0.1"
	  :value="value"
		 v-on:input="$emit('input', $event.target.value)"
		  orient="vertical"
			 @mouseenter="insideSlider = true"
			 @mouseleave="insideSlider = false">
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { setInterval } from 'timers';

@Component({
	props: {
		show: {
			type: Boolean,
			required: true
		}
	}
})
export default class Thumbnail extends Vue {
	insideSlider = false;
}

</script>

<style lang="scss">

input[type=range] {
  -webkit-appearance: none;
  width: 20px;
  height: 175px;
      writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
}
input[type=range]:focus {
  outline: none;
}

input[type=range][orient=vertical] {
    -webkit-appearance: none;
    /*-webkit-appearance: slider-vertical; /*if we remove this slider-vertical then horizondally range bar styles applies correctly*/
    width: 100px;
    height: 20px;
    transform: translateY(30px) rotate(90deg);
    transform-origin:bottom;  
}

input[type=range][orient=vertical]::-webkit-slider-runnable-track {
	-webkit-appearance: none;
    background: #ddd;  
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    background: #cc2030;
		margin-top: 0px;
		cursor: pointer;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: #ddd;
  border-radius: 1.3px;
}
input[type=range]::-moz-range-thumb {
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}

input[type=range]::-ms-thumb {
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

</style>
