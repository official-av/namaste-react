import { IMG_URL } from "../utils/constants";

export const RestaurantCardComponent = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    restaurant;

  return restaurant?.name ? (
    <div className="restaurant-card">
      <img className="restaurant-img" src={IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  ) : (
    <div className="restaurant-card shimmer"></div>
  );
};
