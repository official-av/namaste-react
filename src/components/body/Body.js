import { SearchComponent } from "../utils/Search";
import { RestaurantContainer } from "../restaurant/RestaurantContainer";
import { RESTAURANTS_DATA } from "../utils/mockData";
import { useState } from "react";

const filteredArr = RESTAURANTS_DATA;
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
  let [filterSelected, updateFilterSelected] = useState(false);
  console.log(updateFilterSelected);
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
            ? filteredArr.filter((r) => r.rating >= 4)
            : filteredArr
        }
      />
    </div>
  );
};

export default BodyComponent;
