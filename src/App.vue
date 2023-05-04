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
          store.movieUserArray = result.data.results;
          store.showCard = true;
          console.log("movie utente", store.movieUserArray)
        })

        axios.get(store.apiUrlSerie, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.seriesUserArray = result.data.results;
          store.showCard = true;
          console.log("serie utente", store.seriesUserArray)
          console.log("nome della prima serie utente -->", store.seriesUserArray[store.counter].name)
        })
        // this.getLanguages()
      },
      //  questa funzione riempie l'array delle lingue con le lingue del film cercato al momento
      // getLanguages(){
      //   axios.get(store.apiUrlMovie,
      //   {
      //     params: {
      //       query: store.searchInput,
      //     }
      //   })
      //   .then(result => {
      //     const languages = result.data.results;
      //     languages.forEach(language => {
      //       if (!store.languagesArray.includes(language.original_language)){
      //         store.languagesArray.push(language.original_language)
      //       }
            
      //     });
      //     console.log('array di lingue',store.languagesArray)
      //   })
      // },
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