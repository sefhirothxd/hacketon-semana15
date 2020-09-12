import Vue from "vue";
import VueRouter from "vue-router";
import Error from "@/views/Error";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Video",
    component: () => import("../views/Video/Video.vue")
  },
  {
    path: "/video/:id",
    name: "VideoEditar",
    component: () => import("../views/Video/VideoEditar.vue")
  },
  {
    path: "/videoAgregar",
    name: "VideoAgregar",
    component: () => import("../views/Video/VideoAgregar.vue")
  },
  {
    path: "/mapa",
    name: "Mapa",
    component: () => import("../views/Mapa.vue")
  },
  {
    path: "*",
    name: "error",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
