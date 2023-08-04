import React, { useEffect, useState } from "react";
import { API_DETAILS_URL } from "./constant";


const useRestaurantMenu = (resId) => {
const[resData,setResData]=useState(null)

    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_DETAILS_URL + resId);
      const josn = await data.json();
      console.log(josn.data);
      setResData(josn.data);
      console.log("MneuData", resData);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  };

  return resData;
};

export default useRestaurantMenu;
