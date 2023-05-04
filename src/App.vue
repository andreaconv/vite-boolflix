  <script>
  import Header from './components/myHeader.vue';
  import axios from 'axios';
  import { store } from './data/store';

  export default {
    name: 'App',
    components: {
      Header,
    },
    data() {
      return{
        store,
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrlMovie, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.resultArray = result.data.results;
          store.showCard = true;
          console.log("movie utente", store.resultArray)
        })
        this.getLanguages()
      },
      getLanguages(){
        axios.get(store.apiUrlMovie,
        {
          params: {
            query: store.searchInput,
          }
        })
        .then(result => {
          const languages = result.data.results;
          languages.forEach(language => {
            if (!store.languagesArray.includes(language.original_language)){
              store.languagesArray.push(language.original_language)
            }
            
          });
          console.log('array di lingue',store.languagesArray)
        })
      },
      getMoviePopular(){
        axios.get(store.apiUrlMoviePopular)
        .then(result => {
          store.popularMovie = result.data.results;
          console.log("movie popular",store.popularMovie)
        })
      }
    },
    mounted(){
      // this.getMoviePopular()
    },
    computed:{
    },
  }
  </script>

<template>

  <Header @startSearch="getApi"/>

</template>

<style lang="scss">
  @import './scss/main.scss';
</style>