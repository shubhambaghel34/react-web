import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constant";

 RestaurantsCard = (props) => {
   // console.log(props);
    const { mockData } = props;
    const {
      cloudinaryImageId,
      name,
      costForTwo,
      avgRating,
      cuisines,
      deliveryTime,
    } = mockData?.info;
  
    return (
      <div className="resutrant-card">
        <img
          className="card-img"
          src={CDN_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h5>{cuisines.join(",")} </h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        {/* <h5>{deliveryTime} minutes</h5> */}
      </div>
    );
  };

  export default RestaurantsCard;