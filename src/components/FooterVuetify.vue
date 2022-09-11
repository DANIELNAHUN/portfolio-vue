<template>
  <div>
    <v-row align="center" style="height: 150px" no-gutters>
      <v-col>
        <div class="secondary text-center">
          <div class="primary--text">
            <h3 class="text-h4 font-weight-bold py-6">Daniel Calcina</h3>
            <h3>Front End Developer</h3>
            <v-card-text>
              <v-btn
                v-for="(icons,index) in iconlist"
                :key="index"
                :href="icons.link"
                class="mx-4 white--text"
                icon
                target="_blank"
              >
                <v-icon size="24px">
                  {{ icons.name }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "FooterVuetify",
  data() {
    return {
      iconlist: [
        { name: "mdi-facebook", link: "https://www.facebook.com/danahcalfu" },
        { name: "mdi-twitter", link: "" },
        {
          name: "mdi-linkedin",
          link: "https://linkedin.com/in/daniel-nahun-calcina-fuentes/",
        },
        {
          name: "mdi-instagram",
          link: "https://www.instagram.com/calcinafuentes.daniel/",
        },
      ],
    };
  },
};
</script>