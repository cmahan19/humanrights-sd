<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Contact Us</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                label="Name"
                v-model="name"
                required
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="email"
                required
                type="email"
              ></v-text-field>
              <v-textarea
                label="Message"
                v-model="message"
                required
              ></v-textarea>
              <v-btn type="submit" color="primary">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // TODO: Send the form data to your server
      console.log('Form submitted!');
    },
  },
};
</script>
