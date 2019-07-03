<template>
	<nav>
		<ul>
			<router-link tag="li" to="/" exact-active-class="active">
				<font-awesome-icon icon="music" />
				<span class="label">Player</span>
			</router-link>
				<router-link tag="li" to="/queue" active-class="active">
				<font-awesome-icon icon="list-ol" />
				<span class="label">Queue</span>
			</router-link>
			<router-link tag="li" to="/add" active-class="active">
				<font-awesome-icon icon="plus" />
				<span class="label">Add song</span>
			</router-link>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class NavBar extends Vue {
	
}

</script>

<style lang="scss">

nav {
	position: relative;
	width: 100%;
	padding-top: .5rem;
	padding-bottom: .5rem;

	&:before {
		background-image: -webkit-gradient(linear,right top,left top,from(rgba(255,255,255,0)),color-stop(5%,#fff),color-stop(90%,#fff),to(rgba(255,255,255,0)));
    background-image: linear-gradient(-90deg,rgba(255,255,255,0) 0,#fff 5%,#fff 90%,rgba(255,255,255,0) 100%);
    content: "";
    display: block;
    height: 2px;
    opacity: .08;
    position: absolute;
    top: 0;
    width: 100%;
	}

	ul {
		margin: 0;
		padding: 0;

		li {
			display: inline-block;
			margin: 4px;
			background: 0 0;
    	border-radius: 8px;
    	font-weight: 600;
    	line-height: 24px;
    	padding: 8px;
    	text-decoration: none;
			transition: background-color,color .3s ease;
			color: #d3d3d3;

			&:first-of-type {
				margin-left: 0;
			}

			.label {
				padding-left: .3rem;
			}
			
			&:hover {
				background-color: rgba(0,0,0,.1);
				cursor: pointer;
			}

			&.active {
				background-color: rgba(0,0,0,.1);
				color: #fff;
			}
		}
	
	}
}



</style>
