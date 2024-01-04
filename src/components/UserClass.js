import React from "react";

export class UserClass extends React.Component {
  // React.component tells react that hi
  // props is a read-only property in a react component class

  constructor(props) {
    // super props to update this.props in construcotr, for read-only values are present in props local arg
    super(props);
    // console.log(this.props); // prints value and not undefined like for without super(props)
  }
  
  // render method returns JSX for component rendering
  render() {
    console.log(this.props.user);
    const { name, location, avatar_url, profile_bio } = this.props?.user;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>{profile_bio}</h3>
      </div>
    );
  }
}
