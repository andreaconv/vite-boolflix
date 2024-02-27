import {reactive} from 'vue';

export const store = reactive({
  //input
  searchInput: '',
  //movies
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  arrUserMovie: [],
  // counterMovie: 0,
  showMovie: false,
  //series
  apiUrlSerie: "https://api.themoviedb.org/3/search/tv?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it_IT&",
  arrUserSeries: [],
  // counterSeries: 0,
  showSeries: false,
  //popular movie
  apiUrlMoviePopular: "https://api.themoviedb.org/3/movie/popular?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  popularMovie: [],
  //popular series
  apiUrlSeriesPopular: "https://api.themoviedb.org/3/tv/top_rated?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  popularSeries: [],
  showPopular: true,

  languagesArray: [],

  isLoading: true


  //STRUTTRA
  // movies: [],
  // series: [],
  // apiUrl: 'https://api.themoviedb.org/3/search/',
  // apiParams: {
  //   api_key: 'ccf44d34f97120e3970a55c5e2e787f1',
  //   query: '',
  //   language: 'it-IT',
  // }
})