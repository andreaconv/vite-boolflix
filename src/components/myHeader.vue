<script>
import { store } from '../data/store';

export default {
  name: 'myHeader',
  data() {
    return{
      store,
    }
  },
  methods: {
  },
}
</script>

<template>

  <header>

    <div class="image">
      <img src="../assets/logo-boolflix.png" alt="">
    </div>

    <div class="input">
      <input
        placeholder="Cerca cosa guardare"
        v-model="store.searchInput"
        @keyup="$emit('searchMovie'), $emit('searchSeries') "
        type="text">

      <button @click="$emit('searchMovie'), $emit('searchSeries')">Search</button>
      
    </div> 

  </header>

</template>

<style lang="scss" scoped>
  @use '../scss/partials/general' as *;
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  header{
    @include centerFlex ('between');
    @include fixed();
    background-image: linear-gradient(black, $primary-color);
    height: $height-header;
    padding: 0 50px;
    opacity: 0.8;

    .image{
      height: 50%;
      img{
        height: 100%;
        object-fit: cover;
      }
    }

    .input
      *{
        margin-left: 1rem;
        padding: 10px 12px;
        border-radius: 7px;
        border: none;
      }
      button{
        color: white;
        background-color: $tertiary-color;
        &:hover{
          background-color: $secondary-color;
        }
      }
    }
    
    // TODO: rendere responsive l'immagine logo
  @media all and (max-width: 531px){
    header{
      padding: 0 30px;

      img{
        width: 23px;
        object-position: left;
      }
    }

  }


</style>