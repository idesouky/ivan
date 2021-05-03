import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Routes from "../views/Routes.vue";
import CheckoutInfo from "../views/CheckoutInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/routes",
    name: "Routes",
    component: Routes,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutInfo,
  },
  // {
  //   path: "/destination",
  //   name: "Destination",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
