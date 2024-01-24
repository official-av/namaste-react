import { useParams } from "react-router-dom";
import { RestaurantCardComponent } from "./RestaurantCard";
import useRestaurantMenuHook from "../utils/useRestaurantMenuHook";

const RestaurantMenuComponent = () => {
  const { restaurantId } = useParams();

  const { restaurantData, restaurantMenuData } =
    useRestaurantMenuHook(restaurantId);

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
