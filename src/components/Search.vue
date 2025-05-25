<template>
  <form class="d-flex form_search">
    <input
      class="form-control me-2"
      type="text"
      placeholder="Search"
      v-model="searchText"
    />
    <button class="btn btn-primary" type="button">Поиск</button>
    <div class="rezult_search">
      <div v-for="plant in plants" :key="plant.id" class="plant-item">
        <router-link :to="'/plant/' + plant.id">
          <img :src="plant.image" :alt="plant.name" class="plant-image" />
          <span class="plant-name">{{ plant.name }}</span>
        </router-link>
      </div>
    </div>
  </form>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();
const searchText = ref("");
const plants = computed(() => store.getters.getPlantsByText(searchText.value));
console.log(">>>", plants.value);
</script>

<style scoped>
.form_search {
  position: relative;
}
.rezult_search {
  position: absolute;
  width: 100%;
  top: 45px;
  border-radius: 10px;
  background: #000000d4;
  z-index: 10;
}
.plant-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
}

.plant-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.plant-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
