<template>
  <section>
    <div class="row row-cols-1 row-cols-md-3 g-2 d_grid">
      <plants-cart v-for="plant in plants" :key="plant.id" :plant="plant" />
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import PlantsCart from "./PlantsCart.vue";
import { useStore } from "vuex";
const store = useStore();
const plants = computed(() => store.getters.getPlants);
</script>
<style scoped>
@media (max-width: 500px) {
  .d_grid {
    display: grid !important;
    justify-content: center;
  }
}
</style>
