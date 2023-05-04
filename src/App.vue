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
        axios.get(store.apiUrl)
        .then(result => {
          console.log(result.data)
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

  <Header />

</template>

<style lang="scss">
  @import './scss/main.scss';
</style>