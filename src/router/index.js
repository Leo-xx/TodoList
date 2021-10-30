import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import About from "../views/About";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];
const router = new createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
