import { Component } from "react";
import { User } from "../components/User";
import { UserClass } from "../components/UserClass";
import { GET_USERS_URL } from "../components/utils/constants";

class AboutUsComponent extends Component {
  constructor(props) {
    console.log("about us instantiated");
    super(props);
    this.state = {
      user: { name: "av" },
    };
  }

  componentDidMount() {
    console.log("about us mounted");
    this.fetchUserData();
  }

  render() {
    console.log("about us rendered");
    const { user } = this.state;
    return (
      <div>
        <h1>about us</h1>
        {/* <User user={user} /> */}
        <UserClass user={user} />
        <UserClass user={user} />
      </div>
    );
  }

  fetchUserData = async () => {
    const userAPICallData = await fetch(GET_USERS_URL);
    const { payload } = await userAPICallData.json();
    this.setState({ user: payload?.results[0] });
    console.log("data fetched after first render");
  };
}
export default AboutUsComponent;
