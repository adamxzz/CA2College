<template>
  <div class="col-6 container">
    <b-col>
      <h2>Create an Enrollment</h2>

 <b-form-group label="Id" label-for="id-input">
        <b-form-input
          id="id-input"
          v-model="form.id"
          placeholder="Enter a id"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Date" label-for="date-input">
        <b-form-datepicker
          id="date-input"
          v-model="form.date"
          placeholder="Enter the date"
          type="text"
          required
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group label="Time" label-for="time-input">
        <b-form-input
          id="time-input"
          v-model="form.time"
          placeholder="Enter the time"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Status" label-for="status-input">
        <b-form-input
          id="status-input"
          v-model="form.status"
          placeholder="Enter the status"
          required
        ></b-form-input>
      </b-form-group>

      <b-button variant="success" @click="submitForm()">Submit</b-button>
      <b-button variant="danger" @click="cancel()">Cancel</b-button>
    </b-col>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateEnrolment",
  data() {
    return {
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
    };
  },
  methods: {
    submitForm() {
      let token = localStorage.getItem("token");
      axios
        .post("https://college-api-mo.herokuapp.com/api/enrolments", this.form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          this.$router.push({
            name: "enrolments_index",
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