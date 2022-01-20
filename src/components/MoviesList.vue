<template>
  <div class="main">
    <SearchBar />
    <div class="main-movie" v-if="movieData.length > 0">
      <div class="movies" v-for="movie in movieData" :key="movie.id">
        <MovieCard :data="movie" />
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
  methods: {},
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
