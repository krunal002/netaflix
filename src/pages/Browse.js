import { useEffect } from "react";
import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../components/MainContainer";
import { MovieContainer } from "../components/MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

export const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  // custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  );
};
