import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getIsLogged } from "../../redux/Games/GamesSelectors";

export const PublicRoute = ({ children }) => {
  const token = useSelector(getIsLogged);

  return !token ? children : <Navigate to="/games" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element,
};
