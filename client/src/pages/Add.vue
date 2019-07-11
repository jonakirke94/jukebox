<template>
	<div class="card">

		<input type="text" v-model="link" :class="{invalid: !isValidUrl && touched}" @focus="touched = true">
		<button @click="add" class="btn brand" :disabled="!isValidUrl">Add</button>
		
		video:  {{currentVideo}}
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SongService from '../services/SongService';
import App from './App.vue';
import { mapGetters, mapMutations, mapState } from "vuex";


@Component({
	computed: {
		...mapState(['currentVideo'])
	}
	
})
export default class Add extends Vue {
	private link = 'https://www.youtube.com/watch?v=VC4ORS5n9Hg';
	private touched = false;
	private regExp: RegExp;
	private EVENTNAME = 'FAKE';

	

	private created() {
		this.regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
	}

	private add() {
		const id = this.getVideoId();
		console.log(id,'id');

		SongService.add(id).then(() => {
			console.log('called songservice successfully');
		})

		//this.$socket.emit('ADD_VIDEO', id)
	}

	private get isValidUrl(): Boolean
	{
		if (this.link != undefined || this.link != '') {
			const match = this.link.match(this.regExp);
			return match && match[2].length == 11;
		}
				
		return false;
	}

	private getVideoId() {
		const match = this.link.match(this.regExp);

		if (match && match[2].length == 11) {
			return match[2];
		} else {
		  return "error"
		}
	}

}

</script>

<style lang="scss">

.invalid {
	border: 2px solid red;
}


</style>
