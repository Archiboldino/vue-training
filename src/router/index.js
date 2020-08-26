import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from "@/views/SearchView";
import MovieDetailView from "@/views/MovieDetailView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/movie/:id',
    name: 'Movie detail',
    component: MovieDetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
