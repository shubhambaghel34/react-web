import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
// import { API_DETAILS_URL, CDN_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategories/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menu === null) return <Shimmer />;

  //const {name,cuisines,cloudinaryImageId,costForTwoMessage}=menu?.cards[0]?.card?.card?.info;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    menu?.cards[0].card?.card.info;

  const { itemCards } =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   console.log("",menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
  //console.log("------", menu.cards[2]);

  const categories =
    menu?.cards[2]?.groupedCard.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categorises", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>
      //setShowIndex is passed as function
      {categories.map((category, idx) => (
        <div>
          <RestaurantCategory
            key={idx}
            categories={category?.card?.card}
            showItems={idx == showIndex ? true : false}
            setShowIndex={() => setShowIndex(idx)}
          />
        </div>
      ))}
      {/* <p>{costForTwoMessage}</p> */}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((card, idx) => (
          <li key={idx}>
            {card.card.info.name} - {"Rs."}
            {card.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
