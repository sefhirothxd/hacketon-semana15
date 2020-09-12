<template>
  <div>
    <form>
      <input type="text" v-model="titulo" />
      <input type="text" v-model="url" />
      <textarea
        name="textarea"
        id=""
        cols="30"
        rows="10"
        v-model="des"
      ></textarea>
      <button>Cancelar</button>
      <button>Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VideoEditar",
  data() {
    return {
      titulo: "",
      url: "",
      des: ""
    };
  }
};
</script>
