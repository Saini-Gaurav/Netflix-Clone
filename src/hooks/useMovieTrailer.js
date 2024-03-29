import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVedio = useSelector((store)=> store.movies.trailerVedio);

  // Fetch trailer Vedio && updating the store with vedio trailor data
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
  
    const filterData = json.results.filter((vedio) => vedio.type == "Trailer");
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    !trailerVedio && getMoviesVideos();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
