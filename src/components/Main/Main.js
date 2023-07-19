
import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard from "../ResturantCard/RestaurantsCard";

import mockData  from "../../utils/data";

 Main = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="resturant-container">
        
          {mockData.map((restaurant) => (
            <RestaurantsCard key={restaurant.data.id} mockData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Main;