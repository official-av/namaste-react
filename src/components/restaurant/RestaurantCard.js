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
    <div className="mr-4 mb-8 bg-slate-100 rounded-xl w-[350px] border border-solid border-slate-300 shadow-lg hover:border-red-800 hover:bg-red-800 hover:text-white">
      <img
        className="w-full object-cover rounded-xl max-h-[250px]"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <div className="m-2 p-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <h4 className="text-md truncate font-semibold">{cuisines?.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    </div>
  ) : (
    <div className={restClass + " shimmer"}></div>
  );
};
