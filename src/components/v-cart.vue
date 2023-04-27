<template>
  <router-link :to="{ name: 'catalog' }">
    <div class="v-cart__header">
      <div class="v-cart__link_to_cart"><img src="../assets/cart.png" alt="cart">{{ CART.length }}</div>
      <button class="v-cart__back">Назад</button>
    </div>
  </router-link>

  <p v-if="!CART.length" class="v-cart__not-found">
    Товаров в корзине не обнаружено...
  </p>

  <h2 class="v-cart__title">Ваша корзина</h2>
  <div class="v-cart">
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteCart="deleteCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    >
    </vCartItem>
    <div class="v-cart__total">
      <p class="v-cart__total_name">Итого:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce((sum, el) => {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  watch: {},
};
</script>

<style lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 30px;
  padding-bottom: 90px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px;
    display: flex;
    justify-content: center;
    background: #9e6fea;
    color: #fff;
    font-size: 20px;
    &_name {
      margin-right: 15px;
    }
  }
  &__back {
    width: 150px;
    height: 40px;
    background: #9e6fea;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  &__header {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
  }

  &__link_to_cart {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: crimson;
  }
  &__title {
    font-size: 32px;
  }
}
</style>
