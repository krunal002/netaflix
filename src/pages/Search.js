import axios from "axios";
import { useState } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../redux/searchSlice";
import { setIsLoading } from "../redux/userSlice";
import { MoviesList } from "../components/MoviesList";

export const SearchMovies = () => {
  const [inputText, setInputText] = useState("");
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${inputText}&include_adult=false&language=en-US&page=1`,
        options
      );
      // console.log(res.data.results)
      dispatch(
        setSearchedMovieDetails({
          searchedMovieName: inputText,
          movies: res?.data?.results,
        })
      );
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      dispatch(setIsLoading(false));
    }

    setInputText("");
  };

  return (
    <div className="bg-black h-[100vh]">
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between shadow-md custom-shadow border-2 p-2 border-gray-500 rounded-lg w-[100%]">
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Search Movies..."
              type="text"
              className="w-full outline-none text-lg text-white bg-black"
            />
            <button className="bg-red-700 text-white rounded-md px-4 py-2">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      <div>
        {(searchedMovie?.length === 0 || searchedMovie === null) && (
          <h1 className="text-lg text-white mx-[45%] py-[10%]">
            No result found
          </h1>
        )}

        {movieName && <MoviesList title={movieName} movies={searchedMovie} />}
      </div>
    </div>
  );
};
