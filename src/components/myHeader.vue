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
    addCounter(){
      if (store.counter < store.movieUserArray.length){
        store.counter ++
      } 
      if (store.counter === store.movieUserArray.length){
        store.counter = 0
      }
      
    }
  },
}
</script>

<template>

  <header>

    <div class="container">

      <div class="input">
        <input v-model="store.searchInput" @keyup.enter="$emit('startSearch')" type="text">

        <button @click="$emit('startSearch')">Search</button>

        <button @click="addCounter">Next</button>
      </div>    
      
      <!-- <Card v-if="store.showCard"
        type="MOVIE"
        :title="store.movieUserArray[store.counter].title"
        :original_title="store.movieUserArray[store.counter].original_title" 
        :original_language="store.movieUserArray[store.counter].original_language"
        :vote_average="store.movieUserArray[store.counter].vote_average"/> -->

      <Card v-if="store.showCard"
        type="SERIES"
        :title="store.seriesUserArray[0].name"
        :original_title="store.seriesUserArray[0].original_name" 
        :original_language="store.seriesUserArray[0].original_language"
        :vote_average="store.seriesUserArray[0].vote_average"/>

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
      // debug
      height: 100vh;

      .input *{
        margin: 2rem;
        padding: 5px;
      }
    }
  }


</style>