import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../../utils/constant";

Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
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
