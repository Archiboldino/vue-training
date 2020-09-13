<template>
  <div class="movie-detail-module">
    <div class="movie-detail-module__posterImage">
      <img alt="movie poster" :src="movie.poster_path">
    </div>
    <div class="movie-detail-module__description">
      <div class="movie-detail-module__name">
        <h2>{{ movie.title }}</h2>
        <div class="movie-detail-module__rating">{{ movie.vote_average }}</div>
      </div>
      <h3>{{ movie.tagline }}</h3>
      <div class="movie-detail-module__extraInfo">
        <span class="movie-detail-module__releaseDate">{{ movie.release_date | formatYear }}</span>
        <span>{{ movie.runtime }}</span>
      </div>
      <div class="movie-detail-module__overview">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    movie: Object
  },
  filters: {
    formatYear: date => {
      return new Date(date).getFullYear()
    }
  }
}
</script>

<style scoped>
.movie-detail-module {
  color: white;
  display: flex;
}

.movie-detail-module__description {
  margin-left: 30px;
}

h2 {
  font-size: 40px;
  margin: 0 30px 0 0;
  line-height: 1.5;
}

h3 {
  font-size: 15px;
}

.movie-detail-module__extraInfo {
  color: #f65261;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.movie-detail-module__releaseDate {
  margin-right: 30px;
}

.movie-detail-module__posterImage {
  max-width: 350px;
  min-width: 300px;
}

img {
  width: 100%;
  height: 100%;
}

.movie-detail-module__name {
  display: flex;
}

.movie-detail-module__rating {
  font-size: 35px;
  padding: 10px;
  color: #A1E66F;
  border: solid white;
  border-radius: 100px;
}
</style>
