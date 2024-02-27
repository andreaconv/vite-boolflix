<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

export default {
  props:{
    title: String,
    items: Array
  },
  data() {
    return{
      store,
    }
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Scrollbar, Navigation, Pagination],
    };
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <swiper
    :slidesPerView="3"
    :centeredSlides="false"
    :slidesPerGroupSkip="1"
    :grabCursor="true"
    :keyboard="{
      enabled: true,
    }"
    :breakpoints="{
      '0': {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      '560': {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      '767': {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      '993': {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    }"
    :scrollbar="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide 
      v-for="card in items" 
      :key="card.id">
        <Card 
          :card="card"
        />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>

h1{
  text-transform: uppercase;
  text-align: center;
  margin: 0.5rem 0;
}
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}


</style>