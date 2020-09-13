<template>
  <div class="results-grid__module">
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import {mapState} from "vuex"

export default {
  name: "MovieSearchResult",
  components: {MovieCard},
  computed: {
    ...mapState(["movies"])
  }
}
</script>

<style scoped>
.results-grid__module {
  width: 90%;
  margin: auto;
}
</style>
