import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
// import { API_DETAILS_URL, CDN_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;

  //const {name,cuisines,cloudinaryImageId,costForTwoMessage}=menu?.cards[0]?.card?.card?.info;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    menu?.cards[0].card?.card.info;

  const { itemCards } =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   console.log("",menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((card, idx) => (
          <li key={idx}>
            {card.card.info.name} - {"Rs."}
            {card.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
