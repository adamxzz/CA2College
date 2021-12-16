<template>
  <div>
    <NavBar :loggedIn="loggedIn" v-on:logout="setLoggedOut" />
    <router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut"/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    localStorage.getItem('token') ? this.loggedIn = true : this.loggedIn = false
  },
  methods: {
    setLoggedIn(token){
      this.loggedIn = true
      localStorage.setItem('token', token)
    },
    setLoggedOut(){
      this.loggedIn = false
      localStorage.removeItem('token')
      this.$router.replace({name: 'home'})
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
    font-family: "Be Vietnam", sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
