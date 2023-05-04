<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
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
}
</script>

<template>
  
  <div class="card">
    <h1>{{ title }}</h1>
    <h2>{{ original_title }}</h2>
    <img v-if="original_language === 'en'" src="../../assets/en.png">
    <img v-if="original_language === 'it'" src="../../assets/it.png">
    <h3 v-if="original_language !== 'en' || original_language !== it">{{ original_language }}</h3>
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