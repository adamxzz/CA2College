<template>
  <b-container>
    <b-row>
      <h2 class="center">Show Course</h2>
    </b-row>
    <b-row class="center">
      <b-col>
        <b-button
          :to="{ name: 'course_edit', params: { id: $route.params.id } }"
          class="float-right"
          variant="outline-info"
          >Edit</b-button
        >
        <b-button variant="danger" @click="deleteCourse()">Delete</b-button>
        </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>{{ course.data.title }}</h2>
        <h4>{{ course.data.code }}</h4>
        <p>{{ course.data.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "CourseShow",
  components: {},
  data() {
    return {
      course: {},
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
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.course = response.data;
        })
        .catch((error) => console.log(error));
    },
    deleteCourse() {
      let token = localStorage.getItem("token");

      axios
        .delete(
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push({
            name: "courses_index",
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
