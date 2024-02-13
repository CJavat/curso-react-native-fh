import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a7b1892159d5f01da5aceb8640b8796c',
    language: 'es-ES'
  }
})

export default movieDB;