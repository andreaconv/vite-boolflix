<script>
import { store } from '../data/store'
export default {
  name: 'myHeader',
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

      <div v-if="store.showCard" class="card">
        <h1>{{ store.resultArray[store.counter].title }}</h1>
        <h2>{{ store.resultArray[store.counter].original_title }}</h2>
        <h3>{{ store.resultArray[store.counter].original_language }}</h3>
        <h4>{{ store.resultArray[store.counter].vote_average }}</h4>
      </div>

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

      .card{
        color: white;
      }
    }
  }


</style>