<template>
	<div class="card">
		Count: {{counter}}

		<button @click="counter++">Add</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Queue extends Vue {
		counter = 0;



   destroyed() {
		 console.log('Queue destroyed');
	 }
}

</script>

<style lang="scss">




</style>
