import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard from "../ResturantCard/RestaurantsCard";
import { API_URL } from "../../utils/constant";
// import mockData from "../../utils/data";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [resturants, setResturants] = useState([]);
  const [filteredResturants, setFilterResturant] = useState([]);
  const [searchValue, setSearachValue] = useState("");

  console.log("body rendered");

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

  if (onlineStatus === false) {
    return <h1>"Opps!, You are not connected to the network."</h1>;
  }

  return resturants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
            className="px-4 py-0.5 bg-green-300 m-4 rounded-md"
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
            className="px-2 py-0.5 bg-teal-400 rounded-md"
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
      </div>
      <div className="grid grid-cols-5 gap-0">
        {filteredResturants.map((restaurant, idx) => (
          <Link key={idx} to={"/restaurants/" + restaurant.info.id}>
            {" "}
            <RestaurantsCard mockData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
