import Vue from "vue";
import Router from "vue-router"
import Home from "./pages/Home.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        //Courses
        {
            path: "/courses",
            name: "courses_index",
            component: () => import("./pages/courses/Index.vue")
        },
        {
            path: "/course/:id",
            name: "course_show",
            component: () => import("./pages/courses/CourseShow.vue")
        },
        {
            path: "/course/create",
            name: "create_course",
            component: () => import("./pages/courses/CreateCourse.vue")
        },
        {
            path: "/course/edit/:id",
            name: "course_edit",
            component: () => import("./pages/courses/EditCourse.vue")
        },
        //Lecturers
        {
            path: "/lecturers",
            name: "lecturers_index",
            component: () => import("./pages/lecturers/Index.vue")
        },
        {
            path: "/lecturers/:id",
            name: "lecturers_show",
            component: () => import("./pages/lecturers/LecturersShow.vue")
        },
        {
            path: "/lecturers/create",
            name: "create_lecturers",
            component: () => import("./pages/lecturers/CreateLecturers.vue")
        },
        {
            path: "/lecturers/edit/:id",
            name: "lecturers_edit",
            component: () => import("./pages/lecturers/EditLecturers.vue")
        },
        //Enrolments
        {
            path: "/enrolments",
            name: "enrolments_index",
            component: () => import("./pages/enrolments/Index.vue")
        },
        {
            path: "/enrolments/:id",
            name: "enrolments_show",
            component: () => import("./pages/enrolments/EnrolmentShow.vue")
        },
        {
            path: "/enrolments/create",
            name: "create_enrolments",
            component: () => import("./pages/enrolments/CreateEnrolment.vue")
        },
        {
            path: "/enrolments/edit/:id",
            name: "enrolments_edit",
            component: () => import("./pages/enrolments/EditEnrolment.vue")
        },
    ]
})