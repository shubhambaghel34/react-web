import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg mb-2 mt-0 ">
      <div className="logo-container">
        <img className="w-20 mt-2 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <p>Online status:{onlineStatus ? "🟢" : "🔴"}</p>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 ml-4">
            <Link to="/cart">Cart</Link>
          </li>
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
