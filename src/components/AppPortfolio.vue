<template>
  <div class="portfolio">
    <div class="portfolio-heading">
      <h2>My Portfolio</h2>
      <div class="divider"></div>
    </div>
    <div class="container">
      <div class="card" v-for="(card, index) in cardList" :key="index">
        <div class="card__img"></div>
        <div class="card__title">
          <h3>{{ card.title }}</h3>
        </div>
        <div class="button-content">
          <v-btn rounded>
            <a target="_blank" :href="card.link">Explore</a>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioView",
  data() {
    return {
      cardList: [
        {
          id: 0,
          title: "ToDo - VueCDN",
          link: "https://danielnahun.github.io/toDo-VueCDN/ ",
        },
        {
          id: 1,
          title: "Contador -VueCDN",
          link: "https://danielnahun.github.io/ContadorVue/",
        },
        {
          id: 2,
          title: "Testing Flexbox - VueCli",
          link: "https://danielnahun.github.io/testing-flexbox/  ",
        },
        {
          id: 3,
          title: "Testing Router -Vue Cli",
          link: "https://danielnahun.github.io/testing-router-vue/",
        },
      ],
    };
  },
};
</script>

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
  height: 300px;
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
  height: 30%;
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

.button-content a {
  text-decoration: none;
}

</style>