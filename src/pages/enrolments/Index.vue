<template>
    <div>
        <h1 class="center">All The Enrolments</h1>
        <b-button variant="primary" :to="{name: 'create_enrolments'}">
        Add
        </b-button>
            <b-table striped hover :items="enrolments" :fields="heading">
                <template #cell(id)="data">
                    <router-link :to="{name:'enrolments_show', params: { id: data.item.id }}">{{ data.value }}</router-link>
                </template>
            </b-table>
        </div>    
</template>

<script>
import axios from "axios"

export default {
    name: "EnrolmentsIndex",
    data(){
        return{
            heading:['id','date','time','status'],
            enrolments:[],
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            let token = localStorage.getItem('token')

            axios.get("https://college-api-mo.herokuapp.com/api/enrolments",
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.enrolments = response.data.data
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
