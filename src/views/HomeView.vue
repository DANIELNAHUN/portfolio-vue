<template>
  <div class="home">
    <HomeComponent id="home-section"/>
    <AboutComponent id="about-section"/>
    <AppPortfolio id="portfolio-section"/>
    <AppContact id="contact-section"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AppAbout.vue';
import AppContact from '@/components/AppContact.vue';
import HomeComponent from '@/components/AppHome.vue';
import AppPortfolio from '@/components/AppPortfolio.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    AboutComponent,
    AppContact,
    AppPortfolio
}
}
</script>
