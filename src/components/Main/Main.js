import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard from "../ResturantCard/RestaurantsCard";

import mockData from "../../utils/data";

const Main = () => {
  
  const [resturants, setResturants] = useState(mockData);
  return (
    <div className="body">
      <div className="filter">
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
        {resturants.map((restaurant) => (
          <RestaurantsCard key={restaurant.data.id} mockData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Main;
