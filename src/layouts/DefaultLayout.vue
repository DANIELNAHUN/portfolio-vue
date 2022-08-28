<template>
  <div>
    <div class="navbar">
      <div class="brand">
        <h2>D<span>C</span></h2>
      </div>
      <ul class="menu">
        <li>
          <a><router-link to="/">Inicio</router-link></a
          >
        </li>
        <li>
          <a href="#about-section">Quien soy</a>
        </li>
        <li>
          <a><router-link to="/portfolio">Portafolio</router-link></a>
        </li>
        <li>
          <a><router-link to="/contact">Contacto</router-link></a>
        </li>
      </ul>
    </div>
    <div>
      <slot></slot>
    </div>
    <FooterView/>
  </div>
</template>

<script>
import FooterView from "../components/FooterComponent.vue";
export default{
  name: "DefaulLayout",
  components: {
    FooterView,
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2em;
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