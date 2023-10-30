const SearchComponent = ({
  searchTypeEventCallback,
  searchClickEventCallback,
  searchText
}) => {
  console.log("search rendererd");
  return (
    <div className="search-container">
      <input
        type="search"
        className="search-input"
        value={searchText}
        onChange={(e) => searchTypeEventCallback(e.target.value)}
      ></input>
      <button onClick={() => searchClickEventCallback()}>Search</button>
    </div>
  );
};

export default SearchComponent;
