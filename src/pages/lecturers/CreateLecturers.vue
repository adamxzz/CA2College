<template>
  <div class="col-6 container">
    <b-col>
      <h2>Create a Lecturer</h2>
      <b-form-group label="Name" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="form.name"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Address" label-for="address-input">
        <b-form-textarea
          id="address-input"
          v-model="form.address"
          placeholder="Enter an address"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Phone" label-for="phone-input">
        <b-form-input
          id="phone-input"
          v-model="form.phone"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-button @click="submitForm()">Submit</b-button>
      <b-button @click="cancel()">Cancel</b-button>
    </b-col>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CreateLecturers",
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      let token = localStorage.getItem("token");
      axios
        .post("https://college-api-mo.herokuapp.com/api/lecturers", this.form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          this.$router.push({
            name: "lecturers_index",
          });
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>