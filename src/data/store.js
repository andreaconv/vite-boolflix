import {reactive} from 'vue';

export const store = reactive({
  //input
  searchInput: '',
  //movies
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  movieUserArray: [],
  counterMovie: 0,
  showCardMovie: false,
  //series
  apiUrlSerie: "https://api.themoviedb.org/3/search/tv?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it_IT&",
  seriesUserArray: [],
  counterSeries: 0,
  showCardSeries: false,
  //popular movie
  apiUrlMoviePopular: "https://api.themoviedb.org/3/movie/popular?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  popularMovie: [],
  //
  apiUrlSerieScrubs: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs",
  languagesArray: [],
})