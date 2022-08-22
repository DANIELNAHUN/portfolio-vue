<template>
  <div class="contact-section">
    <div class="contact-heading">
      <h2>Keep in touch</h2>
      <div class="divider"></div>
    </div>
    <div class="container-contact">
      <img
        src="https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543288/samples/img-opacity50_jgruyl.png"
        alt=""
      />
      <div class="contact-form">
        <h4>Send me a message...</h4>
        <form class="form-group">
          <input type="text" placeholder="Name" class="input" />
          <input type="email" placeholder="Email" class="input" />
          <textarea
            name="message"
            placeholder="Place your message here..."
          ></textarea>
          <button type="submit" class="btn-submit">Send message</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact-section {
  width: 100vw;
  background-color: #191c32;
  color: #fff;
}

.contact-heading h2 {
  font-size: 2.5em;
  color: #fff;
}

.contact-section {
  padding: 3em;
}

.container-contact {
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.contact-section img {
  width: 750px;
  height: 700px;
  bottom: 0px;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-top: 2em;
}
.form-group textarea {
  height: 150px;
  padding: 1.5em;
  background: none;
  border: 1px solid #fff;
  color: #fff;
}

.form-group .input {
  padding: 10px 20px;
  margin-bottom: 1em;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
}

.form-group .btn-submit {
  padding: 10px 20px;
  margin: 1em;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  background-color: aqua;
}
</style>