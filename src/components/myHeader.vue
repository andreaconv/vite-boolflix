<script>
import { store } from '../data/store'
export default {
  name: 'myHeader',
  data() {
      return{
        store,
      }
    },
}
</script>

<template>

  <header>

    <div class="container">

      <input v-model="store.searchInput" type="text">

      <button @click="$emit('startSearch')">Search</button>

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
      @include centerFlex('both');
      padding: 0 5rem;
      // debug
      height: 100vh;

      *{
        margin: 2rem;
        padding: 5px;
      }
    }
  }


</style>