import Vue from 'vue'
import Vuex from 'vuex'
import movieApi from '@/api/movie-api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [],
    searchQuery: '',
    sort: 'release_date',
    searchField: 'title'
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
    setMovies: (state, value) => {
      state.movies = value
    }
  },
  actions: {
    loadMovies: async ({commit}) => {
      let newVar = await movieApi.getMovies();
      commit('setMovies', newVar)
    },
    updateFilteredMovies: async ({commit, state}) => {
      const filteredMovies = await movieApi.getMovies({
        sortBy: state.sort,
        searchBy: state.searchField,
        search: state.searchQuery,
        sortOrder: 'desc'
      })
      commit('setMovies', filteredMovies)
    }
  }
})
