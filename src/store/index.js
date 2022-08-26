import { createStore } from 'vuex'

export default createStore({
  state: {
    planes: [],
    opiniones: [],
    productos: [],
    carrito: [],
    total: 0
  },
  mutations: {
    setPlanes(state, payload) {
      state.planes = payload;
    },
    setOpiniones(state, payload) {
      state.opiniones = payload;
    },
    setProductos(state, payload) {
      state.productos = payload;
    },
    setTotal(state, payload) {
      state.total = payload;
    }
  },
  actions: {
    async getPlanes({commit}){
      try {
        const response = await fetch('home.json');
        const data = await response.json();
        const planes = data.planes;
        commit('setPlanes', planes);
      } catch (error) {
        throw error;
      }
    },
    async getOpiniones({commit}){
      try {
        const response = await fetch('home.json');
        const data = await response.json();
        const opiniones = data.opiniones;
        commit('setOpiniones', opiniones);
      } catch (error) {
        throw error;
      }
    },
    async getProductos({commit}){
      try {
        const response = await fetch('equipos.json');
        const data = await response.json();
        const productos = data.productos;
        commit('setProductos', productos);
      } catch (error) {
        throw error;
      }
    },
    async agregarProducto({commit, state}, producto){
      state.carrito.push(producto);
      let costoTotal = 0
      state.carrito.forEach(producto => costoTotal += producto.precio_normal); //costoTotal = costoTotal + producto.precio_normal
      localStorage.setItem("carrito", state.carrito)
      commit('setTotal', costoTotal);  //ojo que solo llamé al mutation del total, no del carrito. Podría haber sido los dos? 
    },
    async cargarCarrito({state}) {
      const carrito = localStorage.getItem("carrito");
      state.carrito = carrito  // modifiqué el state sin hacerlo a través de un mutation
    }
  },
  getters: {
  },
  modules: {
  }
})
