import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./pages/Body";

function App() {
  return (
    <div>
      <Body />
      <ToastContainer />
    </div>
  );
}

export default App;
