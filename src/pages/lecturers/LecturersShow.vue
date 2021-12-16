<template>
  <b-container>
    <b-row>
      <h2 class="center">Show Lecturers</h2>
    </b-row>
    <b-row class="center">
      <b-col>
        <b-button
          :to="{ name: 'lecturers_edit', params: { id: $route.params.id } }"
          class="float-right"
          variant="outline-info"
          >Edit</b-button
        >
        <b-button variant="danger" @click="deleteLecturers()">Delete</b-button>
      </b-col>
    </b-row>
    <b-row>
      <h1>{{ lecturer.data.name }}</h1>
      <br>
      <h4>Lectuers Details</h4>
      <p>Email: {{ lecturer.data.email }}</p>
      <p>Phone: {{ lecturer.data.phone }}</p>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "LecturersShow",
  components: {},
  data() {
    return {
      lecturer: {},
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
          `https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.lecturer = response.data;
        })
        .catch((error) => console.log(error));
    },
    deleteLecturers() {
      let token = localStorage.getItem("token");

      axios
        .delete(
          `https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "lecturers_index",
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
.center {
  text-align: center;
}
</style>
