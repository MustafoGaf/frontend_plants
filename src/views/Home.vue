<template>
  <div class="container-xl">
    <h1 class="home_h1">Cписок растеные</h1>
    <loading v-if="loadings" />
    <plants-list v-else />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Loading from "../components/Loading.vue";
import PlantsList from "../components/PlantsList.vue";
const store = useStore();
const loadings = computed(() => store.getters.getLoading);
</script>
<style scoped>
.home_h1 {
  text-align: center;
  margin: 10px 0;
}
</style>
