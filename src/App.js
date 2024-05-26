import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./pages/Body";
import MovieDialog from "./components/MovieDialog";

function App() {
  return (
    <div>
      <Body />
      <ToastContainer />
      <MovieDialog/>
    </div>
  );
}

export default App;
