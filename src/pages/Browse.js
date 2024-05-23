import { useEffect } from "react";
import { Header } from "../components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div>
      <Header />
    </div>
  );
};
