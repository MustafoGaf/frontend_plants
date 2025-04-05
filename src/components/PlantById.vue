<template>
  <not-found v-if="plant.length == 0" />

  <div class="container" v-else>
    <!-- Заголовок страницы -->
    <h1 class="text-center mt-5 mb-4">Информация о растении</h1>

    <!-- Карточка с информацией о растении -->
    <div class="plant-card">
      <div class="row g-2">
        <!-- Изображение растения -->
        <div class="col-md-4">
          <img
            src="https://tualatinswcd.org/wp-content/uploads/2022/07/StJohnsWortFlower01Small_TSWCD.png"
            alt="Зверобой продырявленный"
            class="plant-image img-fluid rounded-start"
          />
        </div>
        <!-- Основная информация о растении -->
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{ plant.plant.name }}</h2>
            <p class="card-text">
              <strong>Латинское название:</strong> {{ plant.plant.latin_name }}
            </p>
            <p class="card-text">
              <strong>Семейство:</strong> {{ plant.plant.family }}
            </p>
            <p class="card-text description-text">
              {{ plant.plant.description }}
            </p>
            <p class="card-text">
              <strong>Местообитание:</strong> {{ plant.plant.habitat }}
            </p>
            <p class="card-text">
              <strong>Медицинское применение:</strong>
              {{ plant.plant.medicinal_uses }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Раздел "Локации" -->
    <div class="mt-5">
      <h2 class="section-title">Локации</h2>
      <div class="row">
        <div class="col-md-6" v-if="typeof plant.locations == 'string'">
          <div class="location-item">
            <h5>{{ plant.locations }}</h5>
          </div>
        </div>
        <div
          class="col-md-6"
          v-else
          v-for="location in plant.locations"
          :key="location.location_id"
        >
          <div class="location-item">
            <h5>{{ location.region }}</h5>
            <p>{{ location.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Раздел "Химические соединения" -->
    <div class="mt-5">
      <h2 class="section-title">Химические соединения</h2>
      <div class="row">
        <div class="col-md-6" v-if="typeof plant.chemical == 'string'">
          <div class="chemical-item">
            <h5>{{ plant.chemical }}</h5>
          </div>
        </div>
        <div
          class="col-md-6"
          v-else
          v-for="chem in plant.chemical"
          :key="chem.chem_id"
        >
          <div class="chemical-item">
            <h5>{{ chem.chem_name }}</h5>
            <p>{{ chem.chem_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import NotFound from "../components/NotFound.vue";
const store = useStore();
const plant = computed(() => store.getters.getPlant);
</script>

<style scoped>
/* Дополнительные стили */
body {
  background-color: #f8f9fa;
  font-family: "Arial", sans-serif;
}
.plant-card {
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
}
.plant-image {
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}
.description-text {
  font-size: 1rem;
  color: #34495e;
}
.location-item {
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.chemical-item {
  background-color: #d1ecf1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
