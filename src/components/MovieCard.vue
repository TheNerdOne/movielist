<template>
  <div class="d-flex col-12 my-2 card-bg p-2 border rounded">
    <div class="img-div col-6 p-0">
      <img
        :src="`https://image.tmdb.org/t/p/w500${data.backdrop_path}`"
        :alt="data.title"
        height="189"
        width="100%"
      />
    </div>
    <div class="col-6 d-flex flex-column justify-content-between">
      <div>
        <h5>{{ data.title }}</h5>
      </div>
      <div class="d-flex flex-column">
        <div>
          <div>icon</div>
          <div>{{ data.release_date }}</div>
        </div>
        <div>genre</div>
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
  max-width: 100%;
  width: 128px;
  height: 189px;
  /* background-size: cover; */
}
.card-bg {
  background-color: #f1f1f1 !important;
  border-color: #c4c4c4 !important;
}
</style>
