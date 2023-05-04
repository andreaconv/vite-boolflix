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
          console.log(result.data)
        })
      }
    },
    mounted(){
      this.getApi()
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