import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constant";
import Star from "../../../resources/star.png";
const RestaurantsCard = (props) => {
  // console.log(props);
  const { mockData } = props;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines,
    totalRatingsString,
  } = mockData?.info;

  return (
    <>
      <div className=" m-4 p-4 w-[350px] rounded-lg bg-slate-100 shadow-lg transition duration-300 transform hover:scale-105">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h5>{cuisines.join(",")} </h5>
        <div className="flex">
          <img src={Star} className="flex w-6 h-6 p-1" />
          <h5>{avgRating}</h5>
          {/* <p className="">{totalRatingsString}likes</p> */}
        </div>

        <h5>{costForTwo}</h5>
        <div className="flex">
          <p className="">{totalRatingsString}likes</p>
        </div>
      </div>
    </>
    // <div className="grid gap-4">
    //   <div className="bg-gradient-to-b from-gray-600 to-gray-600 p-6 rounded-lg shadow-lg">
    //     <img
    //       src={CDN_URL + cloudinaryImageId}
    //       alt="Delicious Food"
    //       className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
    //     />
    //     <h2 className="text-white text-xl font-semibold mt-4">{name}</h2>
    //     <p className="mt-2 text-gray-300">{cuisines.join(",")}</p>
    //     <div className="mt-4">
    //       <span className="text-gray-400">Price:{costForTwo}</span>
    //       <h5>Rating: {avgRating}</h5>
    //       <h5>{costForTwo}</h5>

    //       {/* <button class="ml-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
    //         Order Now
    //       </button> */}
    //     </div>
    //   </div>
    //   {/* <div class="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg">
    //     <img
    //       src="food-image.jpg"
    //       alt="Delicious Food"
    //       class="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
    //     />
    //     <h2 class="text-white text-xl font-semibold mt-4">Delicious Dish</h2>
    //     <p class="mt-2 text-gray-300">
    //       Indulge in the flavors of this exquisite dish made with love.
    //     </p>
    //     <div class="mt-4">
    //       <span class="text-gray-400">Price: $15.99</span>
    //       <button class="ml-2 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300">
    //         Order Now
    //       </button>
    //     </div>
    //   </div> */}
    // </div>
  );
};

//HOC
export const withMenuPromoted = (RestaurantsCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantsCard {...props} />
      </div>
    );
  };
};

export default RestaurantsCard;
