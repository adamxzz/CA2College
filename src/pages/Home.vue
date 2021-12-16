<template>
  <b-container>
    <b-row>
      <b-col>
        <b-img
          src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
      <b-col class="center">
        <br />
        <h2>Log in</h2>
        <div v-if="!loggedIn">
          Email: <input type="email" v-model="form.email" /> <br /><br />
          Password: <input type="password" v-model="form.password" />
          <br /><br />
          <button @click="login()">Log In</button>
        </div>
        <p v-else>You are logged in!</p>
      </b-col>
    </b-row>
    <br />
    <b-row class="center">
      <h2>Welcome to Not An Arts College University</h2>
      <p>Where poor life decsisions are made</p>
    </b-row>
    <br>
    <b-row>
        <b-col>
            <br>
            <h2 class="center">
            Learn essential life skills
            </h2>
        </b-col>
      <b-col>
        <b-img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
    </b-row>
    <b-row>
        <b-col>
            <br>
        </b-col>
    </b-row>
  </b-container>
</template>



<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  props: {
    loggedIn: Boolean,
  },
  data() {
    return {
      form: {
        email: "sam@bloggs.com",
        password: "secret",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("https://college-api-mo.herokuapp.com/api/login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          this.$emit("login", response.data.token);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
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
