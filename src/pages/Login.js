import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsLoading } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const Login = () => {
  const user = useSelector((store) => store.app.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const navigate = useNavigate();

  // navigate to browse
  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [navigate, user]);

  // Toaster
  const notify = (type, msg) => {
    if (type === "success") {
      return toast.success(`${msg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
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
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    if (isLoggedIn) {
      // login
      try {
        const user = { email, password };
        const res = await axios.post(
          "https://net-back.vercel.app/api/v1/user/login",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log("Response: ", res);

        dispatch(setUser(res.data.user));
        if (res.data.success) {
          notify("success", res.data.message);
        }
        navigate("/browse");
      } catch (error) {
        console.log("Error: ", error);
        notify("error", error.response.data.message);
      } finally {
        dispatch(setIsLoading(false));
      }
    } else {
      // register
      try {
        const user = { fullName, email, password };
        const res = await axios.post(
          "https://net-back.vercel.app/api/v1/user/register",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log("res", res);
        if (res.data.success) {
          notify("success", res.data.message);
        }
        setIsLoggedIn(true);
      } catch (error) {
        // console.log(error);
        notify("error", error.response.data.message);
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute z-1">
        <img
          className="h-[100vh] w-[100vw]"
          src="https://res.cloudinary.com/dfw7zitgl/image/upload/v1712939570/netflix%20clone/cover.jpg"
          alt="cover"
        />
      </div>
      <form
        onSubmit={submitHandler}
        className="left-0 right-0 my-[22vh] mx-auto w-3/12 p-12 absolute bg-black opacity-90 flex flex-col items-center rounded"
      >
        <h1 className="text-2xl text-white mb-5 font-bold">
          {isLoggedIn ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col w-[80%]">
          {!isLoggedIn && (
            <input
              type="text"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-2 my-1 rounded-sm outline-none bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 my-1 rounded-sm outline-none bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 my-1 rounded-sm outline-none bg-gray-800 text-white"
          />
          <button className="bg-red-700 text-white font-medium mt-6 p-2 rounded">
            {isLoading ? "Loading..." : isLoggedIn ? "Login" : "Signup"}
          </button>
          <p className="mt-1 text-white">
            {isLoggedIn ? "New to Netflix?" : "Already have an Account?"}{" "}
            <span
              className="text-red-700 font-bold cursor-pointer"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
