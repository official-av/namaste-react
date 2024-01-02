import { useEffect, useState } from "react";
import { RestaurantCardComponent } from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { GET_RESTAURANT_DETAILS_URL } from "../utils/constants";

const RestaurantMenuComponent = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);
  const { restaurantId } = useParams();

  // fetch restaurant data from id
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const url = `${GET_RESTAURANT_DETAILS_URL}${restaurantId}`;
    console.log(url,GET_RESTAURANT_DETAILS_URL);
    const callData = await fetch(url);
    const { data } = await callData.json();

    setRestaurantData(data?.cards[0]?.card?.card?.info);

    let restaurantMenu =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
        ?.itemCards;
    restaurantMenu = restaurantMenu?.map((r) => r.card.info);

    setRestaurantMenuData(restaurantMenu);
  };

  return (
    <div className="restaurant-menu">
      <div className="restaurant-details">
        <RestaurantCardComponent restaurant={restaurantData} coverMode={true} />
      </div>
      <h3>MENU</h3>
      <div className="menu-details">
        {restaurantMenuData?.map((r) => {
          r["cloudinaryImageId"] = r?.imageId;
          return <RestaurantCardComponent key={r.id} restaurant={r} />;
        })}
      </div>
    </div>
  );
};
export default RestaurantMenuComponent;
