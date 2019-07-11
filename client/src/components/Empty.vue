<template>
  <div class="card">

		<div class="image">
				<img src="assets/images/music2.svg" ref="image" alt="">
		</div>
		
		<div class="add-link">
				<span>It's so quiet in here..</span>				
				<router-link tag="a" class="link" to="/add">Add song</router-link>				
		</div>


	</div>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class ProgressBar extends Vue {
	
	
}

</script>

<style lang="scss">

.add-link {
	display: flex;
	justify-content: center;

	.link {
		margin-left: .5rem;
		color: #cc2030;
	}
}


</style>
