<template>
  <b-container>
    <b-row>
      <h2 class="center">Show Enrolment</h2>
    </b-row>
    <b-row class="center">
      <b-col>
        <b-button
          :to="{ name: 'enrolment_edit', params: { id: $route.params.id } }"
          class="float-right"
          variant="outline-info"
          >Edit</b-button
        >
        <b-button variant="danger" @click="deleteEnrolment()">Delete</b-button>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>{{ enrolment.data.id }}</h2>
        <h4>{{ enrolment.data.time }}</h4>
        <p>{{ enrolment.data.date }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "EnrolmentShow",
  components: {},
  data() {
    return {
      enrolment: {},
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
          `https://college-api-mo.herokuapp.com/api/enrolment/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.enrolment = response.data;
        })
        .catch((error) => console.log(error));
    },
    deleteEnrolment() {
      let token = localStorage.getItem("token");

      axios
        .delete(
          `https://college-api-mo.herokuapp.com/api/enrolment/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "enrolments_index",
          });
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>

<style scoped>
.center{
    text-align: center;
}
</style>
