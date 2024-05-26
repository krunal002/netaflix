import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/searchSlice";

export const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.search.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = (type, msg) => {
    if (type === "success") {
      return toast.success(`${msg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      return toast.error(`${msg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");

      if (res.data.success) {
        notify("success", res.data.message);
      }

      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log("Error", error);
      notify("error", error.response.data.message);
    }
  };

  const toggleHandler = () =>{
    dispatch(setToggle())
  }

  return (
    <div className="flex w-[100%] items-center justify-between absolute z-10 px-5 bg-gradient-to-b from-black">
      <img
        className="w-40"
        src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1712916210/netflix%20clone/logo.png"
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center">
          <CgProfile size="20px" color="white" />
          <h1 className="text-white font-medium text-lg ml-1">
            {user?.fullName}
          </h1>
          <div className="ml-4">
            <button
              className="bg-red-700 text-white px-4 py-2"
              onClick={logoutHandler}
            >
              Logout
            </button>
            <button onClick={toggleHandler} className="bg-red-700 text-white px-4 py-2 ml-2">
              {toggle?"Home":"Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
