import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import RestaurantsCard from "../ResturantCard/RestaurantsCard";
import { API_URL } from "../../utils/constant";
import mockData from "../../utils/data";
import Shimmer from "../Shimmer/Shimmer";

const Main = () => {
  
  const [resturants, setResturants] = useState([]);








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
    })
    .catch((e) => console.error(e));
};

if(resturants.length == 0){
    return <Shimmer/>
}

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
