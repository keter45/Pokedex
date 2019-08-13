import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/search?q='
});
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default api;
