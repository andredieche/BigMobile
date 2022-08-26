<template>

    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-3">
                <Carrito/>
            </div>

            <div class="col-9">
                <Catalogo/>
            </div>

        </div>
    </div>
</template>

<script>
import Carrito from '@/components/Carrito.vue'
import Catalogo from '@/components/Catalogo.vue';
export default {
    name: 'EquiposView',
    components: {
        Catalogo,
        Carrito
    }
}
</script>

<style>
</style>