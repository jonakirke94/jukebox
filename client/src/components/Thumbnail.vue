<template>
	<div class="thumbnail" v-if="id">

		<img :src="src" ref="thumbnail" alt="">

	
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { setInterval } from 'timers';

@Component({
	props: {
		id: String,
	}
})
export default class Thumbnail extends Vue {
	id: string;

/* 	mounted() {
		console.log(this.id, 'id');
		(this.$refs.thumbnail as HTMLImageElement).src = 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg'
	} */

	get src() {
		return 'https://img.youtube.com/vi/' + this.id + '/hqdefault.jpg';
	}
}

</script>

<style lang="scss">

.thumnail {
	width: 400px;
	height: 400px;
}


</style>
