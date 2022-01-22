<template>
  <div>
    <div>
      <div>Search by release date:</div>
      <input type="text" />
    </div>
    <div @click="searchedData">Search</div>
  </div>
</template>

<script>
export default {
  methods: {
    searchedData() {
      console.log("salam");
    },
  },
};
</script>

<style></style>
