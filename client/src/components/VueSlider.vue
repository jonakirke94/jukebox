<template>
	<input v-if="show || insideSlider" type="range" min="0" max="100"
	 step="0.1"
	 :value="value"
	 @click.stop
	 @input="$emit('input', $event.target.value)"
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
			required: true,
			default: false
		},
		value: {
			type: Number,
		}
	}
})
export default class VueSlider extends Vue {
	insideSlider = false;
}

</script>

<style lang="scss">

input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 80px;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #CC2030;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #A01926;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A01926;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #CC2030;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #CC2030;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #A01926;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A01926;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #CC2030;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #CC2030;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #A01926;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A01926;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #CC2030;
}
input[type=range]:focus::-ms-fill-upper {
  background: #CC2030;
}
</style>
