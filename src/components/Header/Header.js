import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-custom-blue shadow-lg mb-1 mt-0  border border-gray-300 hover:border-purple-500 transition duration-300 px-4 py-2 rounded-md ">
      <div className="flex items-center">
        <img className="w-20 mt-2 rounded-full " src={LOGO_URL} />
      </div>
      <div className="flex items-center  p-0 m-1">
        <ul className="flex space-x-4">
          <li>
            <p className="text-white text-xl font-semibold">
              Online status:{" "}
              <span className="">{onlineStatus ? "🟢" : "🔴"}</span>
            </p>
            {/* <span class="inline-block w-4 h-4 rounded-full {{onlineStatus ? 'bg-green-500' : 'bg-gray-400'}}"></span> */}
          </li>
          <li>
            <a
              href="/"
              className="font-semibold text-xl text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              class="font-semibold text-xl text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-semibold text-xl text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="/grocery"
              className="font-semibold text-xl text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Grocery
            </a>
          </li>
          <li class="ml-4">
            <a
              href="/cart"
              className="font-semibold text-xl text-white  hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Cart
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
          className="m-4  bg-custom-blue text-xl text-white px-4 py-2 shadow-md hover:bg--700 border border-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-custom-orange-300"
        >
          {btnName}
        </button>
      </div>

      {/* <div className="flex items-center">
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
      </div> */}
    </div>
  );
};
export default Header;
