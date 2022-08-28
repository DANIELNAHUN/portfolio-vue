<template>
  <div class="about">
    <img
      src="https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543288/samples/about_grtker.png"
      alt=""
    />
    <div class="about-info">
      <h2>About me</h2>
      <div class="divider"></div>
      <p>
        Daniel Nahun Calcina Fuentes was born on December 10, 1999, in the city of Lima - Peru.
      </p>
      <p>
        He currently lives in the city of Ilo, in the south of the country, where he also completed
         his studies at the National University of Moquegua, in the professional school of Systems
          Engineering and Informatics.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100vw;
  align-items: center;
  color: #ffff;
}

.about img {
  width: 100%;
  grid-column: 1/5;
}

.about-info {
  grid-column: 5/10;
  padding: 3em;
}

.about-info h2 {
  font-size: 2em;
  color: #8e9fff;
}

.divider {
  height: 4px;
  width: 60px;
  background-color: aqua;
  margin-top: 5px;
  margin-bottom: 2em;
}

.about p {
  margin-bottom: 1em;
}
</style>