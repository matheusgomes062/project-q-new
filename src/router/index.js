import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
    // children: [
    //   {
    //     path: "/",
    //     name: "Minha Conta",
    //     component: minhaConta,
    //     children: [
    //       {
    //         path: "/",
    //         name: "Bolsas Favoritas",
    //         component: bolsasFavoritas
    //       },
    //     ]
    //   }
    // ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
