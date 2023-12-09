import { useState } from "react";

const SearchComponent = ({ searchClickEventCallback }) => {
  console.log("search Rendered");
  // distinctUntilChanged can be used here and debounceTime for debouncing
  return (
    <div className="search-container">
      <input
        placeholder="Search..."
        type="search"
        className="search-input"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            searchClickEventCallback(e.target.value);
          }
        }}
        onChange={(e) => searchClickEventCallback(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchComponent;
