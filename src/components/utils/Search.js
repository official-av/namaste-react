
const SearchComponent = ({ searchClickEventCallback }) => {
  console.log("search Rendered");
  // distinctUntilChanged can be used here and debounceTime for debouncing
  return (
      <input
        placeholder="Search..."
        type="search"
        className="p-4 border border-red-600 placeholder-red-600 rounded-xl  focus:outline-none focus:ring focus:ring-red-100"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            searchClickEventCallback(e.target.value);
          }
        }}
        onChange={(e) => searchClickEventCallback(e.target.value)}
      ></input>
  );
};

export default SearchComponent;
