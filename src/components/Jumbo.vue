<script>
import { store } from '../data/store';

export default {
  name: 'Jumbo',
  data() {
    return{
      store,
    }
  },
}
</script>

<template>

  <!-- FIXME: SE SI ATTIVA IL JUMBOTRON TOGLIERE IL PADDING-TOP DAL MAIN PERCHÉ L'HEADER È FIX E SI PERDE LA SUA ALTEZZAL -->

  <!-- TODO: aggiungere un set interval che aumenta il couter per ciclare l'array dei film popolari in modo da visualizzare come uno slider il carosello delle immagini dei film più popolari -->

  <img
    v-if="store.popularMovie.length > 0"
    :src="`https://image.tmdb.org/t/p/original/${store.popularMovie[0].backdrop_path}`"
    alt="">
  
</template>

<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;

  img{
    padding-top: $height-header;
    width: 100%;

  }

</style>