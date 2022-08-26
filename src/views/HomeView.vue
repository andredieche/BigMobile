<template>

  <!-- Jumbotron -->
  <div class="jumbotron">
    <h1 class="display-4 mt-5">Bienvenidos a BigMobile</h1>
    <img src="../assets/man-using-mock-up-cell-phone-blank-screen-space-banner-186491931.jpg" alt="">
    <hr class="my-4">

  </div>

    <div class="container">
      <div class="row">

        <!-- Planes -->
        <h2>Planes Flexibles</h2>
        <div class="col-4 mt-5" v-for="(plan, index) of planes" :key="index">
          <h4>{{ plan.titulo }}</h4>
          <p>{{ plan.texto }}</p>
        </div>

        <!-- Comentarios -->
        <h2 class="mt-5">Qué dicen de nosotros</h2>
        <div class="col-4 mt-5 mb-5" v-for="(opinion, index) of opiniones" :key="index">
          <img src="../assets/user2.png" class="user-image" alt="user_image">
          <h5>{{ opinion.nombre }}</h5>
          <p>{{ opinion.texto }}</p>
        </div>

      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  methods: {
    ...mapActions({
      obtenerPlanes: "getPlanes",
      obtenerOpiniones: "getOpiniones"
    })
  },
  computed: {
    ...mapState(["planes", "opiniones"])
  },
  created() {
    this.obtenerPlanes();
    this.obtenerOpiniones();
  }
}
</script>

<style scoped>
.user-image{
 width: 50%;

}
</style>