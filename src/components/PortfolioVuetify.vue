<template>
  <div>
    <v-card color="primary">
      <v-card-title class="text-h3 white--text font-weight-bold">
        My Portfolio
      </v-card-title>
      <v-container fluid>
      <v-row dense justify="center">
        <v-col
          v-for="card in cardList"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="250px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn
                color="info"
                text
                :href="card.to"
                target="_blank"
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
  </div>
</template>
<script>
  export default {
    name:'PortfolioVuetify',
    data() {
    return {
      cardList: [
        {
          title: "ToDo - VueCDN",
          to: "https://danielnahun.github.io/toDo-VueCDN/ ",
          src: "https://github.com/DANIELNAHUN/toDo-VueCDN/raw/main/index.png",
          flex:4
        },
        {
          title: "Contador - VueCDN",
          to: "https://danielnahun.github.io/ContadorVue/",
          src: "https://github.com/DANIELNAHUN/ContadorVue/raw/master/app.png",
          flex:4
        },
        {
          title: "Testing Flexbox - VueCli",
          to: "https://danielnahun.github.io/testing-flexbox/  ",
          src: "https://github.com/DANIELNAHUN/testing-flexbox/raw/main/page.png",
          flex:4
        },
        {
          title: "Testing Router - Vue Cli",
          to: "https://danielnahun.github.io/testing-router-vue/",
          src: "https://github.com/DANIELNAHUN/testing-router-vue/blob/main/apiPage.png?raw=true",
          flex:4
        },
        {
          title: "My Portfolio - Vue Cli",
          to: "https://danielnahun.github.io/portfolio-vue/",
          src: "https://github.com/DANIELNAHUN/testing-router-vue/blob/main/apiPage.png?raw=true",
          flex:4
        },
      ],
    };
  },
  }
</script>