import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/RestaurantContainer";
import { SearchComponent } from "../utils/Search";

const FilterButtonComponent = ({ filter, filterSelected }) => (
  <button
    className={(filterSelected ? "btn-selected" : "") + " btn-top-rated"}
    onClick={filter}
    onMouseOver={() => console.log("hover on me")}
  >
    Top Rated Restaurants
  </button>
);
const BodyComponent = () => {
  const tenFakeRestaurantCards = Array.from({ length: 10 }, (e, index) => ({
    id: index,
  }));
  const [restaurants, updateRestaurants] = useState(tenFakeRestaurantCards);
  const [filterSelected, updateFilterSelected] = useState(false);

  useEffect(() => {
    // gets called after component renders
    console.log("use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const callData = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225"
    );
    const { data } = await callData.json();
    const { cards } = data.success;

    const restaurants =
      cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (r) => r?.info
      );
    console.log(restaurants);
    updateRestaurants(restaurants);
  };

  console.log("prints first ofcourse");

  return (
    <div className="content-container">
      <SearchComponent />
      <FilterButtonComponent
        filterSelected={filterSelected}
        filter={() => {
          updateFilterSelected(!filterSelected);
        }}
      />
      <RestaurantContainer
        restaurants={
          filterSelected
            ? restaurants.filter((r) => r.avgRating >= 4)
            : restaurants
        }
      />
    </div>
  );
};

export default BodyComponent;
