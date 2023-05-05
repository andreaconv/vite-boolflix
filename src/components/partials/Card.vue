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
      return  `/src/assets/flags/language-${this.original_language}.svg`
    }
  }
}
</script>


<!-- <div v-if="store.popularMovie.length > 0" class="row movie-pop">
  <swiper
    :slides-per-view="5"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
    <swiper-slide v-for="card in store.popularMovie" 
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
</div> -->




<template>
  
  <div class="card">
    <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${image}`" alt="">

    <div class="info">

      <ul>
        <li>Titolo: {{ title }}</li>
        <li>Titolo originale: {{ original_title }}</li>
        <li></li>
      </ul>
      <img class="flag" :src="selectImg" :alt="original_language">
      <div class="stars">
        <i v-for="star in vote_average" :key="star" class="fa-solid fa-star"></i>
        <i v-for="star in (5 - vote_average)" :key="star" class="fa-regular fa-star"></i>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.card{
  height: 60vh;
  margin: 0 0.5rem;
  position: relative;
  background-color: brown;

  img.poster{
    height: 100%;
  }
  &:hover .info{
    display: block;
  }

  .info{
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.8);

    .stars i{
    font-size: 1.2rem;
    }
    img.flag{
      width: 40px;
    }
  }

  
}
</style>