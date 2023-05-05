<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
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
    <h2>{{ title }}</h2>
    <img class="flag" :src="selectImg" :alt="original_language">
    <div class="stars">
      <i v-for="star in vote_average" :key="star" class="fa-solid fa-star"></i>
      <i v-for="star in (5 - vote_average)" :key="star" class="fa-regular fa-star"></i>
    </div>
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

  .stars i{
    font-size: 1.2rem;
  }

  img.flag{
    width: 40px;
  }
}
</style>