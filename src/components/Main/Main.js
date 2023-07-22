import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard from "../ResturantCard/RestaurantsCard";
import { API_URL } from "../../utils/constant";
import mockData from "../../utils/data";
import Shimmer from "../Shimmer/Shimmer";

const Main = () => {
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
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data.cards[2].data.data.cards);
        setResturants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterResturant(json?.data?.cards[2]?.data?.data?.cards);
      })
      .catch((e) => console.error(e));
  };

  return resturants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input-box"
            value={searchValue}
            onChange={(e) => {
              setSearachValue(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-button"
          onClick={() => {
            const filterList = resturants.filter(
              (res) => res.data.avgRating > 4
            );
            //re-render will happen when state variable changes
            setResturants(filterList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="resturant-container">
        {filteredResturants.map((restaurant) => (
          <RestaurantsCard key={restaurant.data.id} mockData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Main;
