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
    <h3>{{ original_language }}</h3>
    <h4>{{ vote_average }}</h4>
  </div>

</template>

<style lang="scss" scoped>
.card{
  color: white;
}
</style>