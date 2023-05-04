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
        <input v-model="store.searchInput" @keyup.enter="$emit('startSearch')" type="text">

        <button @click="$emit('startSearch')">Search</button>

        <button @click="addCounter">Next</button>
      </div>    
      
      <Card v-if="store.showCard"
        :title="store.resultArray[store.counter].title"
        :original_title="store.resultArray[store.counter].original_title" 
        :original_language="store.resultArray[store.counter].original_language"
        :vote_average="store.resultArray[store.counter].vote_average"/>

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
    }
  }


</style>