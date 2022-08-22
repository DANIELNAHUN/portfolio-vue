<template>
  <div class="portfolio">
    <div class="portfolio-heading">
      <h2>My Portfolio</h2>
      <div class="divider"></div>
    </div>
    <div class="container">
      <div class="card" >
        <div class="card__img"></div>
        <div class="card__title">
          <h2>{{card[0].title}}</h2>
        </div>
        <div class="card__desc">
          <h4>{{card[0].details}}</h4>
        </div>
        <div class="button-content">
          <button class="project-details-button download-cv">
            <a href="#">Miralo</a>
          </button>
        </div>
      </div>
    </div>
    <!--
    <FooterView/>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: [
        {
          id: 0,
          title: "ToDo - VueCDN",
          details: "Listado de Tareas ",
          link: "https://danielnahun.github.io/toDo-VueCDN/ ",
        },
        {
          id: 1,
          title: "Contador -VueCDN",
          details: "Contador con barra de progreso",
          link: "https://danielnahun.github.io/ContadorVue/",
        },
        {
          id: 2,
          title: "Testing Flexbox - VueCli",
          details:
            "Diversos Componentes Cards, Servicio de Música, Template para Negocios, Servicio de Ventas de Autos",
          link: "https://danielnahun.github.io/testing-flexbox/  ",
        },
        {
          id: 3,
          title: "Testing Router -Vue Cli",
          details:
            "Componentes enrutados usando la API de galería de imágenes en Unsplash, carta de evaluación de cursos, y un cronómetro que calcula el paso entre la fecha indicada y la fecha actual.",
          link: "https://danielnahun.github.io/testing-router-vue/",
        },
      ],
    };
  },
};
</script>
<!--
<script>
import FooterView from '../components/FooterView.vue';
export default {
  name: 'FooterView',
  components:{
    FooterView,
}
}
</script>
-->
<style lang="scss" scoped>
.portfolio {
  width: 100vw;
  background-color: #191c32;
  color: #fff;
}

.portfolio-heading {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio-heading h2 {
  font-size: 2.5em;
  color: #fff;
}

.portfolio .container {
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 300px;
  background-color: #2b3058;
  margin: 1em;
}

.card__img {
  width: 100%;
  height: 150px;
  background-image: url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543491/samples/2-original_agisst.png);
  background-size: cover;
}

.card__title {
  padding: 20px;
}

.card__proyect-links {
  display: flex;
  justify-content: space-evenly;
}
.card__proyect-links a {
  color: #fff;
  text-decoration: none;
}

.card__proyect-links i {
  font-size: 1.5em;
}

.button-content {
  display: flex;
  justify-content: center;
  margin: 1em;
}

.project-details-button a {
  text-decoration: none;
  color: #191c32;
}
</style>