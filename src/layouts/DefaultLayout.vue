<template>
  <div>
    <div class="navbar">
      <div class="brand">
        <h2>D<span>C</span></h2>
      </div>
      <ul class="menu">
        <li>
          <a href="#home-section">Inicio</a
          >
        </li>
        <li>
          <a href="#about-section">Quien soy</a>
        </li>
        <li>
          <a href="#portfolio-section">Portafolio</a>
        </li>
        <li>
          <a href="#contact-section">Contacto</a>
        </li>
      </ul>
    </div>
    <div>
      <slot></slot>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
export default{
  name: "DefaulLayout",
  components: {
    AppFooter,
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2em;
  background-color: #191c32;
}
.brand {
  margin-top: -7px;
}
.brand span {
  color: aqua;
}
.menu {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.menu li {
  list-style: none;
}
.menu a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
}

.menu li:hover a {
  background-color: aqua;
  color: #191c32;
}

.menu .active {
  color: aqua;
}

.menu li a:hover {
  color: #66e7c8;
}
</style>