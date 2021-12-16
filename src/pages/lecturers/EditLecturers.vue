<template>
    <div class="container col-6">
    <b-col>
        <h2>Edit Lecturers</h2>
        <b-form-group
            label="Name"
            label-for="name-input"
        >
            <b-form-input
            id="name-input"
            v-model="form.name"
            type="text"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Address"
            label-for="address-input"
        >
            <b-form-textarea
                id="address-input"
                v-model="form.address"
                placeholder="Enter address"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
      </b-form-group>

      <b-form-group
            label="Phone"
            label-for="phone-input"
        >
            <b-form-input
            id="phone-input"
            v-model="form.phone"
            type="text"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Email"
            label-for="email-input"
        >
            <b-form-input
            id="email-input"
            v-model="form.email"
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
    name: "LecturerEdit",
    data() {
        return {
            form: {
                name: "",
                address: "",
                phone: "",
                email: "",
            }
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
        let token = localStorage.getItem('token')

            axios.get(`https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data.data)
                    this.form.title = response.data.data.name
                    this.form.code = response.data.data.address
                    this.form.description = response.data.data.phone
                    this.form.points = response.data.data.email
                })
                .catch(error => console.log(error))
        },
        submitForm() {
            let token = localStorage.getItem('token')

            axios.put(`https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`, this.form,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "lecturers_show",
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