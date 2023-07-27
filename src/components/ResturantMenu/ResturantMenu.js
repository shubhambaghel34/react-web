import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { API_DETAILS_URL, CDN_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const  {resId}=useParams();
// console.log(resturantId);

  useEffect(() => {
    fetchMenu();
  }, []);

  
 
  const fetchMenu = async () => {
    const data = await fetch(API_DETAILS_URL + resId);
    const josn = await data.json();
    console.log(josn.data);
    setMenu(josn.data);
    console.log("menuhere",menu);
  };

 if( menu === null) return <Shimmer />
 
 
//const {name,cuisines,cloudinaryImageId,costForTwoMessage}=menu?.cards[0]?.card?.card?.info;
const {name,cuisines,cloudinaryImageId,costForTwoMessage}=menu?.cards[0].card?.card.info;

const {itemCards}=menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log("",menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

  return (
    <div className="menu">
      <h1>{name}</h1> 
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
       {itemCards.map((card,idx)=>(
        <li key={idx}>{card.card.info.name} - {"Rs."}{card.card.info.price/100}</li>
       ))}
       
      </ul>
      <div>hello</div>
    </div>
  );
};

export default RestaurantMenu;
