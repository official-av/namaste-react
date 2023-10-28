import { RestaurantCardComponent } from "./RestaurantCard";
export const RestaurantContainer = ({ restaurants }) => (
  <div className="restaurant-container">
    {restaurants.map((r) => (
      <RestaurantCardComponent key={r.id} restaurant={r} />
    ))}
    {/* {() => {
        let C = [];
        for (let r of restaurants) {
          C.push(<RestaurantCardComponent restaurant={r} />);
        }
        return { C };
      }} */}
  </div>
);
