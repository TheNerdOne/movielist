<template>
  <div>
    <div class="main container my-4" v-if="movieData.length > 0 && show">
      <SearchBar
        @DateFilter="DateFilter($event)"
        @change="clearDatePicker($event)"
      />
      <div class="main-movie row" :key="movieListKey">
        <div
          class="movies col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4"
          v-for="movie in movieData"
          :key="movie.id"
        >
          <MovieCard :data="movie" @click.native="goToDetail(movie.id)" />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center my-4">
        <div
          :class="`prev bold mr-3 ${currentPage == 1 && 'disableBtn'}`"
          @click="prevPage"
        >
          Previous Page
        </div>
        <div class="divider"></div>
        <div class="next bold ml-3" @click="nextPage">Next Page</div>
      </div>
      <div class="d-flex justify-content-center align-items-center resultDiv">
        Showing results:
        {{ `${this.currentPage * 20 - 19}-${this.currentPage * 20}` }}
      </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center m-auto" style="height:100vh">
      <b-spinner type="grow" label="Spinning" class="mx-2" style="width: 3rem; height: 3rem;"></b-spinner>
      <b-spinner type="grow" label="Spinning" class="mx-2" style="width: 3rem; height: 3rem;"></b-spinner>
      <b-spinner type="grow" label="Spinning" class="mx-2" style="width: 3rem; height: 3rem;"></b-spinner>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import SearchBar from "./SearchBar.vue";
import { movieListMixin } from "../mixin/movieListMixin";

export default {
  name: "list",
  components: { MovieCard, SearchBar },
  mixins: [movieListMixin],
};
</script>

<style scoped>
.divider {
  height: 24px;
  background-color: #000;
  width: 1px;
}
.next,
.prev {
  font-weight: 700;
  cursor: pointer;
  color: #318fe7;
}
.resultDiv {
  font-size: 16px;
  color: #989898;
}
</style>
