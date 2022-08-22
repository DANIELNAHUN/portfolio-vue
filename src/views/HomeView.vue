<template>
  <div class="home">
    <HomeComponent/>
    <AboutComponent/>
    <PortfolioComponent/>
    <ContactComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from '@/components/AboutComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import PortfolioComponent from '@/components/PortfolioComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  }
}
</script>
