<template>
	<main>
		<ex-header />
		<router-view class="mt-48" />
	</main>
</template>

<script>
import ExHeader from '@/components/ExHeader';

export default {
	name: 'app',
	components: { ExHeader },
	data() {
		return {
			modalState: false,
		};
	},
	methods: {
		modalOn() {
			this.modalState = !this.modalState;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
