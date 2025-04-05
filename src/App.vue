<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-success">
    <div class="container-fluid container_nav">
      <router-link class="navbar-brand" to="/">
        <img :src="logo1" alt="Logo" id="logoImg" />
      </router-link>
      <p class="navbar-brand">Дикорастущeе растениe РТ</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: path == '/' }"
              to="/"
              @click="path = '/'"
              >Главная</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: path == '/about' }"
              to="/about"
              @click="path = '/about'"
              >О приложение</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ active: path == '/contacts' }"
              to="/contacts"
              @click="path = '/contacts'"
              >Контакты</router-link
            >
          </li>
        </ul>
        <search />
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
<script setup>
import logo1 from "../src/assets/logo3.png";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Search from "./components/Search.vue";

const store = useStore();
const route = useRoute();
const path = ref(route.path);
onMounted(() => {
  store.dispatch("fetchPlants"); // Вызываем action при рендере
});
</script>
<style scoped>
p {
  margin-bottom: 0;
}
@media (max-width: 400px) {
  .container_nav a {
    margin-right: 0;
  }
  .container_nav p {
    font-size: 15px;
    font-weight: 600;
  }
}
</style>
