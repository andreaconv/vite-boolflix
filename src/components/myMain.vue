<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

export default {
  name: 'myMain',
  components: {
    Card,
  },
  data() {
    return{
      store,
    }
  },
}
</script>

<template>

  <div class="main-wrapper">

    <Card v-if="store.popularMovie.length > 0"
    type="MOVIE POPULAR"
    :image="store.popularMovie[0].poster_path"
    :title="store.popularMovie[0].title"
    :original_title="store.popularMovie[0].original_title" 
    :original_language="store.popularMovie[0].original_language"
    :vote_average="Math.round(store.popularMovie[0].vote_average / 2)"/>

  <Card v-if="store.showCardMovie"
    type="MOVIE"
    :image="store.movieUserArray[store.counterMovie].poster_path"
    :title="store.movieUserArray[store.counterMovie].title"
    :original_title="store.movieUserArray[store.counterMovie].original_title" 
    :original_language="store.movieUserArray[store.counterMovie].original_language"
    :vote_average="Math.round(store.movieUserArray[store.counterMovie].vote_average / 2)"/>

  <Card v-if="store.showCardSeries"
    type="SERIES"
    :image="store.seriesUserArray[store.counterSeries].poster_path"
    :title="store.seriesUserArray[store.counterSeries].name"
    :original_title="store.seriesUserArray[store.counterSeries].original_name" 
    :original_language="store.seriesUserArray[store.counterSeries].original_language"
    :vote_average="Math.round(store.seriesUserArray[store.counterSeries].vote_average / 2)"/>

  </div>

</template>

<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  .main-wrapper{
    padding-top: $height-header;
    min-height: 100vh;
    background-color: $primary-color;
  }


</style>