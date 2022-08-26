<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="mt-5 mb-5">Bolsa de compras BIGMOBILE</h3>
        <hr>
        <p v-if="carrito.length <= 0">AGREGAR PRODUCTOS AL CARRO</p>

        <!-- Acá se renderizan las cosas que hemos agregado al carrito -->
        <div class="row d-flex justify-content-around">
          <div class="card col-3 mb-5" style="width: 18rem;" v-for="producto of carrito" :key="producto.id">

            <img :src="producto.imagen" class="card-img-top" alt="imagen_producto">
            <div class="card-body">
              <h5 class="card-title"> {{ producto.nombre }} </h5>
              <p class="card-text"> ${{ producto.precio_normal }} </p>
            </div>

          </div>
        </div>

        <hr>
        <P>TOTAL:</P>
        ${{ total }}
      </div>

      <button class="btn btn-primary" v-on:click="checkOut()">Ir a pagar</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Carrito',
  methods: {
    checkOut() {
      this.$router.push('/checkout');
    }
  },
  computed: {
    ...mapState(["carrito", "total"])
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 5vw;
  object-fit: contain;
}
</style>