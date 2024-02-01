import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/RestaurantContainer";
import SearchComponent from "../utils/Search";
import { GET_RESTAURANTS_URL } from "../utils/constants";
import FilterButton from "../utils/Filter";

let allRestaurants = [];
let filterSelected = false;



const BodyComponent = () => {
  console.log("body rendered");
  const tenFakeRestaurantCards = Array.from({ length: 10 }, (e, index) => ({
    id: index,
  }));
  const [restaurants, setRestaurants] = useState(tenFakeRestaurantCards);

  useEffect(() => {
    // gets called after component renders
    // if no dependecy array => useEffect is called on every component re-render
    // if no empty depndency array => useEffect is called just once after initial component render
    // if depndency array has some values => useEffect is called when any of the dependecies change
    // example: useEffect(() => {}, [ anyStateVariable ]) (when anyStateVariable changes useEffect is called again )
    console.log("use Effect gets called");
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
    <div className="m-4 p-2">
      <div className="mb-8 flex justify-between">
        <SearchComponent
          searchClickEventCallback={(searchText) =>
            setRestaurants(
              searchText
                ? allRestaurants.filter((r) =>
                    r?.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                : allRestaurants
            )
          }
        />
        <FilterButton
          filterSelected={filterSelected}
          filterChangeCallback={() => {
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
