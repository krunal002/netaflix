import { useState } from "react";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((store) => store.app.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUser({ fullName, email, password }));
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
        className="left-0 right-0 my-[30vh] mx-auto w-3/12 p-12 absolute bg-black opacity-90 flex flex-col items-center rounded"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLoggedIn ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col w-[80%]">
          {!isLoggedIn && (
            <input
              type="text"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 my-1 rounded-sm outline-none bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 my-1 rounded-sm outline-none bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 my-1 rounded-sm outline-none bg-gray-800 text-white"
          />
          <button className="bg-red-700 text-white font-medium mt-6 p-3 rounded">
            {isLoggedIn ? "Login" : "Signup"}
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
