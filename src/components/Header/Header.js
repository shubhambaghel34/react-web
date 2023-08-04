import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navitems">
        <ul>
        <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/cart">Cart</Link>
          <button
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
            className="login-button"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
