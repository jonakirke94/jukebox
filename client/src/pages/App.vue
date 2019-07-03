<template>
	<div class="app">
		<main class="app-main">
			

			<div class="container">
					<!-- <div class="title">JUKEBOX!</div> -->

					<navbar> </navbar>
			
        	<router-view></router-view>
			</div>

		</main>

	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavBar from '../components/NavBar.vue';
import Player from '../components/Player.vue';
import Queue from '../components/Queue.vue';
import Add from '../components/Add.vue';

import GameService from '../services/GameService';

@Component({
	components: {
		navbar: NavBar,
		Player,
		Queue,
		Add
	}
})
export default class App extends Vue {
	name = 'fake';
	
	created() {
		GameService.test().then(res => {
			 console.log('res', res);
			 this.name = res.data.hello;
		})
	}
	
}

App.prototype.routes = [
	{
		path: '',
		component: Player,
	},
	{
		path: 'queue',
		component: Queue,
	},
	{
		path: 'add',
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
