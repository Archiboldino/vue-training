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
  },
  created() {
    this.updateSearchView()
  },
  watch: {
    "$route": function () {
      this.updateSearchView()
    }
  },
  methods: {
    updateSearchView() {
      if (this.$route.query.q)
        this.$store.commit("setSearchQuery", this.$route.query.q);
      if (this.$route.query.sort)
        this.$store.commit("setSort", this.$route.query.sort);
      if (this.$route.query.field)
        this.$store.commit("setSearchField", this.$route.query.field);
      this.$store.dispatch("updateFilteredMovies");
    }
  }
}
</script>

<style scoped>

</style>
