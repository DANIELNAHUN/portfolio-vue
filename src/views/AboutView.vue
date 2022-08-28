<template>
  <div class="home">

    <AboutComponent id="aboutcomponent"/>
    <PortfolioComponent/>
    <ContactComponent/>
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import PortfolioComponent from '@/components/PortfolioComponent.vue';

export default {
  name: 'AboutView',
  components: {
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
},
  created () {
    window.onload = function () {
    document.getElementById("homecomponent").focus();
}
  },
}
</script>
