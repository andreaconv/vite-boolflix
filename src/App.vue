<!-- TODO: aggiungere bandiere   -->
  
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
          console.log("movie utente", store.movieUserArray)
        })
        // this.getLanguages()
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
          console.log("serie utente", store.seriesUserArray)
          console.log("nome della prima serie utente -->", store.seriesUserArray[0].name)
        })
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
          console.log("voto",store.popularMovie[0].vote_average)
        })
        .catch(error => {
          console.log(error.response)
        })
      },
    },
    mounted(){
      // this.getMoviePopular()
      // this.getScrubs()
    },
    computed:{
    },
  }
  </script>

<template>

  <Header @searchMovie="getApiMovies" @searchSeries="getApiSeries"/>

</template>

<style lang="scss">
  @import './scss/main.scss';
</style>