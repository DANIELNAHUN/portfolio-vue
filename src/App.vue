<template>
  <v-app>
    <div id="app">
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
  </v-app>
</template>

<style lang="scss" scoped>
</style>
