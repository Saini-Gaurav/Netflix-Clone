import React from 'react'
import { useSelector } from 'react-redux'
import VedioTtile from './VedioTtile'
import VedioBackground from './VedioBackground'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];

  console.log(mainMovie)

  const {original_title, overview} = mainMovie
  return (
    <div>
      <VedioTtile title={original_title} overview={overview}/>
      <VedioBackground />
    </div>
  )
}

export default MainContainer
