import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import power from "../../assets/power-off.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/signUp">Sign Up</Link>

        {user ? (
          <span className="link">
            <span>{user.email}</span>
            <img className="power" onClick={handleLogOut} src={power} alt="" />
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
