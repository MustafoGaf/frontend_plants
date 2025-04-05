<template>
  <div class="container about-container">
    <!-- Заголовок страницы -->
    <h1 class="about-title">
      О проекте: Дикорастущие растения Республики Таджикистан
    </h1>

    <!-- Раздел: Цель проекта -->
    <div class="about-section">
      <h2 class="about-section-title">Цель проекта</h2>
      <p class="about-section-text">
        Проект направлен на создание единой информационной системы для сбора,
        хранения и анализа данных о дикорастущих растениях Республики
        Таджикистан. Это позволит сохранить уникальное биоразнообразие региона,
        а также способствовать научным исследованиям, экологическому мониторингу
        и развитию фармацевтической промышленности.
      </p>
    </div>

    <!-- Раздел: Значение проекта -->
    <div class="about-section">
      <h2 class="about-section-title">Значение проекта</h2>
      <p class="about-section-text">
        Дикорастущие растения играют важную роль в экосистеме Таджикистана. Они
        являются источником пищи, лекарственных средств и сырья для местного
        населения. Проект помогает систематизировать информацию о растениях, их
        ареалах распространения, химическом составе и медицинском применении.
        Это способствует сохранению природного наследия и развитию устойчивого
        использования ресурсов.
      </p>
    </div>

    <!-- Раздел: Возможности системы -->
    <div class="about-section">
      <h2 class="about-section-title">Возможности системы</h2>
      <ul class="about-section-text">
        <li>Добавление информации о растениях.</li>
        <li>Поиск растений по названию, семейству или местоположению.</li>
        <li>Просмотр изображений и описаний растений.</li>
        <li>Анализ медицинского применения и химического состава.</li>
      </ul>
    </div>

    <!-- Раздел: Пример изображения -->
    <div class="about-section text-center">
      <h2 class="about-section-title">Пример растения</h2>
      <img
        src="https://tualatinswcd.org/wp-content/uploads/2022/07/StJohnsWortFlower01Small_TSWCD.png"
        alt="Пример растения"
        class="about-image"
      />
      <p class="about-section-text mt-3">
        На изображении показан зверобой продырявленный (Hypericum perforatum),
        который широко распространен в Таджикистане и используется в народной
        медицине.
      </p>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
</script>
<style scoped>
.about-container {
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.about-title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
}
.about-section {
  margin-top: 30px;
}
.about-section-title {
  font-size: 1.5rem;
  color: #34495e;
}
.about-section-text {
  font-size: 1rem;
  color: #555555;
}
.about-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
