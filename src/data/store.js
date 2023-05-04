import {reactive} from 'vue';

export const store = reactive({
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  apiUrlMoviePopular: "https://api.themoviedb.org/3/movie/popular?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  apiUrlSerie: "https://api.themoviedb.org/3/search/tv?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it_IT&",
  searchInput: '',
  movieUserArray: [],
  seriesUserArray: [],
  popularMovie: [],
  languagesArray: [],
  showCard: false,
  counter: 0,
})