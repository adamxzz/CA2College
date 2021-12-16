<template>
    <div class="container col-6">
    <b-col>
        <h2>Edit Course</h2>
      <b-form-group label="Title" label-for="title-input">
        <b-form-input
          id="title-input"
          v-model="form.title"
          placeholder="Enter a title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Description" label-for="description-input">
        <b-form-textarea
          id="description-input"
          v-model="form.description"
          placeholder="Enter the description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group label="Code" label-for="code-input">
        <b-form-input
          id="code-input"
          v-model="form.code"
          placeholder="Enter the code"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Points" label-for="points-input">
        <b-form-input
          id="points-input"
          v-model="form.points"
          placeholder="Enter the points"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Level" label-for="level-input">
        <b-form-input
          id="level-input"
          v-model="form.level"
          placeholder="Enter the level"
          required
        ></b-form-input>
      </b-form-group>

        <b-button @click= "submitForm()">Submit</b-button>
        <b-button @click= "cancel()">Cancel</b-button>
    </b-col>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CourseEdit",
    data() {
        return {
            form: {
                title: "",
                code: "",
                description: "",
                points: "",
                level: ""
            }
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
        let token = localStorage.getItem('token')

            axios.get(`https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data.data)
                    this.form.title = response.data.data.title
                    this.form.code = response.data.data.code
                    this.form.description = response.data.data.description
                    this.form.points = response.data.data.points
                    this.form.level = response.data.data.level
                })
                .catch(error => console.log(error))
        },
        submitForm() {
            let token = localStorage.getItem('token')

            axios.put(`https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`, this.form,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "course_show",
                         params: {
                             id: this.$route.params.id
                         }
                     })
                 }).catch(error => {
                     console.log(error)
                     console.log(error.response.data.errors)
                 })
        },
        cancel() {
            this.$router.go(-1)
        }
    }
}
</script>