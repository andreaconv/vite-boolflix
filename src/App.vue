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
        axios.get(store.apiUrl, 
        {
          params: {
            query: store.searchInput,
          }
        }
        )
        .then(result => {
          store.resultArray = result.data.results;
          store.showCard = true;
          console.log(store.resultArray)
        })
      }
    },
    mounted(){
    },
    computed(){
    },
  }
  </script>

<template>

  <Header @startSearch="getApi"/>

</template>

<style lang="scss">
  @import './scss/main.scss';
</style>