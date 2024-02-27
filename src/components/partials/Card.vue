<script>
import { store } from '../../data/store';

export default {
  name: 'Card',
  props:{
    card: Object,
  },
  data() {
      return{
        store,
      }
  },
  computed:{
    selectImg(){
      return  `/flags/language-${this.card.original_language}.svg`
    }
  }
}
</script>


<template>
  
  <div class="card">
    <img v-if="card.poster_path" class="poster" :src="`https://image.tmdb.org/t/p/w780/${card.poster_path}`" alt="">
    <img v-else class="poster" src="/placeholder.jpg" alt="">

    <div class="info">

      <ul>
        <li>Titolo: {{ card.title ? card.title : card.name }}</li>
        <li>Titolo originale: {{ card.original_title ? card.original_title : card.original_name }}</li>
        <li>Data di uscita: {{ card.release_date ? card.release_date : card.first_air_date}}</li>
        <li>Lingua: <img class="flag" :src="selectImg" :alt="card.original_language"></li>
        <li>
          <div class="stars">
            <span>Voti:</span>
            <i v-for="star in Math.round(card.vote_average / 2)" :key="star" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - Math.round(card.vote_average / 2))" :key="star" class="fa-regular fa-star"></i>
          </div>
        </li>
      </ul>

    </div>

  </div>

</template>

<style lang="scss" scoped>
  @use '../../scss/partials/vars' as *;

.card{
  position: relative;
  
  // TODO: overflow: hidden per togliere l'eccesso delle info e strecciare le immagini del poster per averle tutte alla stesa altezza
  img.poster{
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
  }
  &:hover{
    .info{
      display: block;
    }
  } 

  .info{
    display: none;
    animation: slideUp .8s ease;
    border-radius: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.8);
    padding: .6rem;
    li{
      padding-bottom: .4rem;
    }
    .stars i{
    font-size: 1.2rem;
    color: $tertiary-color;
    }
    img.flag{
      width: 40px;
    }
  }

  
@keyframes slideUp{
  0% {
    transform: translateY(+120%)
  }
  to {
    transform: translateY(0)
  }
}

  
}
</style>