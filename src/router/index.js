import vCartVue from "@/components/v-cart.vue"
import vCatalogVue from "@/components/v-catalog.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "catalog",
    component: vCatalogVue
  },
  {
    path: "/cart",
    name: "cart",
    component: vCartVue,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
