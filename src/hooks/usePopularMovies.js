import axios from "axios";
import { Popular_Movies, options } from "../utils/constants";
import { getPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(Popular_Movies, options);
    // console.log("Popular Movies:", res.data.results);
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log("Error", error);
  }
};
export default usePopularMovies;
