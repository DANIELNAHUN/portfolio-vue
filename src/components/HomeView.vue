<template>
  <div>
    <div class="wrapper">
      <div class="main">
        <div class="info-content">
          <h1>I'm <span>Daniel</span> Calcina</h1>
          <p>Web Developer</p>
          <h3>Using tools like Vue, Vuetify, Javascript, HTML and css</h3>
          <a download href="#"
            ><button class="download-cv">Download CV</button></a
          >
        </div>
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scr: "",
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #191c32;
  color: #fff;
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 2em;
}
.brand {
  margin-top: -7px;
}
.brand span {
  color: aqua;
}
.menu {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.menu li {
  list-style: none;
}
.menu a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
}

.menu li:hover a {
  background-color: aqua;
  color: #191c32;
}

.menu .active {
  color: aqua;
}

.menu li a:hover {
  color: #66e7c8;
}

.main {
  margin: 0 auto;
  width: 80vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2em;
}

h1 {
  font-size: 3em;
}

.info-content span {
  color: aqua;
}

.info-content p {
  background-image: url(https://c.tenor.com/IrUuJA9J_JoAAAAC/trippy-color.gif);
	background-size: cover;
	color: transparent;
  background-clip: text;
	text-transform: uppercase;
	font-size: 40px;
  font-weight: bold;
	margin: 10px 0;
}

.download-cv {
  padding: 10px 20px;
  background-color: aqua;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  cursor: pointer;
  -webkit-box-shadow: 1px 3px 11px -5px rgba(102, 231, 200, 0.69);
  -moz-box-shadow: 1px 3px 11px -5px rgba(102, 231, 200, 0.69);
  box-shadow: 1px 3px 11px -5px rgba(102, 231, 200, 0.69);
}

.download-cv:hover {
  background-color: azure;
  box-shadow: none;
}

.main img {
  border: 7px solid aqua;
  width: 350px;
  height: 520px;
  z-index: 1;
}
</style>