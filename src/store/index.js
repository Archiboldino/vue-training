import Vue from 'vue'
import Vuex from 'vuex'
import movies from '../resources/movies.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies,
    filteredMovies: movies,
    searchQuery: '',
    sort: 'date',
    searchField: 'title'
  },
  getters: {
    getMovieById: (state) => (id) => {
      return state.movies.find(movie => movie.id == id)
    },
  },
  mutations: {
    setSort: (state, value) => {
      state.sort = value
    },
    setSearchField: (state, value) => {
      state.searchField = value
    },
    setSearchQuery: (state, value) => {
      state.searchQuery = value
    },
    setFilteredMovies: (state, value) => {
      state.filteredMovies = value
    }
  },
  actions: {
    updateFilteredMovies: ({commit, state}) => {
      const filteredMovies = state.movies.filter(movie => {
        if (state.searchField === 'genre') {
          return movie.genres.includes(state.searchQuery)
        }
        if (state.searchField === 'title') {
          return movie.title.includes(state.searchQuery) || movie.overview.includes(state.searchQuery)
        }
      })
        .sort((a, b) => {
          if (state.sort === 'date') {
            return new Date(a.release_date) > new Date(b.release_date) ? -1 : 1
          }
          if (state.sort === 'rating') {
            return a.vote_average > b.vote_average ? -1 : 1
          }
        })
      commit('setFilteredMovies', filteredMovies)
    }
  }
})
