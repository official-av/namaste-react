import { IMG_URL } from "../utils/constants";

export const RestaurantCardComponent = ({ restaurant, coverMode }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    restaurant;

  let restClass = "restaurant-card";
  let restImgClass = "restaurant-img";
  if (coverMode) {
    restClass += " mode-cover";
    restImgClass += " mode-cover";
  }
  return restaurant?.name ? (
    <div className={restClass}>
      <img className={restImgClass} src={IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  ) : (
    <div className={restClass + " shimmer"}></div>
  );
};
