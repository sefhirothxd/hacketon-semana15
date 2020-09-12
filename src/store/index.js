import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    video: { id: "", titulo: "", url: "", descripcion: "" }
  },
  mutations: {
    setVideos(state, payload) {
      state.videos = payload;
    },
    setVideo(state, payload) {
      state.video = payload;
    },
    setEliminarVideo(state, payload) {
      const videosFiltrada = state.videos.filter(video => video.id !== payload);
      state.videos = videosFiltrada;
    },
    probando() {
      console.log("tarea editada");
    }
  },
  actions: {
    getVideos({ commit }) {
      const videos = [];
      db.collection("videos")
        .get()
        .then(res => {
          res.forEach(doc => {
            let video = doc.data();
            video.id = doc.id;
            console.log(video);
            videos.push(video);
          });
          console.log(videos);
          commit("setVideos", videos);
        });
    },
    getVideo({ commit }, idVideo) {
      db.collection("videos")
        .doc(idVideo)
        .get()
        .then(doc => {
          let video = doc.data();
          video.id = doc.id;
          commit("setVideo", video);
        });
    },
    agregarVideo({ commit }, video) {
      db.collection("videos")
        .add({
          titulo: video.titulo,
          url: video.url,
          descripcion: video.descripcion
        })
        .then(doc => {
          console.log(doc.id);
          commit("probando");
          router.push("/");
        });
    },
    editarVideo({ commit }, video) {
      console.log(video.id);
      console.log(video.nombre);
      db.collection("videos")
        .doc(video.id)
        .update({
          titulo: video.titulo,
          descripcion: video.descripcion,
          url: video.url
        })
        .then(() => {
          router.push("/");
          commit("probando");
        });
    },
    eliminarVideo({ commit }, idVideo) {
      console.log(idVideo);
      db.collection("videos")
        .doc(idVideo)
        .delete()
        .then(() => {
          commit("setEliminarVideo", idVideo);
        });
    }
  },
  modules: {}
});
