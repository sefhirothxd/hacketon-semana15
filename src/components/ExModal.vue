<template>
	<div class="modal-container justify-center items-center">
		<div
			class="modal-cuarpo  bg-white d-flex justify-content-center align-items-center"
		>
			<ExForm />
		</div>
	</div>
</template>

<script>
import ExForm from '@/components/ExForm';
export default {
	name: 'ExModal',
	components: { ExForm },
	props: {},

	methods: {},
};
</script>

<style>
.modal-container {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	transition: opacity 0.3s ease;
}
.modal-cuarpo {
	height: 300px;
	width: 30%;
}
</style>
