<template>
  <div>
    <header-component class="header" :show-home-button="true">
      <movie-detail :movie="movie"/>
    </header-component>
    <div class="films-genre-wrapper">
      Films by {{ movie.genre }} genre
    </div>
    <movie-search-result/>
  </div>
</template>

<script>
import MovieSearchResult from "@/components/MovieGrid";
import HeaderComponent from "@/components/HeaderComponent";
import MovieDetail from "@/components/MovieDetail";

export default {
  name: "SearchView",
  components: {
    MovieDetail,
    MovieSearchResult,
    HeaderComponent
  },
  data: () => ({
    movie: {
      posterUrl: '/poster.jpg',
      name: 'name',
      secondName: 'second name',
      year: '2020',
      plot: 'Very long string Very long string Very long string Very long string Very long string Very long string Very' +
          ' long string Very long string Very long string Very long string Very long string Very long string ',
      rating: '1.2',
      length: '123 min',
      genre: 'Fantasy'
    }
  })
}
</script>

<style scoped>
.films-genre-wrapper {
  display: flex;
  font-weight: bold;
  flex-direction: row;
  background-color: #555555;
  padding: 20px 20px 20px 80px;
  line-height: 2;
  color: white;
}

</style>
