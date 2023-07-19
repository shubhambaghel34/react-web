import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../../utils/constant";


 Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src ={LOGO_URL}
          />
        </div>
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;