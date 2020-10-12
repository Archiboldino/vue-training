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
      poster_path: '/poster.jpg',
      title: 'title',
      genres: ['genre'],
      release_date: '2020-05-01'
    })
  }
})
