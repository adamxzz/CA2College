<template>
  <div class="container col-6">
    <b-col>
      <h2>Edit Enrolment</h2>
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
        <b-form-input
          id="date-input"
          v-model="form.date"
          placeholder="Enter the date"
          type="text"
          required
        ></b-form-input>
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

      <b-button @click="submitForm()">Submit</b-button>
      <b-button @click="cancel()">Cancel</b-button>
    </b-col>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EnrolmentEdit",
  data() {
    return {
      form: {
        id: "",
        date: "",
        time: "",
        status: "",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let token = localStorage.getItem("token");

      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/enrolments/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
          this.form.title = response.data.data.id;
          this.form.code = response.data.data.date;
          this.form.description = response.data.data.time;
          this.form.points = response.data.data.status;
        })
        .catch((error) => console.log(error));
    },
    submitForm() {
      let token = localStorage.getItem("token");

      axios
        .put(
          `https://college-api-mo.herokuapp.com/api/enrolments/${this.$route.params.id}`,
          this.form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "enrolment_show",
            params: {
              id: this.$route.params.id,
            },
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