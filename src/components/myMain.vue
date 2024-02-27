<script>
import CustomSwiper from './customSwiper.vue';
import { store } from '../data/store';
import Loading from "./partials/Loading.vue";

export default {
  name: 'myMain',
  data() {
    return{
      store,
    }
  },
  components: {
    CustomSwiper,
    Loading
  }
}
</script>

<template>

  <main>
    <div v-if="store.isLoading" class="load">
      <Loading />
    </div>

    <div v-else class="container main-wrapper">
  
      <CustomSwiper v-if="store.showPopular" title="movies popular" :items="store.popularMovie"/>

      <CustomSwiper v-if="store.showPopular" title="series popular" :items="store.popularSeries"/>

      <CustomSwiper v-if="store.showMovie" title="movies" :items="store.arrUserMovie"/>

      <CustomSwiper v-if="store.showSeries" title="series" :items="store.arrUserSeries"/>

  
      <!-- debug -->
      <footer>
      </footer>
      <!-- debug -->
  
    </div>

  </main>

  

</template>

<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  main{
    background-color: $primary-color;
    color: white;
    padding-top: $height-header;
    min-height: 100vh;
  }

  .load{
    text-align: center;
  }
  .main-wrapper{

    // debug
    footer{
      height: 50px;
    }
    // debug

  }


</style>