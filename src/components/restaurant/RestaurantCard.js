export const RestaurantCardComponent = ({ restaurant }) => {
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
