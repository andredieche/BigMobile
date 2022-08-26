<template>
  <h2>Checkout</h2>
  <form action="">
    <div class="text-start mt-5">
      <h3>Datos del comprador</h3>
      <hr>
    </div>

    <div class="mb-3 text-start">
      <label for="nombreInput" class="form-label">Nombre</label>
      <input type="email" class="form-control" id="nombreInput" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 text-start">
      <label for="emailInput" class="form-label">Email</label>
      <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 text-start">
      <label for="repetirEmailInput" class="form-label">Repetir Email</label>
      <input type="email" class="form-control" id="repetirEmailInput" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 text-start">
      <label for="telefonoInput" class="form-label">Teléfono</label>
      <input type="email" class="form-control" id="telefonoInput" aria-describedby="emailHelp">
    </div>

    <div class="text-start">
      <h3>Datos del Despacho</h3>
      <hr>
    </div>

    <div class="mb-3 text-start">
      <label for="direccionInput" class="form-label">Dirección</label>
      <input type="email" class="form-control" id="direccionInput" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 text-start">
      <label for="comunaInput" class="form-label">Comuna</label>
      <input type="email" class="form-control" id="comunaInput" aria-describedby="emailHelp">
    </div>

    <div class="text-start">
      <h3>Forma de Pago</h3>
      <hr>
    </div>

    <div class="mt-5 mb-5">

          <div class="form-check text-start">
      <input class="form-check-input" type="radio"  id="transferencia" value="option1" checked>
      <label class="form-check-label" for="transferencia">
        Transferencia Bancaria
      </label>
    </div>
    <div class="form-check text-start">
      <input class="form-check-input" type="radio"  id="servipag" value="option2">
      <label class="form-check-label" for="servipag">
        Servipag
      </label>
    </div>
    <div class="form-check text-start">
      <input class="form-check-input" type="radio"  id="webpay" value="option2">
      <label class="form-check-label" for="webpay">
        Webpay
      </label>
    </div>

    </div>


    <button class="btn btn-primary mb-5" v-on:click="pagar()">Confirmar</button>

  </form>

</template>

<script>
export default {
  methods: {
    pagar() {
      this.$router.push('/success');
    }
  },
}
</script>

<style scoped>
</style>