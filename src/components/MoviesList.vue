<template>
  <div class="main container">
    <SearchBar />
    <div class="main-movie row" v-if="movieData.length > 0">
      <div class="movies col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4" v-for="movie in movieData" :key="movie.id">
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
    };
  },
  computed: {},
  methods: {
    goToDetail(payload){
      this.$router.push({path:`/detail/${payload}`})
    }
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
