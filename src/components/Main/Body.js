import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard, {
  withMenuPromoted,
} from "../ResturantCard/RestaurantsCard";
import { API_URL } from "../../utils/constant";
// import mockData from "../../utils/data";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext/UserContext";

const Body = () => {
  const [resturants, setResturants] = useState([]);
  const [filteredResturants, setFilterResturant] = useState([]);
  const [searchValue, setSearachValue] = useState("");

  const resPromotedCard = withMenuPromoted(RestaurantsCard);
  console.log("body rendered");

  const { setSiteName, loggedInuser } = useContext(UserContext);

  //will call callback function after main/body component render
  useEffect(() => {
    fetchData();
    console.log("úseEffect called");
  }, []);

  //fetching data
  const fetchData = async () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data.cards[2].data.data.cards);
        console.log(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
            .info
        );
        // console.log("--", json.data.cards);
        // setResturants(json?.data?.cards[2]?.data?.data?.cards);
        setResturants(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
        //setFilterResturant(json?.data?.cards[2]?.data?.data?.cards);
        //setFilterResturant(json?.data?.cards[2]?.data?.data?.cards);
        setFilterResturant(
          json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
      })
      .catch((e) => console.error(e));
  };

  const onlineStatus = useOnlineStatus();
  //console.log("listofRes:", JSON.stringify(resturants));
  if (onlineStatus === false) {
    return <h1>"Opps!, You are not connected to the network."</h1>;
  }

  return resturants.length == 0 ? (
    <Shimmer />
  ) : (
    //relative w-40 h-40 transform perspective(1000px) hover:rotate-y-180
    <div className="bg-custom-orange">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-b-slate-200"
            value={searchValue}
            onChange={(e) => {
              setSearachValue(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 m-4 border-gray-400 bg-custom-blue text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-300"
            //px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-300
            //
            //px-4 py-0.5 bg-green-300 m-4 rounded-md
            onClick={(e) => {
              //setSearachValue(searchValue);
              // console.log(searchValue);
              const filterResutrant = resturants.filter((res) =>
                res.data.name.toLowerCase().includes(searchValue.toLowerCase())
              );

              setFilterResturant(filterResutrant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-2 py-0.5  bg-custom-blue text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-300"
            onClick={() => {
              const filterList = resturants.filter(
                (res) => res.info.avgRating > 4
              );
              //re-render will happen when state variable changes
              setResturants(filterList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
        <div className="flex items-center m-4 p-4">
          <label> Username: </label>
          <input
            className="border border-black"
            value={loggedInuser}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-0">
        {filteredResturants.map((restaurant, idx) => (
          <Link key={idx} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.badges.isOpe ? (
              <resPromotedCard mockData={restaurant} />
            ) : (
              <RestaurantsCard mockData={restaurant} />
            )}

            {/**if the restaurant is promoted then add promted label to it */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
