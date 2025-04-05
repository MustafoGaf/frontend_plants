<template>
  <div class="container not-found-container">
    <!-- Иконка "Не найдено" -->
    <i class="bi bi-exclamation-circle not-found-icon"></i>

    <!-- Заголовок -->
    <h1 class="not-found-title">Данные не найдены</h1>

    <!-- Сообщение для пользователя -->
    <p class="not-found-message">
      К сожалению, запрошенная информация отсутствует. Попробуйте изменить
      параметры поиска или вернуться на главную страницу.
    </p>

    <!-- Кнопка для возврата -->
    <router-link to="/" class="btn btn-primary not-found-button"
      >Вернуться на главную</router-link
    >
  </div>
</template>
<style scoped>
/* Дополнительные стили */
body {
  background-color: #f8f9fa;
  font-family: "Arial", sans-serif;
}
.not-found-container {
  margin-top: 10%;
  text-align: center;
}
.not-found-icon {
  font-size: 10rem;
  color: #adb5bd;
}
.not-found-title {
  font-size: 2rem;
  color: #495057;
}
.not-found-message {
  font-size: 1.2rem;
  color: #6c757d;
}
.not-found-button {
  margin-top: 20px;
}
</style>
