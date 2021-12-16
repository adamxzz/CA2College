<template>
    <div>
        <h1 class="center">All Our Courses</h1>
        <b-button variant="primary" :to="{name: 'create_course'}">
        Add
        </b-button>
            <b-table striped hover :items="courses" :fields="heading">
                <template #cell(title)="data">
                    <router-link :to="{name:'course_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
                </template>
            </b-table>
        </div>    
</template>

<script>
import axios from "axios"

export default {
    name: "CoursesIndex",
    data(){
        return{
            heading:['id','title','code','points','level'],
            courses:[],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            let token = localStorage.getItem('token')

            axios.get("https://college-api-mo.herokuapp.com/api/courses",
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.courses = response.data.data
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
.center{
    text-align: center;
}
</style>
