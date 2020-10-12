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
  name: "SearchView",
  components: {
    SearchBar,
    MovieSearchResult,
    ResultFilter,
    HeaderComponent
  }
}
</script>

<style scoped>

</style>
