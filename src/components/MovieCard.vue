<template>
  <router-link :to="'/movie/' + movie.id" class="movie-card-module__card">
    <img alt="movie-poster" src="" ref="image"
         v-in-view-observer:once @inView="loadImage">
    <div class="movie-card-module__footer">
      <div class="movie-card-module__general">
        <div class="movie-card-module__title">{{ movie.title }}</div>
        <div class="movie-card-module__year">{{ movie.release_date | formatYear }}</div>
      </div>
      <div>{{ movie.genres | formatArray }}</div>
    </div>
  </router-link>
</template>

<script>
import formatYear from "@/filters/format-year-filter"

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatArray: array => {
      return array.join(", ")
    },
    formatYear: formatYear
  },
  methods: {
    loadImage: function () {
      this.$refs.image.src = this.movie.poster_path
    }
  },
}
</script>

<style scoped>
.movie-card-module__card {
  width: 30%;
  display: inline-block;
  margin: 15px 20px;
  text-decoration: none;
}

.movie-card-module__card img {
  width: 100%;
}

.movie-card-module__footer {
  color: #555555;
}

.movie-card-module__general {
  display: flex;
  justify-content: space-between;
  color: white;
}

.movie-card-module__title {
  font-weight: bold;
}

.movie-card-module__year {
  padding: 5px;
  border: 1px solid #555555;
  border-radius: 10px;
}
</style>
