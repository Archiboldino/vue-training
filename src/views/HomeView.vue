<template>
  <div>
    <header-component>
      <search-bar/>
    </header-component>
    <result-filter/>
    <movie-search-result/>
  </div>
</template>

<script>
import MovieSearchResult from "@/components/MovieGrid";
import ResultFilter from "@/components/ResultFilter";
import HeaderComponent from "@/components/HeaderComponent";
import SearchBar from "@/components/SearchBar";

export default {
  name: "HomeView",
  components: {
    SearchBar,
    MovieSearchResult,
    ResultFilter,
    HeaderComponent
  },
  created() {
    if (this.$store.state.movies.length === 0) {
      this.$store.dispatch('loadMovies');
    }
  }
}
</script>

<style scoped>

</style>
