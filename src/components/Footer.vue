<template>
  <b-container fluid class="grey">
    <b-container>
      <b-row>
        <b-col>
          <h3 class="title">NAACU</h3>
          <p>
            Not An Arts College is a fictional college not based on any academic
            institution in real life used for a Vue project that displays
            information from an API
          </p>
        </b-col>
        <b-col>
          <h5 class="title">Socials</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Facebook</a></li>
            <li class="list-unstyled"><a href="#!">Twitter</a></li>
            <li class="list-unstyled"><a href="#!">Instagram</a></li>
            <li class="list-unstyled"><a href="#!">Myspace</a></li>
          </ul>
        </b-col>
        <b-col>
          <h5 class="title">Useful Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Therapy</a></li>
            <li class="list-unstyled"><a href="#!">Important Dates</a></li>
            <li class="list-unstyled"><a href="#!">Student Self Service</a></li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="center">
        <h6>Not An Arts College University @2021/22</h6>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
.center {
  text-align: center;
}
.grey {
  background-color: lightgray;
}
</style>