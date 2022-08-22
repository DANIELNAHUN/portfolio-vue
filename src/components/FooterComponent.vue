<template>
  <div class="footer">
      <div class="footer-content">
        <h2>Daniel Calcina</h2>
        <h5>Frontend Developer</h5>
      </div>
      <div class="sotial-networks">
        <a target="_blank" href="https://www.instagram.com/calcinafuentes.daniel/"><v-icon>mdi-instagram</v-icon></a>
        <a target="_blank" href="https://www.facebook.com/danahcalfu"><v-icon>mdi-facebook</v-icon></a>
        <a target="_blank" href="linkedin.com/in/daniel-nahun-calcina-fuentes/"><v-icon>mdi-linkedin</v-icon></a>
      </div>
    </div>
</template>
<script>
export default{
  name:'FooterView',
}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 170px;
  padding: 2em;
  background-color: aqua;
}

.footer-content h2 {
  font-size: 3em;
}

.footer-content h5 {
  font-size: 1.5em;
  text-align: center;
}

.sotial-networks {
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  margin-top: 1em;
}

.sotial-networks i {
  font-size: 1.5em;
}
.sotial-networks a {
  text-decoration: none;
}
</style>