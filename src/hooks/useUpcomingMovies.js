import axios from "axios";
import { Upcoming_Movies, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Upcoming_Movies, options);
    // console.log("Upcoming Movies: ", res.data.results);
    dispatch(getUpcomingMovies(res.data.results));
  } catch (error) {
    console.log("Error", error);
  }
};
export default useUpcomingMovies;
