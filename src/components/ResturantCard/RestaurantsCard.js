import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constant";

const RestaurantsCard = (props) => {
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
    <>
      <div className=" m-4 p-4 w-[350px] rounded-lg bg-slate-200">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h5>{cuisines.join(",")} </h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        {/* <h5>{deliveryTime} minutes</h5> */}
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

export default RestaurantsCard;
