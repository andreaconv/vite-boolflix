<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'myMain',
  components: {
    Card,
    Swiper,
    SwiperSlide,
  },
  // debug
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  // debug
  data() {
    return{
      store,
    }
  },
}
</script>

<template>

  <div class="main-wrapper">

    <h1>MOVIE POPULAR with slider</h1>
    <swiper
      :slides-per-view="5"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
        <swiper-slide 
        v-for="card in store.popularMovie" 
        :key="card.id">
          <Card 
            :image="card.poster_path"
            :title="card.title"
            :original_title="card.original_title" 
            :original_language="card.original_language"
            :vote_average="Math.round(card.vote_average / 2)"
          />
        </swiper-slide>
      </swiper>
    
    <h1>MOVIE POPULAR</h1>
    <div v-if="store.popularMovie.length > 0" class="row movie-pop">
      <Card
      v-for="card in store.popularMovie" 
      :key="card.id"
      :image="card.poster_path"
      :title="card.title"
      :original_title="card.original_title" 
      :original_language="card.original_language"
      :vote_average="Math.round(card.vote_average / 2)"/>
    </div>

    <h1 v-if="store.showCardMovie">MOVIE</h1>
    <div v-if="store.showCardMovie" class="row movie">
      <Card 
        v-for="card in store.movieUserArray" 
        :key="card.id"
        :image="card.poster_path"
        :title="card.title"
        :original_title="card.original_title" 
        :original_language="card.original_language"
        :vote_average="Math.round(card.vote_average / 2)"/>
    </div>

    <h1 v-if="store.showCardSeries">SERIES</h1>
    <div v-if="store.showCardSeries" class="row series">
      <Card
        v-for="card in store.seriesUserArray" 
        :key="card.id"
        :image="card.poster_path"
        :title="card.name"
        :original_title="card.original_name" 
        :original_language="card.original_language"
        :vote_average="Math.round(card.vote_average / 2)"/>
    </div>

  </div>

</template>

<style lang="scss" scoped>
  @use '../scss/partials/vars' as *;
  @use '../scss/partials/mixin' as *;

  .main-wrapper{
    padding-top: $height-header;
    min-height: 100vh;
    background-color: $primary-color;

    color: white;

    h1{
      color: white;
      text-align: center;
      margin: 0.5rem 0;
    }
    .row{
      display: flex;
      overflow-x: scroll;
      padding-bottom: 2rem;
    }
    

  }


</style>