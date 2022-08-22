<template>
  <div class="footer">
      <div class="footer-content">
        <h2>John Carter</h2>
        <h5>Frontend Developer</h5>
      </div>
      <div class="sotial-networks">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-twitter-square"></i>
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
  width: 100px;
  height: 200px;
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
</style>