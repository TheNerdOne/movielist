<template>
  <div class="main container my-4">
    <SearchBar @DateFilter="DateFilter($event)" />
    <div class="main-movie row" v-if="movieData.length > 0" :key="movieListKey">
      <div
        class="movies col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4"
        v-for="movie in movieData"
        :key="movie.id"
      >
        <MovieCard :data="movie" @click.native="goToDetail(movie.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import { moviesDataProvider } from "../services/movies";
import MovieCard from "./MovieCard.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "list",
  components: { MovieCard, SearchBar },
  data() {
    return {
      movieData: {},
      pagesData: {},
      currentPage: 1,
      movieListKey:0
    };
  },
  computed: {},
  methods: {
    goToDetail(payload) {
      this.$router.push({ path: `/detail/${payload}` });
    },
    DateFilter(payload) {
      this.getData({
        "release_date.gte": payload[0],
        "release_date.lte": payload[1],
      });
      this.movieListKey +=1
    },
    getData(payload) {
      moviesDataProvider.getAllMovies(payload && payload).then((res) => {
        this.movieData = res.data.results;
        this.pagesData.totalPages = res.data.total_pages;
        this.pagesData.totalCount = res.data.total_results;
      });
    },
  },
  created() {
    moviesDataProvider.getAllMovies().then((res) => {
      this.movieData = res.data.results;
      this.pagesData.totalPages = res.data.total_pages;
      this.pagesData.totalCount = res.data.total_results;
    });
  },
};
</script>

<style></style>
