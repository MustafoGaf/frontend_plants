<template>
  <section>
    <div class="row row-cols-1 row-cols-md-3 g-2">
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
