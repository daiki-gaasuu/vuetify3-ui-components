import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/icon",
    name: "Icon",
    component: () => import("../views/Icon.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
