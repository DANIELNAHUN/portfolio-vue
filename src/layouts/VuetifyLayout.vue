<template>
  <div class="primary">
    <v-app-bar color="primary" dense dark height="100">
      <h2 class="white--text text--ligthen-2">
        D<span class="secondary--text">C</span>
      </h2>
      <v-spacer></v-spacer>
      <v-hover v-slot="{ hover }">
        <v-btn
          text
          tile
          class="text-none"
          :class="{ 'secondary black--text': hover }"
          to="/"
          >Home</v-btn
        >
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-btn
          text
          tile
          class="text-none"
          :class="{ 'secondary black--text': hover }"
          to="/vuetifyabout"
          >About Me</v-btn
        >
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-btn
          text
          tile
          class="text-none"
          :class="{ 'secondary black--text': hover }"
          to="/portfoliovuetify"
          >Projects</v-btn
        >
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-btn
          text
          tile
          class="text-none"
          :class="{ 'secondary black--text': hover }"
          to="/contactvuetify"
          >Contact Me</v-btn
        >
      </v-hover>
    </v-app-bar>
    <slot></slot>
    <FooterVuetify/>
  </div>
</template>
<script>
import FooterVuetify from "@/components/FooterVuetify.vue";
export default {
  name: "DefaulLayout",
  components: {
    FooterVuetify,
},
  created() {},
};
</script>
<style scoped>
</style>