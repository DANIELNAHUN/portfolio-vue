<template>
  <div class="home">
    <HomeView/>
    <AboutView/>
    <PortfolioView/>
    <ContactView/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutView from '@/components/AboutView.vue';
import ContactView from '@/components/ContactView.vue';
import HomeView from '@/components/HomeView.vue';
import PortfolioView from '@/components/PortfolioView.vue';

export default {
  name: 'HomeView',
  components: {
    HomeView,
    AboutView,
    PortfolioView,
    ContactView
  }
}
</script>
