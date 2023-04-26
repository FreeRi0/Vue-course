<template>
<img src="../assets/cart.png" class="v-cart__logo" alt="cart"/>
  <div class="v-cart">
    <vCartItem v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item" @deleteCart="deleteCart(index)">
    </vCartItem>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue"
import { mapActions } from "vuex"
export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteCart (index) {
      this.DELETE_FROM_CART(index)
    }
  },
  watch: {}
}
</script>

<style lang="scss">
   .v-cart {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #C4B6FA;
   }
</style>