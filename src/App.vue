<script>
  import Header from './components/myHeader.vue';
  import Jumbo from './components/Jumbo.vue';
  import Main from './components/myMain.vue';
  import axios from 'axios';
  import { store } from './data/store';

  export default {
    name: 'App',
    components: {
      Header,
      Jumbo,
      Main,
    },
    data() {
      return{
        store,
        showCard: false
      }
    },
    methods: {
      getScrubs(){
        axios.get(store.apiUrlSerieScrubs)
        .then(result => {
          console.log("scrubs", result.data)
        })
      },
      getApiMovies(){
        axios.get(store.apiUrlMovie, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.movieUserArray = result.data.results;
          store.showCardMovie = true;
        })
      },
      getApiSeries(){
        axios.get(store.apiUrlSerie, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.seriesUserArray = result.data.results;
          store.showCardSeries = true;
        })
      },
      getMoviePopular(){
        axios.get(store.apiUrlMoviePopular)
        .then(result => {
          store.popularMovie = result.data.results;
        })
        .catch(error => {
          console.log(error.response)
        })
      },
    },
    mounted(){
      this.getMoviePopular()
      // this.getScrubs()
    },
    computed:{
    },
  }
  </script>

<template>

  <Header @searchMovie="getApiMovies" @searchSeries="getApiSeries"/>

  <!-- <Jumbo  /> -->

  <Main />

</template>

<style lang="scss">
  @import './scss/main.scss';
</style>