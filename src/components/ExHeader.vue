<template>
	<header class=" shadow w-screen fixed-top">
		<div
			class=" flex items-center justify-between flex-wrap bg-gray-600 p-6 h-40"
		>
			<router-link to="/" class="contenedor-imagen">
				<img
					class="logo"
					src="https://i.ibb.co/hLRCNk3/veratube-probando.png"
					alt=""
				/>
			</router-link>
			<nav>
				<ul class="flex items-center justify-center ">
					<li class="mr-3 text-white font-bold text-2xl text-decoration-none">
						<router-link to="/">Video</router-link>
					</li>
					<li class="mr-3 text-white font-bold text-2xl">
						<router-link to="/Mapa">Mapa</router-link>
					</li>
					<li class="mr-3 text-white font-bold text-2xl">
						<router-link to="/VideoAgregar">Agregar Video</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'ExHeader',

	props: {},

	methods: {
		modalActive() {
			this.$emit('modalOn');
		},
	},
};
</script>

<style>
.contenedor-imagen {
	width: 8%;
}
.logo {
	width: 100%;
}
</style>
