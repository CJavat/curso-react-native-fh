import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movie.Interface";

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState( true );
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine( resp.data.results );
    setIsLoading( false );
  }

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading
  }
}
