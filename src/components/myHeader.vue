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
      if (store.counter < store.resultArray.length){
        store.counter ++
      } 
      if (store.counter === store.resultArray.length - 1 ){
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
        <input v-model="store.searchInput" type="text">

        <button @click="$emit('startSearch')">Search</button>

        <button @click="addCounter">Next</button>
      </div>    
      
      <Card />

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

      // .card{
      //   color: white;
      // }
    }
  }


</style>