import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/RestaurantContainer";
import SearchComponent from "../utils/Search";
import { GET_RESTAURANTS_URL } from "../utils/constants";

let allRestaurants = [];
let filterSelected = false;
const FilterButtonComponent = ({ filter, filterSelected }) => (
  <button
    className={(filterSelected ? "btn-selected" : "") + " btn-top-rated"}
    onClick={filter}
  >
    Top Rated Restaurants
  </button>
);
const BodyComponent = () => {
  const tenFakeRestaurantCards = Array.from({ length: 10 }, (e, index) => ({
    id: index,
  }));
  const [restaurants, setRestaurants] = useState(tenFakeRestaurantCards);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // gets called after component renders
    console.log("use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const callData = await fetch(GET_RESTAURANTS_URL);
    const { data } = await callData.json();
    const { cards } = data.success;

    const restaurants =
      cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (r) => r?.info
      );
    console.log(restaurants);
    allRestaurants = restaurants;
    setRestaurants(allRestaurants);
  };

  return (
    <div className="content-container">
      <div className="actions-container">
        <SearchComponent
          searchTypeEventCallback={(t) => setSearchText(t)}
          searchClickEventCallback={() =>
            setRestaurants(
              searchText
                ? allRestaurants.filter((r) =>
                    r?.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                : allRestaurants
            )
          }
          searchText={searchText}
        />
        <FilterButtonComponent
          filterSelected={filterSelected}
          filter={() => {
            filterSelected = !filterSelected;
            setRestaurants(
              filterSelected
                ? allRestaurants.filter((r) => r.avgRating >= 4)
                : allRestaurants
            );
          }}
        />
      </div>
      <RestaurantContainer restaurants={restaurants} />
    </div>
  );
};

export default BodyComponent;
