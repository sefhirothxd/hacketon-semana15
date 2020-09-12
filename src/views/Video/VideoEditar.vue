<template>
	<div class="container">
		<div class="container  d-flex justify-content-center">
			<div class="card m-5" style="width: 35.1rem;">
				<iframe
					width="560"
					height="315"
					:src="video.url"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<div class="card-body">
					<h5 class="card-title">
						<b>{{ video.titulo }}</b>
					</h5>
					<div class="badge badge-primary text-wrap" style="width: 10rem;">
						{{ video.id }}
					</div>
					<p class="card-text">{{ video.descripcion }}</p>
				</div>
			</div>
		</div>
		<h1 class="mb-5">Editar Video</h1>
		<form class="formulario" @submit.prevent="editarVideo(video)">
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
import { mapActions, mapState } from 'vuex';
export default {
	name: 'VideoEditar',
	data() {
		return {
			id: this.$route.params.id,
		};
	},
	created() {
		this.getVideo(this.id);
	},
	methods: {
		...mapActions(['getVideo', 'editarVideo']),
	},
	computed: {
		...mapState(['video']),
	},
};
</script>
<style scoped>
.card {
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
