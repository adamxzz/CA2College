<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link navbar-brand" to="/"
            >Not An Arts College University</router-link
          >
          <router-link class="nav-link" :to="{ name: 'courses_index' }"
            >Courses</router-link
          >
          <router-link class="nav-link" :to="{ name: 'lecturers_index' }"
            >Lectuers</router-link
          >
          <router-link class="nav-link" :to="{ name: 'enrolments_index' }"
            >Enrolments</router-link
          >
        </div>
      </div>
      <button
        v-if="loggedIn"
        @click="logout"
        class="btn btn-outline-info my-2 my-sm-0 btn-sm"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNavBar",
  props: {
    loggedIn: Boolean,
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style>
</style>
