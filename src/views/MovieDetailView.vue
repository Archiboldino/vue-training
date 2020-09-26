<template>
  <div v-if="movie">
    <header-component class="header" :show-home-button="true">
      <movie-detail :movie="movie"/>
    </header-component>
    <div class="films-genre-wrapper">
      Films by {{ movie.genres[0] }} genre
    </div>
    <movie-search-result/>
  </div>
</template>

<script>
import MovieSearchResult from "@/components/MovieGrid";
import HeaderComponent from "@/components/HeaderComponent";
import MovieDetail from "@/components/MovieDetail";
import movieApi from "@/api/movie-api";

export default {
  name: "MovieDetailView",
  components: {
    MovieDetail,
    MovieSearchResult,
    HeaderComponent
  },
  data: function() {
    return {
      movie: null
    }
  },
  created: function() {
    this.setMovie()
  },
  methods: {
    setMovie: async function () {
      this.movie = await movieApi.getMovieById(this.$route.params.id)
    }
  },
  watch: {
    "$route": "setMovie"
  }
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
