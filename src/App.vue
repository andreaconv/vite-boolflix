<script>
  import Header from './components/myHeader.vue';
  // import Jumbo from './components/Jumbo.vue';
  import Main from './components/myMain.vue';
  import axios from 'axios';
  import { store } from './data/store';

  export default {
    name: 'App',
    components: {
      Header,
      // Jumbo,
      Main,
    },
    data() {
      return{
        store
      }
    },
    methods: {
      getApiMovies(){
        axios.get(store.apiUrlMovie, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.arrUserMovie = result.data.results;
          store.showMovie = store.searchInput !== '';
          store.showPopular = store.searchInput === '';
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
          store.arrUserSeries = result.data.results;
          store.showSeries = store.searchInput !== '';
          store.showPopular = store.searchInput === '';
        })
      },
      getMoviePopular(){
        axios.get(store.apiUrlMoviePopular)
        .then(result => {
          store.popularMovie = result.data.results;
          store.isLoading = false
        })
        .catch(error => {
          console.log(error.response)
        })
      },
      getSeriesPopular(){
        axios.get(store.apiUrlSeriesPopular)
        .then(result => {
          store.popularSeries = result.data.results;
          store.isLoading = false
        })
        .catch(error => {
          console.log(error.response)
        })
      },
    },
    mounted(){
      this.getMoviePopular();
      this.getSeriesPopular()
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