import MovieCard from '../components/MovieCard.vue'

export default {
  component: MovieCard,
  title: 'Movie card'
}

export const withMovie = () => ({
  components: {MovieCard},
  template: `
    <movie-card :movie="movie" style="background-color: black"/>
  `,
  computed: {
    movie: () => ({
      posterUrl: '/poster.jpg',
      name: 'name',
      genre: 'genre',
      year: '2020'
    })
  }
})
