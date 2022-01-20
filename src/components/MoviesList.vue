<template>
  <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"><MovieCard/></div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
    name:'list',
    components:{MovieCard}
}
</script>

<style>

</style>