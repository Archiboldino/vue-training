import Vue from 'vue'
import Vuex from 'vuex'
import movies from '../resources/movies.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.id == id)
    }
  }
})
