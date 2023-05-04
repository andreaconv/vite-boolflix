<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
    image: Object,
    name: String,
    type: String,
  },
  data() {
      return{
        store,
      }
    },
}
</script>

<template>
  
  <div v-if="store.showCard" class="card">
    <h1>{{ store.resultArray[store.counter].title }}</h1>
    <h2>{{ store.resultArray[store.counter].original_title }}</h2>
    <h3>{{ store.resultArray[store.counter].original_language }}</h3>
    <h4>{{ store.resultArray[store.counter].vote_average }}</h4>
  </div>

</template>

<style lang="scss" scoped>
.card{
  color: white;
}
</style>