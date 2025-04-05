<template>
  <div class="container contact-container">
    <!-- Заголовок страницы -->
    <h1 class="contact-title">Контакты</h1>

    <!-- Раздел: Информация о вас -->
    <div class="contact-section">
      <h2 class="text-center">Обо мне</h2>
      <p class="contact-info text-center">
        Меня зовут [Ваше Имя]. Я разработчик программного обеспечения и создал
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
            Телефон: <a href="tel:+992123456789">+992 123 45 67 89</a>
          </p>
        </div>

        <!-- Email -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-envelope-fill contact-icon"></i>
            Email:
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </div>

        <!-- GitHub -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-github contact-icon"></i>
            GitHub:
            <a href="https://github.com/yourusername" target="_blank"
              >github.com/yourusername</a
            >
          </p>
        </div>

        <!-- Telegram -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-telegram contact-icon"></i>
            Telegram:
            <a href="https://t.me/yourusername" target="_blank"
              >@yourusername</a
            >
          </p>
        </div>

        <!-- LinkedIn -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-linkedin contact-icon"></i>
            LinkedIn:
            <a href="https://www.linkedin.com/in/yourusername" target="_blank"
              >linkedin.com/in/yourusername</a
            >
          </p>
        </div>

        <!-- WhatsApp -->
        <div class="col-md-6 text-center">
          <p class="contact-info">
            <i class="bi bi-whatsapp contact-icon"></i>
            WhatsApp:
            <a href="https://wa.me/+992123456789" target="_blank"
              >+992 123 45 67 89</a
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
