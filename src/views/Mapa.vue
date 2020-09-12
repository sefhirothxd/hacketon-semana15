<template>
  <div>
    <h1 class="text-center m-5 text-white text-6xl">Hola, soy el Mapa</h1>
    <div class="container d-flex justify-center align-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106035.36730522673!2d-77.68867060081294!3d-9.01230392756666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a94c633639dadb%3A0xe3ff1d726c9149f!2sHuandoy!5e0!3m2!1ses-419!2spe!4v1599935393260!5m2!1ses-419!2spe"
        width="1000"
        height="700"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        class="map"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.map {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
