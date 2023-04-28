import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./routes.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    const location = useLocation();

  if (loading) {
    return (
      <div className="loading">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f3d5a969321565.5b7d0cbe73337.gif"
          alt=""
        ></img>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
