<template>
  <div>
    <h1 class="container text-center mt-5 text-white text-6xl">
      Lista de videos
    </h1>
    <ul class="ml-5 d-flex justify-content-center align-items-center flex-wrap">
      <li v-for="(item, index) in videos" :key="index">
        <div class="card m-5" style="width: 35.1rem;">
          <iframe
            width="560"
            height="315"
            :src="item.url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="card-body">
            <h5 class="card-title">
              <b>{{ item.titulo }}</b>
            </h5>
            <div class="badge badge-primary text-wrap" style="width: 10rem;">
              {{ item.id }}
            </div>
            <p class="card-text">{{ item.descripcion }}</p>
          </div>
          <div class="container d-flex justify-between mb-5">
            <a
              href="#"
              class="btn btn-danger mr-5"
              @click="eliminarVideo(item.id)"
              >Eliminar</a
            >
            <router-link :to="{ name: 'VideoEditar', params: { id: item.id } }">
              <a href="#" class="btn btn-success">Editar</a>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Video",
  created() {
    this.getVideos();
  },
  methods: {
    ...mapActions(["getVideos", "eliminarVideo"]),
    modalActive() {
      this.$emit("modalOn");
    }
  },
  computed: {
    ...mapState(["videos"])
  }
};
</script>

<style scoped>
.card {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
