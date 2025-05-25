<template>
  <div class="container contact-container">
    <!-- Заголовок страницы -->
    <h1 class="contact-title">Контакты</h1>

    <!-- Раздел: Информация о вас -->
    <div class="contact-section">
      <h2 class="text-center">Обо мне</h2>
      <p class="contact-info text-center">
        Меня зовут Гафоров Мустафо Абдулмаджитович. Я разработчик программного обеспечения и создал
        информационную систему для управления данными о дикорастущих растениях
        Республики Таджикистан. Если у вас есть вопросы или предложения,
        свяжитесь со мной через следующие каналы связи:
      </p>
    </div>

    <!-- Раздел: Контактная информация -->
    <div class="contact-section">
      <div class="row justify-content-center">
        <!-- Телефон -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-telephone-fill contact-icon"></i>
            Телефон: <a href="tel:+992902000436">+992 90 2000 436</a>
          </p>
        </div>

        <!-- Email -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-envelope-fill contact-icon"></i>
            Email:
            <a href="mailto:muga200301@gmail.com">muga200301@gmail.com</a>
          </p>
        </div>

        <!-- GitHub -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-github contact-icon"></i>
            GitHub:
            <a href="https://github.com/MustafoGaf" target="_blank"
              >github.com/MustafoGaforov</a
            >
          </p>
        </div>

        <!-- Telegram -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-telegram contact-icon"></i>
            Telegram:
            <a href="https://t.me/mustafoGaforov_bot" target="_blank"
              >MustafoGaforov</a
            >
          </p>
        </div>

        <!-- LinkedIn -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-linkedin contact-icon"></i>
            LinkedIn:
            <a href="https://www.linkedin.com/in/" target="_blank"
              >linkedin.com</a
            >
          </p>
        </div>

        <!-- WhatsApp -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-whatsapp contact-icon"></i>
            WhatsApp:
            <a href="https://wa.me/+992937074030" target="_blank"
              >+992 937 074 030</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
</script>
<style scoped>
.contact-container {
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.contact-title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
}
.contact-section {
  margin-top: 30px;
}
.contact-info {
  font-size: 1.1rem;
  color: #555555;
}
.contact-icon {
  margin-right: 10px;
  font-size: 1.2rem;
  color: #34495e;
}
.contact-links a {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
}
.contact-links a:hover {
  text-decoration: underline;
}
</style>
