import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const VedioBackground = ({ movieId }) => {

  const trailerVedio = useSelector(store => store.movies?.trailerVedio)  

  const dispatch = useDispatch()
  // Fetch trailer Vedio
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((vedio) => vedio.type == "Trailer");
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
    console.log(trailer);

    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVedio?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
