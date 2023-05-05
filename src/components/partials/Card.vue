<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
    type: String,
    image: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  },
  data() {
      return{
        store,
      }
  },
  computed:{
    selectImg(){
      // if()  se non trova l'immagine visualizza la stringa della lingua originale
      
      return  `/src/assets/flags/${this.original_language}.png`
    }
  }
}
</script>

<template>
  
  <div class="card">
    <!-- FIXME: perchè devo inserire la larghezza nell'URL dell'immagine? -->
    <img class="poster" :src="`https://image.tmdb.org/t/p/w300/${image}`" alt="">
    <h1>{{ type }}</h1>
    <h1>{{ title }}</h1>
    <img class="flag" :src="selectImg" :alt="original_language">
    <h4>{{ vote_average }}</h4>
  </div>

</template>

<style lang="scss" scoped>
.card{
  color: white;
  text-align: center;

  img.poster{
    width: 200px;
  }

  img.flag{
    width: 40px;
  }
}
</style>