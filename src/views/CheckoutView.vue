<template>
<div class="container">
  <div class="row">
    <div class="col-8 mt-5">
        <Formulario/>
    </div>

    <div class="col-4 mt-5">
      <Carrito/>
    </div>

  </div>
</div>
</template>

<script>
import Formulario from '@/components/Formulario.vue';
import Carrito from '@/components/Carrito.vue';

export default {
  name: 'App.vue',
  components: {
    Formulario,
    Carrito
  }
}
</script>

<style>

</style>