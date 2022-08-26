<template>
    <h2 class="mt-5 mb-5">Equipos y accesorios</h2>

    <div class="container">
        <div class="row d-flex justify-content-around">
            <div class="card col-3 mb-5" style="width: 18rem;" v-for="producto of productos" :key="producto.id">

                <img :src="producto.imagen" class="card-img-top" alt="imagen_producto">
                <div class="card-body">
                    <h5 class="card-title"> {{ producto.nombre }} </h5>
                    <p class="card-text"> ${{ producto.precio_normal }} </p>
                    <a href="#" class="btn btn-primary" v-on:click="agregarProducto(producto)">Agregar</a>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Catalogo',
    components: {
    },
    methods: {
        ...mapActions({
            obtenerProductos: "getProductos",
            agregarProducto: "agregarProducto"
        })
    },
    computed: {
        ...mapState(["productos", "carrito"])
    },
    created() {
        this.obtenerProductos();
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: contain;
}
</style>