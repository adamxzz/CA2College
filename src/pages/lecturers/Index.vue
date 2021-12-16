<template>
    <div>
        <h1 class="center">All Lecturers</h1>
        <b-button variant="primary" :to="{name: 'create_lecturers'}">
        Add
        </b-button>
            <b-table striped hover :items="lecturers" :fields="heading">
                <template #cell(name)="data">
                    <router-link :to="{name:'lecturers_show', params: { id: data.item.id }}">{{ data.item.name }}</router-link>
                </template>
            </b-table>
        </div>    
</template>

<script>
import axios from "axios"

export default {
    name: "LecturersIndex",
    data(){
        return{
            heading:['id','name','address','phone','email'],
            lecturers:[],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            let token = localStorage.getItem('token')

            axios.get("https://college-api-mo.herokuapp.com/api/lecturers",
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.lecturers = response.data.data
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
/* CSS styling */
</style>
