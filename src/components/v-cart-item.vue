<template>
  <div class="v-cart-item">
    <img class="v-cart-item__img" :src="require('../assets/images/' + cart_item_data.image)" alt="picture">
    <div>
      <h3>{{ cart_item_data.name }}</h3>
       <p>{{ cart_item_data.price }}</p>
    </div>
    <div class="v-cart-item__quantity">
       <p class="v-cart-item__quantity_text">Количество: </p>
       <span class="v-cart-item__quantity_count">{{ cart_item_data.quantity }}</span>
    </div>
    <button @click="deleteCart" class="v-cart-item__delete">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {};
  },
  computed: {},
  methods: {
    deleteCart () {
      this.$emit("deleteCart");
    }
  },
  watch: {}
};
</script>

<style lang="scss">
 .v-cart-item {
  padding: 25px 0px 25px 0px;
  box-shadow: 0px 0px 8px 0px #9E6FEA;
  background: #fff;
  width: 350px;
  margin: 0px auto;
  &__delete {
    display: block;
    margin: 15px auto;
    width: 100px;
    height: 38px;
    border: none;
    background: #9E6FEA;
    color: #fff;
    cursor: pointer;
  }
  &__quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 }
</style>
