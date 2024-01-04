
export const User = ({ user }) => {
  const { name, location, avatar_url, profile_bio } = user;
  return (
    <div className="user-card">
      <img src={avatar_url}></img>
      <h3>{name}</h3>
      <h3>{location}</h3>
      <h3>{profile_bio}</h3>
    </div>
  );
};
