import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getIsLogged } from "../../redux/Games/GamesSelectors";

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getIsLogged);

  return token ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};
