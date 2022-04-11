<template>
  <div class="main container my-4" v-if="movieData !== null && credits">
    <div class="top-section py-4 d-flex align-items-center rounded">
      <div
        class="searchBtn text-white btn badge-pill px-3 d-flex align-items-center ml-4 justify-content-around"
        @click="$router.go(-1)"
      >
        <img src="@/assets/images/svg/left-arrow.svg" alt="back" />
        <span>back</span>
      </div>
      <div class="d-flex flex-column ml-5">
        <div class="movieTitle">
          <strong>{{ movieData.title }}</strong>
        </div>
        <div class="movieDesc">{{ movieData.tagline }}</div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <img
          class="img-div img-fluid rounded"
          :src="`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`"
          alt=""
        />
      </div>
      <div class="col-8 detail-div">
        <div class="d-flex justify-content-between">
          <div>
            <strong>Budget</strong>
          </div>
          <div>$ {{ movieData.budget.toLocaleString() }}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>Revenue</strong>
          </div>
          <div>$ {{ movieData.revenue.toLocaleString() }}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>RunTime</strong>
          </div>
          <div>
            {{ parseInt(movieData.runtime / 60) }}h
            {{ movieData.runtime % 60 }}m
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>Score</strong>
          </div>
          <div class="d-flex align-items-center">
            <div class="score mr-3">{{ movieData.vote_average }}</div>
            <small>({{ movieData.vote_count }} votes)</small>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>Genres</strong>
          </div>
          <div class="">
            <span v-for="(genre, idx) in movieData.genres" :key="genre.id"
              >{{ genre.name }}{{ idx != movieData.genres.length - 1 && " ," }}
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>IMDB Link</strong>
          </div>
          <div class="">
            <a :href="`https://www.imdb.com/title/${movieData.imdb_id}/`"
              >Link</a
            >
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>Homepage Link</strong>
          </div>
          <div class="">
            <a :href="movieData.homepage">Link</a>
          </div>
        </div>
      </div>
      <div class="col-12 my-5">
        <div class="overview mb-5">
          {{ movieData.overview }}
        </div>
        <h5>Credits:</h5>
        <div class="credits">
          <span v-for="(item, idx) in credits.cast.length" :key="idx">
            <template v-if="idx < 10"
              >{{ credits.cast[idx].name }}{{ " " }}{{ idx != 9 ? ", " : "" }}
            </template>
          </span>
          <span
            >and
            {{ credits.cast.length - 10 + credits.crew.length }} more.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { movieDetail } from "../mixin/movieDetail";

export default {
  name: "movie",
  mixins: [movieDetail],
};
</script>

<style scoped>
.detail-div .d-flex.justify-content-between {
  margin: 20px 0;
}
.detail-div div:first-child {
  margin: 0 !important;
}
.img-div {
  width: 100%;
  overflow: hidden;
}
.top-section {
  background: #e2e2e2;
}
.searchBtn {
  background-color: #549df2;
  min-width: 95px;
  cursor: pointer;
}
</style>
