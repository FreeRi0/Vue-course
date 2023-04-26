<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__img" :src="require('../assets/images/' + product_data.image)" alt="picture">
    <h3 class="v-catalog-item__name">{{ product_data.name }}</h3>
    <p class="v-catalog-item__about">{{ product_data.about }}</p>
     <div class="v-catalog-item__down">
      <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <button class="v-catalog-item__btn" @click="addToCart">Купить</button>
     </div>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
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
    addToCart () {
      this.$emit("addToCart", this.product_data)
    }
  },
  watch: {}
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0px 0px 8px 0px #9E6FEA;
  padding: 20px;
  margin: 20px;
  &__name {
    font-size: 28px;
  }
  &__price {
    font-size: 18px;
    font-weight: bold;
  }
  &__about {
    font-size: 16px;
  }
  &__btn {
    display: block;
    width: 150px;
    height: 40px;
    border: none;
    background: #9E6FEA;
    color: #fff;
    cursor: pointer;
  }
  &__down {
     display: flex;
     align-items: center;
     justify-content: space-evenly;
  }
}
</style>
