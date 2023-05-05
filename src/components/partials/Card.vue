<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
    type: String,
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
    <h1>{{ type }}</h1>
    <h1>{{ title }}</h1>
    <!-- <h2>{{ original_title }}</h2> -->
    <img :src="selectImg" :alt="original_language">
    <!-- <img v-if="original_language === 'it'" src="../../assets/it.png"> -->
    <!-- <h3 v-if="original_language !== 'en' || original_language !== 'it'">{{ original_language }}</h3> -->
    <h4>{{ vote_average }}</h4>
  </div>

</template>

<style lang="scss" scoped>
.card{
  color: white;
  text-align: center;

  img{
    width: 40px;
  }
}
</style>