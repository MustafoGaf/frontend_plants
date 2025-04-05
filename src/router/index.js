import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contacts from "../views/Contacts.vue";
import Plant from "../views/Plant.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contacts", component: Contacts, name: "contacts" },

  { path: "/plant/:id", component: Plant, name: "Plant" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
