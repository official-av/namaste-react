import { Link } from "react-router-dom";
import { RestaurantCardComponent } from "./RestaurantCard";
export const RestaurantContainer = ({ restaurants }) => (
  <div className="restaurant-container">
    {restaurants.map((r) => (
      <Link to={"/restaurant/" + r.id} key={r.id}>
        <RestaurantCardComponent restaurant={r} />
      </Link>
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
