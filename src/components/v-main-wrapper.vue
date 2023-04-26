<template>
  <div class="v-main-wrapper">
    <vCatalogVue></vCatalogVue>
    <vCartVue v-if="CART.length" :cart_data="CART"></vCartVue>
  </div>
</template>

<script>
import vCatalogVue from "./v-catalog.vue";
import vCartVue from "./v-cart.vue";
import { mapGetters } from "vuex"
export default {
  name: "v-main-wrapper",
  components: {
    vCatalogVue,
    vCartVue
  },
  props: {},
  data () {
    return {};
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss">
.v-main-wrapper {
  min-width: 900px;
  margin: 0px auto;
}
</style>
