import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";
import FallBack from "../Components/FallBack/FallBack";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <FallBack></FallBack>;
  }

  if (!userInfo) {
    return (
      <Navigate
        state={location?.pathname}
        to={"/login"}
        replace={false}
      ></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
