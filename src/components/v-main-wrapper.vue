<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "v-main-wrapper",
  components: {
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
