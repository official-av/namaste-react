const FilterButton = ({ filterChangeCallback, filterSelected }) => {
  console.log("filter rendererd");
  return (
    <button
      className="border border-solid border-green-500 text-green-500 p-4 hover:bg-green-500 hover:text-white rounded-xl  focus:ring focus:ring-green-100 focus:outline-none"
      onClick={filterChangeCallback}
    >
      Top Rated Restaurants
    </button>
  );
};
export default FilterButton;
