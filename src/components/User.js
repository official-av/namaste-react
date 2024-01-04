import { useState } from "react";

export const User = ({ user }) => {
  const [count, setCount] = useState(0);
  const { name, location, avatar_url, profile_bio } = user;
  return (
    <div className="user-card">
      <img src={avatar_url}></img>
      <h3>{name}</h3>
      <h3>{location}</h3>
      <h3>{profile_bio}</h3>
      <h3>Count = {count}</h3>
    </div>
  );
};
