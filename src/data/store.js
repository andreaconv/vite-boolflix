import {reactive} from 'vue';

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT",
  // apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ccf44d34f97120e3970a55c5e2e787f1&language=it-IT&query=ritorno+al+futuro",
  searchInput: '',
  resultArray: [],
  showCard: false,
  counter: 0,
  
})