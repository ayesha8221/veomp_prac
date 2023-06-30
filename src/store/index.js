import { createStore } from 'vuex';

export default createStore(
  {
  state: {
    products: null,
    product: null,
    categories: null,
    category: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setCategory: (state, category) => {
      state.category = category;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://ayesha8221.github.io/data/db.json")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("http://ayesha8221.github.io/data/db.json" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },   
  },
    getCategories: async (context) => {
      fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((categories) => context.commit("setCategories", categories));
    },
    getCategory: async (context, id) => {
      fetch("http://localhost:3000/" + id)
      .then((res) => res.json())
      .then((category) => context.commit("setCategory", category))
    },     
  },
)
