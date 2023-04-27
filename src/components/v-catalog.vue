<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">Каталог курсов</h2>
    <router-link :to="{name: 'cart', params:{cart_data: CART }}">
      <div class="v-catalog__link_to_cart"><img src="../assets/cart.png" alt="cart">{{ CART.length }}</div>
    </router-link>
    <div class="v-catalog__wrapper">
    <vCatalogItemVue v-for="product in PRODUCTS" :key="product.article" :product_data="product" @addToCart= "addToCart">
    </vCatalogItemVue>
    </div>
  </div>
</template>

<script>
import vCatalogItemVue from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItemVue
  },
  props: {},
  data () {
    return {

    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"])
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    addToCart (data) {
      this.ADD_TO_CART(data);
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log("Данные пришли");
        }
      })
  }
};
</script>

<style lang="scss">
.v-catalog {
   padding: 80px 0;
   &__title {
     font-size: 36px;
     text-transform: uppercase;
     font-weight: bold;
   }
  &__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  }
  &__link_to_cart {
   position: absolute;
   top: 15px;
   right: 35px;
   padding: 15px;
   display: flex;
   align-items: center;
   font-size: 24px;
   color: crimson;
  }
}

</style>
