import MovieDetail from "@/components/MovieDetail";

export default {
  component: MovieDetail,
  title: 'Movie detail'
}

export const withMovie = () => ({
  components: {MovieDetail},
  template: `
    <movie-detail style="background-color: black" :movie="movie"/>
  `,
  computed: {
    movie: () => ({
      posterUrl: '/poster.jpg',
      name: 'name',
      secondName: 'second name',
      year: '2020',
      plot: 'Very long string Very long string Very long string Very long string Very long string Very long string Very' +
        ' long string Very long string Very long string Very long string Very long string Very long string ',
      rating: '1.2',
      length: '123 min'
    })
  }
})
