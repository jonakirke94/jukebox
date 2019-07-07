import Vue from 'vue';

Vue.filter('time', (value:number) => {
		value = Math.round(value);
		let minutes = Math.floor(value / 60);
		let seconds = value - minutes * 60;

		const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

		return formattedMinutes + ':' + formattedSeconds;
});