<template>
  <div class="home-container">
    <v-row align="center">
      <v-col sm="6" a>
        <div class="white--text text-center">
          <h1 class="text-h3 font-weight-bold">
            I'm <span class="secondary--text">Daniel</span> Calcina
          </h1>
          <p class="text-h4 my-3 home-container__subtitle">Web Developer</p>
          <h3>Using tools like Vue, Vuetify, Javascript, HTML and CSS</h3>
          <br>
          <v-btn
            color="secondary"
            target="_blank"
            rounded
            href="https://docs.google.com/document/d/1PWonPvtNTc67SIxtY5cl0FUwdgWZhkYZpBzlB6pocKo/edit?usp=sharing"
          >
            <span class="primary--text"> CV </span>
          </v-btn>
        </div>
      </v-col>
      <v-col sm="6">
        <v-img
          class="home-container__image"
          width="350"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.home-container {
  &__subtitle {
    background-image: url(https://c.tenor.com/IrUuJA9J_JoAAAAC/trippy-color.gif);
    background-size: cover;
    color: transparent;
    background-clip: text;
    text-transform: 40px;
    font-weight: bold;
  }
  &__image {
    border: 6px solid var(--v-secondary-base);
  }
}
</style>