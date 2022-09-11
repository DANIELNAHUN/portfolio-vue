<template>
  <div>
    <v-card color="primary">
      <v-card-title class="text-h4 white--text font-weight-bold"
        >Keep in Touch</v-card-title
      >
      <v-row align="center">
        <v-col sm="7">
          <v-img
            src="https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543288/samples/img-opacity50_jgruyl.png"
          >
          </v-img>
        </v-col>
        <v-col sm="5">
          <v-card outlined color="transparent"
          max-width="80%">
            <v-card-text class="white--text">
              <p class="text-h6 white--text font-weight-bold">
                Send me a message...
              </p>
              <br>
              <v-text-field dark>
                <template v-slot:label>
                  Name
                  <v-icon>mdi-rename-box</v-icon>
                </template>
              </v-text-field>
              <br>
              <v-text-field dark hint="user@gmail.com" persistent-hint type="email" :rules="[rules.email]">
                <template v-slot:label>
                  Email
                  <v-icon>mdi-email</v-icon>
                </template>
              </v-text-field>
              <br>
              <v-textarea
                v-model="value"
                dark
                :rules="[rules.cont]"
                loading
                label="Enter your resumen text"
                hint="No more 100 words, please!" persistent-hint
                placeholder="Start typing..."
              >
                <template v-slot:progress>
                  <v-progress-linear
                    :value="progress"
                    :color="color"
                    absolute
                    height="8px"
                  ></v-progress-linear>
                </template>
              </v-textarea>
              <v-btn text :color="color">Send Message</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      rules:{
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        cont: v => v.length <= 100 || 'Max 100 characters',
      }
    };
  },
  computed: {
    progress() {
      return Math.min(100, this.value.length * 1);
    },
    color() {
      return ["success", "warning", "error"][Math.floor(this.progress / 40)];
    },
  },
};
</script>