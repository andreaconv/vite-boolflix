<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

export default {
  name: 'myHeader',
  components: {
    Card,
  },
  data() {
      return{
        store,
      }
    },
  methods: {
    addCounterMovie(){
      if (store.counterMovie < store.movieUserArray.length){
        store.counterMovie ++
      } 
      if (store.counterMovie === store.movieUserArray.length){
        store.counterMovie = 0
      }
    },
    addCounterSeries(){
      if (store.counterSeries < store.movieUserArray.length){
        store.counterSeries ++
      } 
      if (store.counterSeries === store.movieUserArray.length){
        store.counterSeries = 0
      }
    }
  },
}
</script>

<template>

  <header>

    <div class="container">

      <div class="input">
        <input v-model="store.searchInput" @keyup.enter="$emit('searchMovie'), $emit('searchSeries')" type="text">

        <button @click="$emit('searchMovie'), $emit('searchSeries')">Search</button>

        <button @click="addCounterMovie">Next Movie</button>

        <button @click="addCounterSeries">Next Series</button>
      </div>    
      
      <Card v-if="store.showCardMovie"
        type="MOVIE"
        :image="store.movieUserArray[store.counterMovie].poster_path"
        :title="store.movieUserArray[store.counterMovie].title"
        :original_title="store.movieUserArray[store.counterMovie].original_title" 
        :original_language="store.movieUserArray[store.counterMovie].original_language"
        :vote_average="store.movieUserArray[store.counterMovie].vote_average"/>

      <Card v-if="store.showCardSeries"
        type="SERIES"
        :image="store.seriesUserArray[store.counterSeries].poster_path"
        :title="store.seriesUserArray[store.counterSeries].name"
        :original_title="store.seriesUserArray[store.counterSeries].original_name" 
        :original_language="store.seriesUserArray[store.counterSeries].original_language"
        :vote_average="store.seriesUserArray[store.counterSeries].vote_average"/>

    </div>

  </header>

</template>

<style lang="scss" scoped>
  @use '../scss/partials/general' as *;
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  header{
    background-color: $primary-color;
    // debug
    min-height: 100vh;

    .container{
      @include centerFlex('vertical');
      flex-direction: column;

      .input *{
        margin: 2rem;
        padding: 5px;
      }
    }
  }


</style>