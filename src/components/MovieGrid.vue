<template>
  <div class="results-grid__module">
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";

export default {
  name: "MovieSearchResult",
  components: {MovieCard},
  data: () => {
    const movies = []
    for (var i = 0; i < 9; i++) {
      movies.push({
        id: i,
        posterUrl: "/poster.jpg",
        name: "Star Wars: The Last Jedi",
        year: "2017",
        genre: "Fantasy"
      })
    }
    return {
      movies
    }
  }
}
</script>

<style scoped>
.results-grid__module {
  width: 90%;
  margin: auto;
}
</style>
