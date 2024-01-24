import { useEffect, useState } from "react";
import { GET_RESTAURANT_DETAILS_URL } from "./constants";

const useRestaurantMenuHook = (restaurantId) => {
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  // fetch restaurant data from id
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const url = `${GET_RESTAURANT_DETAILS_URL}${restaurantId}`;
    const callData = await fetch(url);
    const { data } = await callData.json();

    setRestaurantData(data?.cards[0]?.card?.card?.info);

    setRestaurantMenuData(
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards?.map(
        (r) => r.card.info
      )
    );
  };
  return {
    restaurantData,
    restaurantMenuData,
  };
};

export default useRestaurantMenuHook;
