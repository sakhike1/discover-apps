import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/Signup", component: "Signup" },
  { path: "/Login", component: "Login" },
  { path: "/BlogPage", component: "BlogPage" },
  { path: "/Footer", component: "Footer" },
  { path: "/Lastpage", component: "Lastpage" },
  { path: "/dashboard", component: "dashboard" },
  { path: "/home", component: "home" },
  { path: "home", component: "Home", meta: { requiresAuth: true } },
 
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
