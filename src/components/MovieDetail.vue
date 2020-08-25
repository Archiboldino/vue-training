<template>
  <div class="movie-detail-module">
    <div class="movie-detail-module__posterImage">
      <img alt="movie poster" src="https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg">
    </div>
    <div class="movie-detail-module__description">
      <div class="movie-detail-module__name">
        <h2>{{ movie.name }}</h2>
        <div class="movie-detail-module__rating">{{ movie.rating }}</div>
      </div>
      <h3>{{ movie.secondName }}</h3>
      <div class="movie-detail-module__extraInfo">
        <span class="movie-detail-module__releaseDate">{{ movie.year }}</span>
        <span>{{ movie.length }}</span></div>
      <div class="movie-detail-module__overview">
        {{ movie.plot }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    movie: Object
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
  color: #555555;
}

.movie-detail-module__extraInfo {
  color: #f65261;
  font-size: 30px;
}

.movie-detail-module__releaseDate {
  margin-right: 30px;
}

.movie-detail-module__posterImage {
  max-width: 350px;
  min-width: 300px;
  /*position: relative;*/
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
