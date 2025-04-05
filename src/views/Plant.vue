<template>
  <div class="container-xl">
    <loading v-if="loadings" />
    <plant-by-id v-else />
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Loading from "../components/Loading.vue";
import PlantById from "../components/PlantById.vue";
const route = useRoute();
console.log(route.params.id);
const store = useStore();
const loadings = computed(() => store.getters.getLoading);
onMounted(() => {
  store.dispatch("fetchPlantById", route.params.id);
});
</script>
