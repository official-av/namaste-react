import React from "react";

export class UserClass extends React.Component {
  // React.component tells react that hi
  // props is a read-only property in a react component class

  constructor(props) {
    console.log("user class instantiated");

    // super props to update this.props in construcotr, for read-only values are present in props local arg
    super(props);
    // create state in class insantiation
    this.state = {
      count: 0,
    };
    // console.log(this.props); // prints value and not undefined like for without super(props)
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  // render method returns JSX for component rendering
  render() {
    console.log("user class rendered");
    const { name, location, avatar_url, profile_bio } = this.props?.user;
    const { count } = this.state;
    return (
      <div className="user-card">
        {/* <button onClick={this.increaseCount.bind(this)}>ClickMe</button> */}
        <button onClick={() => this.increaseCount()}>ClickMe</button>
        <img src={avatar_url}></img>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{profile_bio}</h3>
        <h3>Count = {count}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("user class mounted");
  }
}
