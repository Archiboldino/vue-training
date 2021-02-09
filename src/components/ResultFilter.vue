<template>
  <div class="results-filter-module__wrapper">
    <div class="results-filter-module__sortBy">
      <span>Sort by</span>
      <radiobutton-pair right-button-value="vote_average" left-button-value="release_date" left-button-id="filter-release"
                        right-button-id="filter-rating" buttons-name="sort-by" v-model="sortValue">
        <template v-slot:left-button-content>
          Release date
        </template>
        <template v-slot:right-button-content>
          Rating
        </template>
      </radiobutton-pair>
    </div>
  </div>
</template>

<script>
import RadiobuttonPair from "@/components/RadiobuttonPair";

export default {
  name: "SortByComponent",
  components: {RadiobuttonPair},
  computed: {
    sortValue: {
      get: function() {
        return this.$store.state.sort
      },
      set: function(value) {
        this.$store.commit("setSort", value)
      }
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.results-filter-module__wrapper {
  background-color: #555555;
  padding: 20px;
}

.results-filter-module__sortBy {
  margin-right: 20px;
}

span {
  line-height: 2;
  margin-right: 20px;
  text-transform: uppercase;
  color: white;
}

</style>
