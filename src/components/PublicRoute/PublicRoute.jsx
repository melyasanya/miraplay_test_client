import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLogged } from "../../redux/Games/GamesSelectors";

export const PublicRoute = ({ children }) => {
  const token = useSelector(getIsLogged);

  return !token ? children : <Navigate to="/games" />;
};
