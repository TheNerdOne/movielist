<template>
  <div>
    <div>
      <img
        :src="`https://image.tmdb.org/t/p/w500${data.backdrop_path}`"
        :alt="data.title"
      />
    </div>
    <div>
      <div>
        <h5>{{ data.title }}</h5>
      </div>
      <div>
        <div>icon</div>
        <div>{{ data.release_date }}</div>
      </div>
      <div>genre</div>
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

<style></style>
