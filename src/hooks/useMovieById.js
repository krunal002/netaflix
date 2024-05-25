import axios from "axios";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getMovieClip } from "../redux/movieSlice";
import { useEffect } from "react";

export const useMovieById = async (movieid) => {
  const dispatch = useDispatch();
  // console.log("movie id: ", movieid);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieid}/videos`,
          options
        );
        const movieClip = res?.data?.results?.filter(
          ({ type }) => type === "Trailer"
        );
        // console.log("Clip: ", movieClip);
        dispatch(
          getMovieClip(
            movieClip.length > 0 ? movieClip[0] : res.data.results[0]
          )
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getMovieById();
  }, [dispatch, movieid]);
};
