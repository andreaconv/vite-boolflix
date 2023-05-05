<script>
import { store } from '../data/store';

export default {
  name: 'myHeader',
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
    },
  },
}
</script>

<template>

  <header>

      <img src="../assets/logo-boolflix.png" alt="">

      <div class="input">
        <input v-model="store.searchInput" @keyup.enter="$emit('searchMovie'), $emit('searchSeries')" type="text">

        <button @click="$emit('searchMovie'), $emit('searchSeries')">Search</button>

        <!-- <button @click="addCounterMovie">Next Movie</button> -->
        <!-- <button @click="addCounterSeries">Next Series</button> -->
      </div> 

  </header>

</template>

<style lang="scss" scoped>
  @use '../scss/partials/general' as *;
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  header{
    @include centerFlex ('between');
    @include fixed();
    // background-color: $primary-color;
    // TODO: modificare il colore con un linear-gradient()
    background-color: black;
    height: $height-header;
    padding: 0 50px;

    img{
      height: 50%;
    }

    .input *{
        margin: 2rem;
        padding: 5px;
      }
  }


</style>