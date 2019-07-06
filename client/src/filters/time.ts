import Vue from 'vue';

Vue.filter('time', (value:number) => {
		value = Math.round(value);
		let minutes = Math.floor(value / 60);
		let seconds = value - minutes * 60;

		seconds = seconds < 10 ? 0 + seconds : seconds;
		minutes = minutes < 10 ? 0 + minutes : minutes;

		return minutes + ':' + seconds;
});