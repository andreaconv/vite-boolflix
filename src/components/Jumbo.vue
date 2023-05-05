<script>
import { store } from '../data/store';

export default {
  name: 'Jumbo',
  data() {
    return{
      store,
    }
  },
}
</script>

<template>

  <img v-if="store.popularMovie.length > 0" :src="`https://image.tmdb.org/t/p/w300/${store.popularMovie[2].backdrop_path}`" alt="">
  
</template>

<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;

  img{
    padding-top: $height-header;
    width: 100%;

  }

</style>