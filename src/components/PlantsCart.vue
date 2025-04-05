<template>
  <div class="col">
    <div class="card h-100">
      <img
        :src="plant.image"
        class="card-img-top zoom-effect card_imgs"
        :alt="plant.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ plant.name }}</h5>
        <p class="card-text" style="height: 100px; overflow: hidden">
          {{ plant.description }}
        </p>
      </div>
      <div class="card-footer">
        <router-link :to="'/plant/' + plant.id" class="btn btn-primary"
          >Читать больше</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  plant: Array,
});
</script>
<style scoped>
.card_imgs {
  height: 240px;
}
</style>
