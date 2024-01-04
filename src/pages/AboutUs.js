import { useEffect, useState } from "react";
import { User } from "../components/User";
import { GET_USERS_URL } from "../components/utils/constants";
import { UserClass } from "../components/UserClass";

const AboutUsComponent = () => {
  console.log('about us render started');
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  fetchUserData = async () => {
    const userAPICallData = await fetch(GET_USERS_URL);
    const { payload } = await userAPICallData.json();
    setUser(payload?.results[0]);
  };

  return (
    <div>
      <h1>about us</h1>
      <User user={user} />
      <UserClass user={user} />
    </div>
  );
};
export default AboutUsComponent;
