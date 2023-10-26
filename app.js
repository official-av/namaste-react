import React from "react";
import ReactDOM from "react-dom/client";

/**
 * AppLayout
 *  Header
 *    Logo
 *    NavItems
 *  Body
 *    Search
 *    RestaurantContainer
 *      RestaurantCard
 *        Image
 *        name
 *        star rating
 *        cuisines
 *        ETA
 *  Footer
 *    copyright
 *    links
 *    address
 *    contact
 */

const restaurants = [
  {
    id: 1,
    name: "KFC",
    imgURL:
      "https://d1ralsognjng37.cloudfront.net/0fa68ea5-6439-4f59-abfb-5a0f54f3c741.jpeg",
    cuisine: "Chicken, fried",
    rating: 4.3,
    time: 36,
    cost: 500,
  },
  {
    id: 2,
    name: "Subway",
    imgURL:
      "https://imageproxy.wolt.com/venue/6049c80b5e17b192228d7c27/8b14dbba-965d-11ed-81ff-22360be22887_8717d940_7231_11ed_8e97_26dde300d060_wolt_cover_1440x810px.jpg",
    cuisine: "Sandwich, Salad",
    rating: 4.1,
    time: 23,
    cost: 400,
  },
];
// #region Header Component
const LogoComponent = () => (
  <div className="logo-container">
    <img
      className="logo"
      src="https://i.pinimg.com/originals/19/a9/65/19a9657e4490b4c75ea5065f78e97cbe.jpg"
    />
  </div>
);
const NavItemsComponent = () => (
  <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
  </div>
);
const HeaderComponent = () => (
  <nav className="header">
    <LogoComponent />
    <NavItemsComponent />
  </nav>
);
// #endregion

// #region Body Component
const SearchComponent = () => <div className="search-container">Search</div>;
const RestaurantCardComponent = ({ restaurant }) => {
  const { name, imgURL, cuisine, rating, time, cost } = restaurant;
  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={imgURL}></img>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>${cost} for two</h4>
      <h6>{rating}</h6>
      <h6>{time}</h6>
    </div>
  );
};
const RestaurantContainer = ({ restaurants }) => (
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
  // not use index since when order of items change it will re-render again
const BodyComponent = () => (
  <div className="content-container">
    <SearchComponent />
    <RestaurantContainer restaurants={restaurants} />
  </div>
);
// #endregion
const AppLayoutComponent = () => (
  <div className="layout-container">
    <HeaderComponent />
    <BodyComponent />
  </div>
);
// this is component compistions
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
