<template>
  <div>
    <span class="loader">Loading</span>
  </div>
</template>
<style scoped>
div {
  background: #00000058;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 75px;
  bottom: 0;
  right: 0;
  left: 0;
}
.loader {
  display: inline-block;
  text-align: center;
  line-height: 86px;
  text-align: center;
  position: relative;
  padding: 0 48px;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  color: #156a13;
}
.loader:before,
.loader:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  background: currentColor;
  position: absolute;
  animation: load 0.7s infinite alternate ease-in-out;
  top: 0;
}
.loader:after {
  top: auto;
  bottom: 0;
}
@keyframes load {
  0% {
    left: 0;
    height: 43px;
    width: 15px;
    transform: translateX(0);
  }
  50% {
    height: 10px;
    width: 40px;
  }
  100% {
    left: 100%;
    height: 43px;
    width: 15px;
    transform: translateX(-100%);
  }
}
</style>
