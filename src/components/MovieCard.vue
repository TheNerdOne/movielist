<template>
  <div class="d-flex col-12 my-2 card-bg p-2 border rounded pointer">
    <div class="img-div col-6 p-0">
      <img
        :src="`https://image.tmdb.org/t/p/w500${data.backdrop_path}`"
        :alt="data.title"
      />
    </div>
    <div class="col-6 d-flex flex-column justify-content-between">
      <div>
        <h5>{{ data.title }}</h5>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-start align-items-center">
          <img
            class="mr-1"
            src="@/assets/images/svg/calendar.svg"
            alt="calendar"
          />
          <div>{{ data.release_date }}</div>
        </div>
        <div class="genreDiv">
          <p class="m-0" v-for="genre in data.genres" :key="genre.id">
            {{ genre.name }}&nbsp;●
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: null,
    },
  },
};
</script>

<style scoped>
.img-div {
  width: 128px;
  overflow: hidden;
}
.pointer {
  cursor: pointer !important;
}
.card-bg {
  background-color: #f1f1f1 !important;
  border-color: #c4c4c4 !important;
  height: 295px;
}
</style>
