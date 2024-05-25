import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'

export const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies)
  console.log("active", movies);
  if(!movies) return // early return in react
  const movie = movies[1];

  return (
    <div>
      <VideoTitle title={movie.original_title} overview={movie.overview}/>
      <VideoBackground movieId={movie.id}/>
    </div>
  )
}
