<template>
	<div class="container">
		<h1 class="mb-5 text-gray-700 text-6xl text-center">Agregar Video</h1>
		<form class="formulario" @submit.prevent="agregarVideo(video)">
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-default"
						>Titulo</span
					>
				</div>
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
					v-model="video.titulo"
				/>
			</div>
			<div class="input-group mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-default"
						><abbr
							data-toggle="tooltip"
							title="Ejemplo de URL : https://www.youtube.com/embed/SLmGJeUH-Ls"
							>Url</abbr
						></span
					>
				</div>
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-default"
					v-model="video.url"
				/>
			</div>
			<div class="form-group">
				<textarea
					v-model="video.descripcion"
					placeholder="Descripcion"
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div>
			<div class="d-flex justify-content-end align-items-center">
				<router-link to="/">
					<button class="btn btn-outline-danger mr-5">Cancelar</button>
				</router-link>
				<button type="submit" class="btn btn-outline-success">
					Agregar
				</button>
			</div>
		</form>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
	name: 'Form',
	data() {
		return {
			video: {
				titulo: '',
				url: '',
				descripcion: '',
			},
		};
	},
	methods: {
		...mapActions(['agregarVideo']),
	},
};
</script>
<style></style>
