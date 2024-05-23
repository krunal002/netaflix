import axios from "axios";
import { Now_Playing_Movies, options } from "../utils/constants";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(Now_Playing_Movies, options);
    // console.log("Now Playing Movies:", res.data.results);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log("Error", error);
  }
};
export default useNowPlayingMovies;
